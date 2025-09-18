import SectionTitle from "../SectionTitle";

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-32 container mx-auto px-6 py-10 md:py-10">
      <SectionTitle>Sponsors</SectionTitle>

      {/* Gold Sponsor */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">Gold Sponsor</h3>
        <div className="flex justify-center">
          <div className="p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer"> 
            <img 
              src="/Devfolio.svg" 
              alt="DEVFOLIO LOGO" 
              className="w-auto h-32 rounded-lg shadow-lg bg-white p-4" 
            />
            </a>
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-300 mb-6">Silver Sponsors</h3>
        <div className="grid gap-8 md:grid-cols-2 place-items-center max-w-2xl mx-auto">
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
          <a href="https://ethindia.co/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/ethindia.svg" 
              alt="ETHINDIA LOGO" 
              className="w-auto h-24 rounded-lg shadow-lg bg-white p-4" 
            />
          </a>

          </div>
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
            <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/polygon.jpg" 
              alt="POLYGON LOGO" 
              className="w-auto h-24 rounded-lg shadow-lg" 
            />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
