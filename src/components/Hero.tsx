import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Surreal Vortex Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-green-400/10 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/40 via-green-400/15 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/50 via-green-400/20 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/4 left-1/4 w-64 h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60 animate-pulse transform rotate-45 blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-1 bg-gradient-to-l from-transparent via-green-400 to-transparent opacity-80 animate-pulse transform -rotate-45 blur-sm delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70 animate-pulse transform rotate-12 blur-sm delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-1 bg-gradient-to-l from-transparent via-green-400 to-transparent opacity-90 animate-pulse transform -rotate-12 blur-sm delay-1500"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60 delay-300"></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-80 delay-700"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-50 delay-1200"></div>

        {/* Spiral Arms */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-0 animate-spin-slow origin-left"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-spin-slow origin-left delay-200"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-90 animate-spin-slow origin-left delay-400"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border border-green-400/30 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-48 h-48 border border-green-400/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute inset-0 w-64 h-64 border border-green-400/10 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black rounded-full shadow-2xl border-2 border-green-400/50 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-pulse">
            Yassine
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
          I Design Thumbnails, Ads & Edit Videos
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Helping creators and brands stand out with eye-catching visuals that convert viewers into fans.
        </p>
        
        <button
          onClick={scrollToPortfolio}
          className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-green-400 rounded-full hover:bg-green-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;