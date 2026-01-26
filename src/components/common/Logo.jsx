import { Link } from 'react-router-dom'

const Logo = ({ className = '', showLink = true, size = 'md', useImage = false }) => {
  const sizes = {
    sm: { globe: 32, text: 'text-lg', tagline: 'text-xs', spacing: 'space-x-2', img: 'h-8' },
    md: { globe: 48, text: 'text-2xl', tagline: 'text-sm', spacing: 'space-x-3', img: 'h-12' },
    lg: { globe: 64, text: 'text-3xl', tagline: 'text-base', spacing: 'space-x-4', img: 'h-16' },
    xl: { globe: 80, text: 'text-4xl', tagline: 'text-lg', spacing: 'space-x-5', img: 'h-20' },
  }

  const currentSize = sizes[size] || sizes.md

  // Try to use image file if available, otherwise use SVG
  const logoImagePath = '/images/logo.png'
  
  const GlobeIcon = () => {
    if (useImage) {
      return (
        <img 
          src={logoImagePath} 
          alt="Internlift India Technology Logo" 
          className={`${currentSize.img} w-auto object-contain`}
          onError={(e) => {
            // Fallback to SVG if image doesn't exist
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />
      )
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
    // If using image and it exists, show just the image
    if (useImage) {
      return (
        <div className={`flex items-center ${currentSize.spacing} ${className}`}>
          <img 
            src={logoImagePath} 
            alt="Internlift India Technology" 
            className={`${currentSize.img} w-auto object-contain`}
          />
        </div>
      )
    }
    
    // Otherwise show SVG + text
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
