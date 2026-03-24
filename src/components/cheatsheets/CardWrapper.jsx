/**
 * CardWrapper
 * Props:
 *   glow:      'cyan' | 'purple'
 *   className: string (extra Tailwind classes)
 *   children:  React node
 */
export default function CardWrapper({ glow = 'cyan', className = '', children }) {
  const hoverClass =
    glow === 'cyan'
      ? 'hover:shadow-glow-cyan hover:border-tcyan/25'
      : 'hover:shadow-glow-purple hover:border-tpurple/25'

  return (
    <div
      className={`bg-card border border-border1 rounded-2xl p-7 transition-all duration-200 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  )
}
