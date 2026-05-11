import { Link } from 'react-router-dom'

const Logo = ({ className = '', showLink = true, size = 'md', useImage = true }) => {
  const sizes = {
    sm: { globe: 32, text: 'text-lg', tagline: 'text-xs', spacing: 'space-x-2', img: 'h-8', width: 32, height: 32 },
    md: { globe: 48, text: 'text-2xl', tagline: 'text-sm', spacing: 'space-x-3', img: 'h-12', width: 48, height: 48 },
    lg: { globe: 64, text: 'text-3xl', tagline: 'text-base', spacing: 'space-x-4', img: 'h-16', width: 64, height: 64 },
    xl: { globe: 80, text: 'text-4xl', tagline: 'text-lg', spacing: 'space-x-5', img: 'h-20', width: 80, height: 80 },
  }

  const currentSize = sizes[size] || sizes.md

  // Use optimized logo formats with PNG fallback
  const logoImagePath = '/logo.png'
  const logoWebpSrcSet = '/logo-48.webp 48w, /logo-96.webp 96w, /logo-192.webp 192w, /logo-384.webp 384w'
  const logoAvifSrcSet = '/logo-48.avif 48w, /logo-96.avif 96w, /logo-192.avif 192w, /logo-384.avif 384w'
  const isCriticalLogo = showLink && size === 'md'
  const logoSizes = `${currentSize.width}px`

  const OptimizedLogoImage = ({ extraClass = '' }) => (
    <picture>
      <source srcSet={logoAvifSrcSet} type="image/avif" sizes={logoSizes} />
      <source srcSet={logoWebpSrcSet} type="image/webp" sizes={logoSizes} />
      <img
        src={logoImagePath}
        srcSet={logoWebpSrcSet}
        sizes={logoSizes}
        alt="Internlift India Technology Logo"
        loading={isCriticalLogo ? 'eager' : 'lazy'}
        fetchPriority={isCriticalLogo ? 'high' : 'auto'}
        decoding="async"
        width={currentSize.width}
        height={currentSize.height}
        className={`${currentSize.img} w-auto object-contain ${extraClass}`}
      />
    </picture>
  )
  
  const GlobeIcon = () => {
    if (useImage) {
      return <OptimizedLogoImage />
    }
    
    return (
      <svg
        width={currentSize.globe}
        height={currentSize.globe}
        viewBox="0 0 64 64"
        className="flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 3D Globe with pixelated squares - black to green transition */}
        {/* Left side - black squares */}
        <g>
          <rect x="10" y="6" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="6" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="6" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="10" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="10" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="10" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="22" y="10" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="6" y="14" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="14" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="14" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="14" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="22" y="14" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="6" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="22" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="26" y="18" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="22" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="22" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="22" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="22" y="22" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="26" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="26" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="26" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="22" y="26" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="10" y="30" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="14" y="30" width="3.5" height="3.5" rx="0.4" fill="#000000" />
          <rect x="18" y="30" width="3.5" height="3.5" rx="0.4" fill="#000000" />
        </g>
        
        {/* Center transition zone */}
        <g>
          <rect x="26" y="14" width="3.5" height="3.5" rx="0.4" fill="#003300" />
          <rect x="30" y="14" width="3.5" height="3.5" rx="0.4" fill="#006600" />
          <rect x="26" y="18" width="3.5" height="3.5" rx="0.4" fill="#006600" />
          <rect x="30" y="18" width="3.5" height="3.5" rx="0.4" fill="#009900" />
          <rect x="34" y="18" width="3.5" height="3.5" rx="0.4" fill="#00CC00" />
          <rect x="26" y="22" width="3.5" height="3.5" rx="0.4" fill="#009900" />
          <rect x="30" y="22" width="3.5" height="3.5" rx="0.4" fill="#00CC00" />
          <rect x="34" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="26" y="26" width="3.5" height="3.5" rx="0.4" fill="#00CC00" />
          <rect x="30" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="34" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
        </g>
        
        {/* Right side - bright green squares */}
        <g>
          <rect x="34" y="10" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="38" y="10" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="10" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="10" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="10" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="34" y="14" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="38" y="14" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="14" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="14" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="14" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="34" y="18" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="38" y="18" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="18" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="18" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="18" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="34" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="38" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="22" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="38" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="26" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="42" y="30" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="46" y="30" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
          <rect x="50" y="30" width="3.5" height="3.5" rx="0.4" fill="#00FF00" />
        </g>
        
        {/* Top center white space */}
        <circle cx="32" cy="10" r="1.5" fill="#FFFFFF" />
        <rect x="30.5" y="8.5" width="0.8" height="0.8" fill="#000000" opacity="0.3" />
        <rect x="32.7" y="8.5" width="0.8" height="0.8" fill="#000000" opacity="0.3" />
      </svg>
    )
  }

  const LogoContent = () => {
    // Logo image appears BEFORE text - as requested
    if (useImage) {
      return (
        <div className={`flex items-center ${currentSize.spacing} ${className}`}>
          {/* Logo Image - appears before text */}
          <OptimizedLogoImage extraClass="flex-shrink-0" />
          {/* Text content */}
          <div className="flex flex-col">
            <span className={`${currentSize.text} font-bold text-white uppercase tracking-tight leading-tight`}>
              INTERNLIFT
            </span>
            <span className={`${currentSize.tagline} font-normal text-white uppercase tracking-[0.15em] leading-tight`}>
              INDIA TECHNOLOGY
            </span>
          </div>
        </div>
      )
    }
    
    // Fallback: SVG + text (if useImage is false)
    return (
      <div className={`flex items-center ${currentSize.spacing} ${className}`}>
        <GlobeIcon />
        <div className="flex flex-col">
          <span className={`${currentSize.text} font-bold text-white uppercase tracking-tight leading-tight`}>
            INTERNLIFT
          </span>
          <span className={`${currentSize.tagline} font-normal text-white uppercase tracking-[0.15em] leading-tight`}>
            INDIA TECHNOLOGY
          </span>
        </div>
      </div>
    )
  }

  if (showLink) {
    return (
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}

export default Logo
