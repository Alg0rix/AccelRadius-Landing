import type { ReactNode } from "react"
import { BRAND_ICON } from "@/lib/brand"

type SvgProps = { className?: string }

function GridPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width={24} height={24} patternUnits="userSpaceOnUse">
      <path
        d="M24 0H0V24"
        fill="none"
        stroke="rgba(255,255,255,0.045)"
        strokeWidth={0.5}
      />
    </pattern>
  )
}

function NodeBox({
  x,
  y,
  w,
  h,
  title,
  sub,
  icon,
  fill,
  stroke,
  accent,
  className,
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  icon: ReactNode
  fill: string
  stroke: string
  accent: string
  className?: string
}) {
  return (
    <g className={className} transform={`translate(${x - w / 2} ${y - h / 2})`}>
      <rect
        width={w}
        height={h}
        rx={12}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        filter="url(#shadow-soft)"
      />
      <rect
        x={1}
        y={1}
        width={w - 2}
        height={h - 2}
        rx={11}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      <g transform={`translate(12 ${sub ? 14 : 18})`}>{icon}</g>
      <text
        x={44}
        y={sub ? 20 : 24}
        fill="#f4f4f5"
        fontSize={11}
        fontWeight={700}
        fontFamily="system-ui, sans-serif"
      >
        {title}
      </text>
      {sub && (
        <text
          x={44}
          y={34}
          fill="rgba(255,255,255,0.42)"
          fontSize={9}
          fontWeight={500}
          fontFamily="system-ui, sans-serif"
        >
          {sub}
        </text>
      )}
      <rect x={12} y={sub ? 40 : 32} width={w - 24} height={2} rx={1} fill={accent} opacity={0.35} />
    </g>
  )
}

function IconCloud({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14h12a4 4 0 0 0 .5-8 5 5 0 0 0-9.6 1.2A3.5 3.5 0 0 0 6 14z" />
    </g>
  )
}

function IconGlobe({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6}>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </g>
  )
}

function IconUsers({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round">
      <circle cx={9} cy={9} r={3} />
      <circle cx={17} cy={10} r={2.5} />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2.2 1.6-3.8 4-4" />
    </g>
  )
}

function IconRouter({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round">
      <rect x={4} y={12} width={16} height={8} rx={2} />
      <path d="M8 12V8M12 12V6M16 12V8" />
      <circle cx={8} cy={16} r={1} fill={color} />
      <circle cx={12} cy={16} r={1} fill={color} />
      <circle cx={16} cy={16} r={1} fill={color} />
    </g>
  )
}

function IconWifi({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round">
      <path d="M2 10c5-5 13-5 18 0M5.5 13.5c3.2-3.2 8.3-3.2 11.5 0M9 17a3 3 0 0 1 4 0" />
      <circle cx={11} cy={19} r={1} fill={color} />
    </g>
  )
}

function IconServer({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth={1.6}>
      <rect x={4} y={4} width={16} height={5} rx={1.5} />
      <rect x={4} y={11} width={16} height={5} rx={1.5} />
      <rect x={4} y={18} width={16} height={5} rx={1.5} />
      <circle cx={7} cy={6.5} r={0.8} fill={color} />
      <circle cx={7} cy={13.5} r={0.8} fill={color} />
      <circle cx={7} cy={20.5} r={0.8} fill={color} />
    </g>
  )
}

