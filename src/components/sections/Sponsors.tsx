export default function Sponsors() {
  const tiers = [
    {
      name: "Platinum",
      icon: "💎",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Primary logo on banner", "Keynote mention", "Large booth", "Recruitment access"],
    },
    {
      name: "Gold",
      icon: "🥇",
      gradient: "from-yellow-400 to-orange-500",
      features: ["Logo on banner", "Booth space", "Recruitment access", "Swag inclusion"],
    },
    {
      name: "Silver",
      icon: "🥈",
      gradient: "from-gray-400 to-gray-600",
      features: ["Logo in collateral", "Digital mentions", "Community access"],
    },
  ];

  return (
    <section id="sponsors" className="scroll-mt-32 container mx-auto px-6 py-10 md:py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white relative inline-block">
          <span className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-white bg-clip-text text-transparent">Sponsorship</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full opacity-80"></span>
        </h2>
        <p className="text-white/80 mt-4">Choose a tier that matches your goals – each with premium liquid-glass cards.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <div key={t.name} className="group">
            <div className="rounded-2xl p-6 liquid-container transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{t.icon}</span>
                <h3 className={`font-bold text-lg bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent`}>{t.name} Tier</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/85">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <div className="w-1 h-1 bg-white/60 rounded-full mr-3 flex-shrink-0"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




