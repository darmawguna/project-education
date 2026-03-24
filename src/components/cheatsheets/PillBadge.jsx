/**
 * PillBadge
 * Props:
 *   variant: 'c' | 'y' | 'p' | 'g' | 'o' | 'r'
 *   children: React node
 */

const variants = {
  c: 'bg-tcyan/10   text-tcyan   border border-tcyan/20',
  y: 'bg-tyellow/10 text-tyellow border border-tyellow/20',
  p: 'bg-tpurple/10 text-tpurple border border-tpurple/20',
  g: 'bg-tgreen/10  text-tgreen  border border-tgreen/20',
  o: 'bg-torange/10 text-torange border border-torange/20',
  r: 'bg-tpink/10   text-tpink   border border-tpink/20',
}

export default function PillBadge({ variant = 'c', children }) {
  return (
    <span
      className={`font-mono text-[11px] font-semibold rounded-full px-2.5 py-0.5 inline-block ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
