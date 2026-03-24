/**
 * SectionHeader
 * Props:
 *   badge: string  — e.g. "SECTION 01"
 *   title: string  — e.g. "Mindset: Utility-First"
 *   id:    string  — anchor id untuk scroll nav
 */
export default function SectionHeader({ badge, title, id }) {
  return (
    <div id={id} className="flex items-center gap-4 mb-7 mt-18 scroll-reveal">
      <span className="font-mono text-[10.5px] font-semibold text-tcyan border border-tcyan/30 bg-tcyan/5 rounded-full px-3 py-1 whitespace-nowrap tracking-widest">
        {badge}
      </span>
      <span className="font-syne font-extrabold text-xl text-ttext whitespace-nowrap">
        {title}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-border1 to-transparent" />
    </div>
  )
}
