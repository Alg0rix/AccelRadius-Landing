interface IllustrationProps {
  className?: string
}

export function LicenseGridIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="400" height="320" fill="#FAFAFA" />
      <g stroke="#111" strokeWidth="1.5">
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="160" x2="400" y2="160" />
        <line x1="0" y1="240" x2="400" y2="240" />
        <line x1="100" y1="0" x2="100" y2="320" />
        <line x1="200" y1="0" x2="200" y2="320" />
        <line x1="300" y1="0" x2="300" y2="320" />
      </g>
      <rect x="110" y="90" width="170" height="60" fill="#E8EEF8" stroke="#2B5FD9" strokeWidth="2" />
      <rect x="120" y="100" width="40" height="8" fill="#2B5FD9" />
      <rect x="120" y="115" width="120" height="4" fill="#111" opacity="0.3" />
      <rect x="120" y="125" width="90" height="4" fill="#111" opacity="0.2" />
      <circle cx="260" cy="120" r="16" fill="#FF4D00" />
      <path d="M254 120 L258 124 L266 116" stroke="white" strokeWidth="2" fill="none" />
      <rect x="110" y="170" width="80" height="50" fill="white" stroke="#111" strokeWidth="1.5" />
      <rect x="210" y="170" width="80" height="50" fill="white" stroke="#111" strokeWidth="1.5" />
      <rect x="310" y="170" width="70" height="50" fill="#111" />
      <rect x="110" y="250" width="270" height="40" fill="white" stroke="#2B5FD9" strokeWidth="2" />
      <rect x="120" y="262" width="60" height="16" fill="#2B5FD9" opacity="0.2" />
      <rect x="190" y="262" width="80" height="16" fill="#2B5FD9" opacity="0.15" />
    </svg>
  )
}

export function MachineActivationIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="400" height="320" fill="#111" />
      <rect x="40" y="40" width="320" height="240" fill="#FAFAFA" />
      <g stroke="#111" strokeWidth="1" opacity="0.15">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h-${i}`} x1="40" y1={40 + i * 30} x2="360" y2={40 + i * 30} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v-${i}`} x1={40 + i * 32} y1="40" x2={40 + i * 32} y2="280" />
        ))}
      </g>
      <rect x="80" y="80" width="120" height="80" fill="white" stroke="#2B5FD9" strokeWidth="2" />
      <rect x="90" y="95" width="60" height="6" fill="#111" />
      <rect x="90" y="108" width="90" height="4" fill="#111" opacity="0.25" />
      <rect x="90" y="118" width="70" height="4" fill="#111" opacity="0.15" />
      <circle cx="170" cy="140" r="10" fill="#FF4D00" />
      <path d="M220 120 L280 120 L280 200 L220 200 Z" fill="#E8EEF8" stroke="#111" strokeWidth="1.5" />
      <line x1="250" y1="120" x2="250" y2="200" stroke="#111" strokeWidth="1" />
      <line x1="220" y1="160" x2="280" y2="160" stroke="#111" strokeWidth="1" />
      <rect x="80" y="200" width="240" height="40" fill="#2B5FD9" />
      <rect x="95" y="212" width="80" height="16" fill="white" opacity="0.9" />
      <rect x="185" y="212" width="50" height="16" fill="#FF4D00" />
    </svg>
  )
}

export function FleetDashboardIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="400" height="320" fill="#FAFAFA" />
      <rect x="0" y="0" width="400" height="48" fill="#111" />
      <rect x="24" y="16" width="80" height="16" fill="#FF4D00" />
      <rect x="120" y="18" width="40" height="12" fill="white" opacity="0.4" />
      <rect x="170" y="18" width="40" height="12" fill="white" opacity="0.25" />
      <rect x="24" y="72" width="110" height="90" fill="white" stroke="#111" strokeWidth="1.5" />
      <text x="36" y="100" fill="#111" fontSize="28" fontFamily="system-ui" fontWeight="700">
        98%
      </text>
      <rect x="36" y="112" width="60" height="6" fill="#111" opacity="0.2" />
      <rect x="24" y="178" width="110" height="90" fill="white" stroke="#111" strokeWidth="1.5" />
      <text x="36" y="206" fill="#2B5FD9" fontSize="28" fontFamily="system-ui" fontWeight="700">
        247
      </text>
      <rect x="36" y="218" width="70" height="6" fill="#111" opacity="0.2" />
      <rect x="154" y="72" width="222" height="196" fill="white" stroke="#111" strokeWidth="1.5" />
      <polyline
        points="170,220 200,180 230,200 260,140 290,160 320,100 350,120"
        stroke="#2B5FD9"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="200" cy="180" r="5" fill="#FF4D00" />
      <circle cx="260" cy="140" r="5" fill="#FF4D00" />
      <circle cx="320" cy="100" r="5" fill="#FF4D00" />
      <rect x="170" y="88" width="100" height="8" fill="#111" opacity="0.15" />
    </svg>
  )
}

export function GoClientIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="400" height="320" fill="#111" />
      <rect x="48" y="48" width="304" height="224" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
      <rect x="48" y="48" width="304" height="28" fill="#2A2A2A" />
      <circle cx="64" cy="62" r="5" fill="#FF4D00" />
      <circle cx="80" cy="62" r="5" fill="#FFD700" opacity="0.6" />
      <circle cx="96" cy="62" r="5" fill="#4ADE80" opacity="0.6" />
      <text x="72" y="110" fill="#4ADE80" fontSize="11" fontFamily="monospace">
        package licensing
      </text>
      <text x="72" y="130" fill="#888" fontSize="11" fontFamily="monospace">
        mgr, err := licensing.NewManager(...)
      </text>
      <text x="72" y="150" fill="#888" fontSize="11" fontFamily="monospace">
        mgr.Start(ctx)
      </text>
      <text x="72" y="170" fill="#2B5FD9" fontSize="11" fontFamily="monospace">
        // heartbeat aktif
      </text>
      <rect x="72" y="190" width="200" height="2" fill="#FF4D00" />
      <rect x="72" y="200" width="160" height="40" fill="#2B5FD9" opacity="0.15" stroke="#2B5FD9" strokeWidth="1" />
      <text x="84" y="224" fill="white" fontSize="10" fontFamily="monospace">
        Licensed to PT Contoh
      </text>
      <rect x="280" y="100" width="56" height="56" fill="#FF4D00" />
      <text x="292" y="134" fill="white" fontSize="22" fontFamily="system-ui" fontWeight="700">
        Go
      </text>
    </svg>
  )
}