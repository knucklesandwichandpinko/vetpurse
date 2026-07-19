interface IconProps {
  size?: number
  className?: string
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M11 21v-7.5H8.7v-3H11V8a3 3 0 0 1 3-3H17" />
      <path d="M10.8 12h4.7" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.5a2 2 0 0 1 4 0V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  )
}

export function PlayStoreIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M4 3.5v17a1 1 0 0 0 1.53.85l14-8.5a1 1 0 0 0 0-1.7l-14-8.5A1 1 0 0 0 4 3.5Z" fill="currentColor" />
    </svg>
  )
}
