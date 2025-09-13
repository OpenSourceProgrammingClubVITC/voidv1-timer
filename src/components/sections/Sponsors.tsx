export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-32 container mx-auto px-6 py-10 md:py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white relative inline-block">
          <span className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-white bg-clip-text text-transparent">Sponsors</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full opacity-80"></span>
        </h2>
      </div>

      {/* Gold Sponsor */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">Gold Sponsor</h3>
        <div className="flex justify-center">
          <div className="p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            <img 
              src="/devfolio.jpg" 
              alt="Devfolio" 
              className="w-auto h-32 rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-300 mb-6">Silver Sponsors</h3>
        <div className="grid gap-8 md:grid-cols-2 place-items-center max-w-2xl mx-auto">
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
            <img 
              src="/EthIndia.png" 
              alt="ETHIndia" 
              className="w-auto h-24 rounded-lg shadow-lg" 
            />
          </div>
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
            <img 
              src="/polygon.jpg" 
              alt="Polygon" 
              className="w-auto h-24 rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}