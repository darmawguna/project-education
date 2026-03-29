export default function SectionHeader({ badge, title, id }) {
    return (
        <div id={id} className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10.5px] text-tcyan border border-tcyan/30 bg-tcyan/5 rounded-full px-3 py-1 tracking-widest whitespace-nowrap">
                {badge}
            </span>
            <h2 className="font-syne font-extrabold text-xl text-ttext whitespace-nowrap">
                {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border1 to-transparent" />
        </div>
    )
}