export function CloudTopologySvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 520 380"
      className={className}
      aria-label="Topologi SaaS cloud: billing terpisah dari jaringan ISP"
      role="img"
      data-topo-canvas="cloud"
    >
      <defs>
        <GridPattern id="grid-cloud" />
        <filter id="shadow-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx={0} dy={4} stdDeviation={6} floodColor="#000" floodOpacity={0.35} />
        </filter>
        <marker id="arrow-amber" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b" />
        </marker>
        <linearGradient id="bg-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14110d" />
          <stop offset="100%" stopColor="#0c0c10" />
        </linearGradient>
        <radialGradient id="glow-amber" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="rgba(245,158,11,0.18)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0)" />
        </radialGradient>
      </defs>

      <rect width={520} height={380} rx={16} fill="url(#bg-cloud)" />
      <rect width={520} height={380} rx={16} fill="url(#glow-amber)" />
      <rect width={520} height={380} rx={16} fill="url(#grid-cloud)" />

      <g className="topo-zone">
        <rect
          x={108}
          y={28}
          width={304}
          height={118}
          rx={20}
          fill="rgba(245,158,11,0.05)"
          stroke="rgba(245,158,11,0.3)"
          strokeWidth={1.5}
          strokeDasharray="7 5"
        />
        <text
          x={260}
          y={52}
          textAnchor="middle"
          fill="rgba(251,191,36,0.85)"
          fontSize={10}
          fontWeight={700}
          letterSpacing="0.16em"
          fontFamily="system-ui, sans-serif"
        >
          VENDOR CLOUD
        </text>
      </g>

      <g className="topo-zone">
        <rect
          x={36}
          y={248}
          width={448}
          height={112}
          rx={20}
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={1.5}
          strokeDasharray="6 4"
        />
        <text
          x={260}
          y={272}
          textAnchor="middle"
          fill="rgba(255,255,255,0.38)"
          fontSize={10}
          fontWeight={700}
          letterSpacing="0.16em"
          fontFamily="system-ui, sans-serif"
        >
          LOKASI ISP
        </text>
      </g>

      <path
        className="topo-line topo-line-draw topo-motion-path-cloud"
        d="M 108 310 C 108 190 175 105 260 92"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={2.2}
        strokeDasharray="9 11"
        strokeOpacity={0.8}
        markerEnd="url(#arrow-amber)"
      />
      <path
        className="topo-line topo-line-draw topo-line-broken"
        d="M 260 156 L 260 278"
        fill="none"
        stroke="#ef4444"
        strokeWidth={2.2}
        strokeDasharray="7 8"
      />
      <path
        className="topo-line topo-line-draw topo-motion-path-cloud-local"
        d="M 392 310 L 308 310"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={1.6}
      />

      <text
        x={148}
        y={188}
        fill="rgba(245,158,11,0.6)"
        fontSize={9}
        fontWeight={600}
        fontFamily="system-ui, sans-serif"
      >
        latency tinggi
      </text>

      <circle className="topo-packet topo-packet-cloud" r={5} fill="#f59e0b" cx={108} cy={310} />
      <circle className="topo-packet topo-packet-cloud-2" r={4} fill="rgba(255,255,255,0.45)" cx={392} cy={310} />

      <g className="topo-warning">
        <circle cx={260} cy={216} r={20} fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.4)" strokeWidth={1.5} />
        <text x={260} y={222} textAnchor="middle" fill="#f87171" fontSize={18} fontWeight={700}>
          ✕
        </text>
      </g>
      <g className="topo-warning-label">
        <rect x={196} y={232} width={128} height={22} rx={11} fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)" />
        <text x={260} y={247} textAnchor="middle" fill="#fca5a5" fontSize={9} fontWeight={700} fontFamily="system-ui, sans-serif">
          Billing ↔ RADIUS putus
        </text>
      </g>

      <NodeBox
        className="topo-node"
        x={260}
        y={88}
        w={148}
        h={52}
        title="SaaS Vendor"
        sub="Hosted pihak ketiga"
        fill="#1a1814"
        stroke="rgba(245,158,11,0.35)"
        accent="#f59e0b"
        icon={<IconCloud color="#fbbf24" />}
      />
      <NodeBox
        className="topo-node"
        x={260}
        y={138}
        w={136}
        h={52}
        title="Billing Cloud"
        sub="Data di luar ISP"
        fill="#1a1814"
        stroke="rgba(245,158,11,0.28)"
        accent="#f59e0b"
        icon={<IconGlobe color="#fbbf24" />}
      />
      <NodeBox
        className="topo-node"
        x={108}
        y={310}
        w={128}
        h={52}
        title="Tim ISP"
        sub="Akses remote"
        fill="#1c1c24"
        stroke="rgba(255,255,255,0.12)"
        accent="rgba(255,255,255,0.3)"
        icon={<IconUsers color="rgba(255,255,255,0.65)" />}
      />
      <NodeBox
        className="topo-node"
        x={260}
        y={310}
        w={132}
        h={52}
        title="MikroTik"
        sub="RADIUS lokal"
        fill="#1f1414"
        stroke="rgba(239,68,68,0.35)"
        accent="#ef4444"
        icon={<IconRouter color="#f87171" />}
      />
      <NodeBox
        className="topo-node"
        x={392}
        y={310}
        w={128}
        h={52}
        title="Pelanggan"
        sub="PPPoE / Hotspot"
        fill="#1c1c24"
        stroke="rgba(255,255,255,0.12)"
        accent="rgba(255,255,255,0.3)"
        icon={<IconWifi color="rgba(255,255,255,0.65)" />}
      />
    </svg>
  )
}

