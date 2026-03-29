export default function Hero({ data }) {
    const { seriesBadge, title, subtitle, stats } = data

    return (
        <section className="relative pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Series badge */}
                <div className="animate-fade-up inline-flex items-center gap-2 mb-6">
                    <span className="font-mono text-[11px] text-tcyan border border-tcyan/30 bg-tcyan/5 rounded-full px-4 py-1.5 tracking-widest">
                        {seriesBadge}
                    </span>
                </div>

                {/* H1 */}
                <h1 className="animate-fade-up-1 font-syne font-black text-4xl md:text-6xl mb-6 leading-tight">
                    <span className="bg-gradient-to-br from-ttext via-tcyan to-tpurple bg-clip-text text-transparent">
                        {title}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="animate-fade-up-2 text-tmuted2 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                    {subtitle}
                </p>

                {/* Stats row */}
                <div className="animate-fade-up-3 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-card border border-border1 rounded-2xl p-4 flex flex-col items-center gap-1"
                        >
                            <span className="font-syne font-black text-3xl text-tcyan">{stat.value}</span>
                            <span className="font-mono text-[11px] text-tmuted tracking-wider uppercase">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}