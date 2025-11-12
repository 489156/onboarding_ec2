import { ChevronDown } from 'lucide-react';
import logo from 'figma:asset/6010803d9ad4d49e5f9a495e2267d7962017f9c2.png';

export function Cover() {
  const scrollToTOC = () => {
    const element = document.getElementById('toc');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0e2046] via-[#1a3566] to-[#0e2046]">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
          </div>
        </div>
        
        <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome Aboard
        </h1>
        
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        
        <p className="text-white/90 text-xl sm:text-2xl md:text-3xl mb-2">
          New Employee Guidebook
        </p>
        
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mt-8">
          Your comprehensive guide to getting started and thriving in your new role
        </p>
      </div>

      <button
        onClick={scrollToTOC}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce"
        aria-label="Scroll to table of contents"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}