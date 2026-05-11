import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const targets = [
  {
    input: path.join(projectRoot, 'public', 'logo.png'),
    baseName: 'logo',
    widths: [48, 96, 192, 384],
  },
]

const ensureExists = async (filePath) => {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

const optimizeTarget = async ({ input, baseName, widths }) => {
  const exists = await ensureExists(input)
  if (!exists) {
    throw new Error(`Input image not found: ${input}`)
  }

  const outputDir = path.dirname(input)
  for (const width of widths) {
    const resized = sharp(input).resize({ width, withoutEnlargement: true })

    await resized
      .clone()
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(outputDir, `${baseName}-${width}.webp`))

    await resized
      .clone()
      .avif({ quality: 50, effort: 6 })
      .toFile(path.join(outputDir, `${baseName}-${width}.avif`))
  }
}

const run = async () => {
  for (const target of targets) {
    await optimizeTarget(target)
  }
  console.log('Image optimization completed.')
}

run().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
