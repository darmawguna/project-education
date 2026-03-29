const variantMap = {
    c: 'bg-tcyan/10 text-tcyan border border-tcyan/30',
    y: 'bg-tyellow/10 text-tyellow border border-tyellow/30',
    p: 'bg-tpurple/10 text-tpurple border border-tpurple/30',
    g: 'bg-tgreen/10 text-tgreen border border-tgreen/30',
    o: 'bg-torange/10 text-torange border border-torange/30',
    r: 'bg-tpink/10 text-tpink border border-tpink/30',
}

export default function PillBadge({ variant = 'c', children }) {
    return (
        <span className={`font-mono text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${ variantMap[variant] ?? variantMap.c }`}>
            {children}
        </span>
    )
}