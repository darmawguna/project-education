const glowMap = {
    cyan: 'hover:shadow-glow-cyan hover:border-tcyan/25',
    purple: 'hover:shadow-glow-purple hover:border-tpurple/25',
}

export default function CardWrapper({ glow = 'cyan', className = '', children }) {
    return (
        <div className={`bg-card border border-border1 rounded-2xl p-7 transition-all duration-200 ${ glowMap[glow] ?? glowMap.cyan } ${ className }`}>
            {children}
        </div>
    )
}