export function CodeCraftLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Background gradient circle */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
          </defs>
  
          {/* Main background */}
          <rect width="40" height="40" rx="8" fill="url(#bgGradient)" />
  
          {/* QR Code pattern */}
          <g fill="url(#qrGradient)">
            {/* Corner squares */}
            <rect x="6" y="6" width="6" height="6" rx="1" />
            <rect x="28" y="6" width="6" height="6" rx="1" />
            <rect x="6" y="28" width="6" height="6" rx="1" />
  
            {/* Inner corner dots */}
            <rect x="8" y="8" width="2" height="2" rx="0.5" />
            <rect x="30" y="8" width="2" height="2" rx="0.5" />
            <rect x="8" y="30" width="2" height="2" rx="0.5" />
  
            {/* Data pattern dots */}
            <rect x="16" y="8" width="2" height="2" rx="0.5" />
            <rect x="20" y="8" width="2" height="2" rx="0.5" />
            <rect x="24" y="8" width="2" height="2" rx="0.5" />
  
            <rect x="16" y="12" width="2" height="2" rx="0.5" />
            <rect x="24" y="12" width="2" height="2" rx="0.5" />
            <rect x="30" y="12" width="2" height="2" rx="0.5" />
  
            <rect x="8" y="16" width="2" height="2" rx="0.5" />
            <rect x="12" y="16" width="2" height="2" rx="0.5" />
            <rect x="20" y="16" width="2" height="2" rx="0.5" />
            <rect x="28" y="16" width="2" height="2" rx="0.5" />
  
            <rect x="16" y="20" width="2" height="2" rx="0.5" />
            <rect x="24" y="20" width="2" height="2" rx="0.5" />
            <rect x="32" y="20" width="2" height="2" rx="0.5" />
  
            <rect x="12" y="24" width="2" height="2" rx="0.5" />
            <rect x="20" y="24" width="2" height="2" rx="0.5" />
            <rect x="28" y="24" width="2" height="2" rx="0.5" />
  
            <rect x="16" y="28" width="2" height="2" rx="0.5" />
            <rect x="24" y="28" width="2" height="2" rx="0.5" />
  
            <rect x="20" y="32" width="2" height="2" rx="0.5" />
            <rect x="28" y="32" width="2" height="2" rx="0.5" />
            <rect x="32" y="32" width="2" height="2" rx="0.5" />
          </g>
        </svg>
      </div>
    )
  }
  
  export function CodeCraftLogoWithText({
    size = 40,
    textSize = "text-xl",
    className = "",
  }: {
    size?: number
    textSize?: string
    className?: string
  }) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <CodeCraftLogo size={size} />
        <div className="flex flex-col">
          <h1
            className={`${textSize} font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight`}
          >
            CodeCraft
          </h1>
          <p className="text-xs text-gray-500 -mt-1">QR & Barcode Generator</p>
        </div>
      </div>
    )
  }
  