export function SelfHostedTopologySvg({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 520 380"
      className={className}
      aria-label="Topologi self-hosted: billing dan RADIUS dalam infrastruktur ISP"
      role="img"
      data-topo-canvas="self"
    >
      <defs>
        <GridPattern id="grid-self" />
        <filter id="shadow-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx={0} dy={4} stdDeviation={6} floodColor="#000" floodOpacity={0.35} />
        </filter>
        <clipPath id="logo-clip">
          <rect x={14} y={14} width={32} height={32} rx={6} />
        </clipPath>
        <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={8} result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker id="arrow-blue" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5b8def" />
        </marker>
        <marker id="arrow-green" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#34d399" />
        </marker>
        <linearGradient id="bg-self" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a0d14" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
        <radialGradient id="glow-self" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="rgba(43,95,217,0.2)" />
          <stop offset="100%" stopColor="rgba(43,95,217,0)" />
        </radialGradient>
        <linearGradient id="hub-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2540" />
          <stop offset="100%" stopColor="#12182a" />
        </linearGradient>
      </defs>

      <rect width={520} height={380} rx={16} fill="url(#bg-self)" />
      <rect width={520} height={380} rx={16} fill="url(#glow-self)" />
      <rect width={520} height={380} rx={16} fill="url(#grid-self)" />

      <g className="topo-zone">
        <rect
          x={64}
          y={48}
          width={392}
          height={284}
          rx={24}
          fill="rgba(43,95,217,0.06)"
          stroke="rgba(43,95,217,0.38)"
          strokeWidth={1.5}
        />
        <text
          x={260}
          y={72}
          textAnchor="middle"
          fill="rgba(91,141,239,0.95)"
          fontSize={10}
          fontWeight={700}
          letterSpacing="0.16em"
          fontFamily="system-ui, sans-serif"
        >
          INFRASTRUKTUR ISP ANDA
        </text>
      </g>

      <path
        className="topo-line topo-line-draw topo-motion-path-self-team"
        d="M 138 188 L 178 188"
        fill="none"
        stroke="#5b8def"
        strokeWidth={2.2}
        markerEnd="url(#arrow-blue)"
      />
      <path
        className="topo-line topo-line-draw topo-line-sync"
        d="M 260 248 L 260 272"
        fill="none"
        stroke="#34d399"
        strokeWidth={2.6}
        markerEnd="url(#arrow-green)"
      />
      <path
        className="topo-line topo-line-draw topo-line-sync-rev"
        d="M 272 272 L 272 248"
        fill="none"
        stroke="#34d399"
        strokeWidth={2}
        strokeOpacity={0.55}
        markerEnd="url(#arrow-green)"
      />
      <path
        className="topo-line topo-line-draw topo-motion-path-self"
        d="M 382 310 L 318 310 L 260 310 L 260 272"
        fill="none"
        stroke="#34d399"
        strokeWidth={2.2}
        markerEnd="url(#arrow-green)"
      />

      <circle className="topo-packet topo-packet-self" r={5} fill="#34d399" cx={382} cy={310} />
      <circle className="topo-packet topo-packet-self-2" r={4} fill="#5b8def" cx={138} cy={188} />

      <g className="topo-sync-badge">
        <rect x={214} y={214} width={92} height={24} rx={12} fill="rgba(52,211,153,0.14)" stroke="rgba(52,211,153,0.38)" />
        <text x={260} y={230} textAnchor="middle" fill="#6ee7b7" fontSize={10} fontWeight={700} fontFamily="system-ui, sans-serif">
          Sinkron realtime
        </text>
      </g>

      <g className="topo-badge">
        <rect x={168} y={338} width={184} height={24} rx={12} fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.28)" />
        <text x={260} y={354} textAnchor="middle" fill="#86efac" fontSize={9} fontWeight={700} fontFamily="system-ui, sans-serif">
          Isolir & tagihan dalam satu alur
        </text>
      </g>

      <NodeBox
        className="topo-node"
        x={108}
        y={188}
        w={128}
        h={52}
        title="Tim operasi"
        sub="Dashboard lokal"
        fill="#12182a"
        stroke="rgba(43,95,217,0.35)"
        accent="#5b8def"
        icon={<IconUsers color="#93c5fd" />}
      />

      <g className="topo-node" transform="translate(186 88)" filter="url(#glow-blue)">
        <rect width={148} height={72} rx={14} fill="url(#hub-grad)" stroke="rgba(43,95,217,0.5)" strokeWidth={2} />
        <image href={BRAND_ICON} x={14} y={14} width={32} height={32} clipPath="url(#logo-clip)" />
        <text x={54} y={28} fill="#f4f4f5" fontSize={12} fontWeight={700} fontFamily="system-ui, sans-serif">
          Accel Radius
        </text>
        <text x={54} y={42} fill="#93c5fd" fontSize={9} fontWeight={500} fontFamily="system-ui, sans-serif">
          Billing + RADIUS
        </text>
        <rect x={14} y={52} width={44} height={14} rx={7} fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" />
        <text x={36} y={62} textAnchor="middle" fill="#6ee7b7" fontSize={8} fontWeight={700} fontFamily="system-ui, sans-serif">
          Aktif
        </text>
        <rect x={64} y={52} width={52} height={14} rx={7} fill="rgba(43,95,217,0.2)" stroke="rgba(43,95,217,0.35)" />
        <text x={90} y={62} textAnchor="middle" fill="#93c5fd" fontSize={8} fontWeight={700} fontFamily="system-ui, sans-serif">
          Sinkron
        </text>
      </g>

      <NodeBox
        className="topo-node"
        x={260}
        y={210}
        w={136}
        h={52}
        title="Server Linux"
        sub="Ubuntu / Debian"
        fill="#12182a"
        stroke="rgba(43,95,217,0.35)"
        accent="#5b8def"
        icon={<IconServer color="#93c5fd" />}
      />
      <NodeBox
        className="topo-node"
        x={260}
        y={310}
        w={140}
        h={52}
        title="MikroTik / NAS"
        sub="Kontrol sesi"
        fill="#12182a"
        stroke="rgba(43,95,217,0.35)"
        accent="#34d399"
        icon={<IconRouter color="#6ee7b7" />}
      />
      <NodeBox
        className="topo-node"
        x={382}
        y={310}
        w={128}
        h={52}
        title="Pelanggan"
        sub="PPPoE / Hotspot"
        fill="#12182a"
        stroke="rgba(43,95,217,0.35)"
        accent="#34d399"
        icon={<IconWifi color="#6ee7b7" />}
      />
    </svg>
  )
}