import React from 'react';
import { Palette, Video, Image, Layers, Sparkles } from 'lucide-react';

const Tools = () => {
  const tools = [
    { name: 'Canva', img:'/canva.png', description: 'Design Platform' },
    { name: 'Adobe Premiere Pro', img:'/pr.png',  description: 'Video Editing' },
    { name: 'Photoshop', img:'/ps.png', description: 'Image Editing' },
    { name: 'Photopea', img:'/pea.png', description: 'Web Editor' },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Surreal Vortex Background - Adapted from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center - Left side */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 opacity-25">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/20 via-green-400/6 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/30 via-green-400/10 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/40 via-green-400/15 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/5 right-1/5 w-44 h-1 bg-gradient-to-r from-transparent via-green-400/45 to-transparent animate-pulse transform rotate-60 blur-sm"></div>
        <div className="absolute bottom-1/5 left-1/5 w-36 h-1 bg-gradient-to-l from-transparent via-green-400/55 to-transparent animate-pulse transform -rotate-60 blur-sm delay-800"></div>
        <div className="absolute top-3/4 right-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-green-400/35 to-transparent animate-pulse transform rotate-20 blur-sm delay-1400"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-green-400/45 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-green-400/55 rounded-full animate-ping delay-600"></div>
        <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-green-400/35 rounded-full animate-ping delay-1100"></div>

        {/* Spiral Arms */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-1/2 left-1/4 w-4/5 h-px bg-gradient-to-r from-transparent via-green-400/25 to-transparent transform -translate-y-1/2 rotate-30 animate-spin-slow origin-left"></div>
          <div className="absolute top-1/2 left-1/4 w-4/5 h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent transform -translate-y-1/2 rotate-150 animate-spin-slow origin-left delay-400"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-18">
          <div className="w-28 h-28 border border-green-400/12 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-44 h-44 border border-green-400/8 rounded-full animate-ping delay-700"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black rounded-full shadow-xl border border-green-400/20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full mb-8 backdrop-blur-sm border border-green-400/20">
            <Sparkles className="w-10 h-10 text-green-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            Tools I Master
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional software arsenal for creating stunning visuals and engaging content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-all duration-500 hover:scale-105 text-center backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                 <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg rounded-lg">
    <img src={tool.img} alt={tool.name} className="w-18 h-18 object-contain rounded-none" /></div>
                
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {tool.name}
                </h3>
                
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {tool.description}
                </p>

                {/* Skill level indicator */}
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 group-hover:w-full" 
                       style={{ width: index === 0 ? '95%' : index === 1 ? '90%' : index === 2 ? '85%' : '80%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Web developpement', 'Figma', 'Illustrator', 'DaVinci Resolve'].map((skill, index) => (
              <div
                key={skill}
                className="p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <p className="text-gray-300 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;