export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect width="32" height="32" rx="8" fill="url(#nexus-grad)" />
            <path d="M8 22L14 10L20 18L24 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="24" cy="14" r="2.5" fill="white"/>
            <defs>
              <linearGradient id="nexus-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#1D4ED8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">Nexus AI</span>
      </div>
    </div>
  )
}
