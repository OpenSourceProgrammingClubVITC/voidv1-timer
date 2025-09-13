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
        {/* <p className="text-white/80 mt-4">Choose a tier that matches your goals – each with premium liquid-glass cards.</p> */}
      </div>

      
        <div className="grid gap-8 md:grid-cols-3 place-items-center">
        <img src="/devfolio.jpg" alt="Sponsors" className="col-span-1 w-auto h-40 rounded-lg shadow-lg" />
        <img src="/EthIndia.png" alt="Sponsors" className="col-span-1 w-auto h-40 rounded-lg shadow-lg" />
        <img src="/polygon.jpg" alt="Sponsors" className="col-span-1 w-auto h-40 rounded-lg shadow-lg" />
      </div>
    </section>
  );
}




