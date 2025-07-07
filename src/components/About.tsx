import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Surreal Vortex Background - Adapted from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center - Smaller and offset */}
        <div className="absolute top-1/3 right-1/4 transform w-64 h-64 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/25 via-green-400/8 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/35 via-green-400/12 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/45 via-green-400/18 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/6 left-1/6 w-40 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-pulse transform rotate-30 blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-1 bg-gradient-to-l from-transparent via-green-400/60 to-transparent animate-pulse transform -rotate-30 blur-sm delay-700"></div>
        <div className="absolute top-2/3 left-1/2 w-36 h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse transform rotate-15 blur-sm delay-1200"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/5 right-1/3 w-1 h-1 bg-green-400/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-green-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-green-400/40 rounded-full animate-ping delay-1000"></div>

        {/* Spiral Arms - Reduced */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform rotate-45 animate-spin-slow origin-left"></div>
          <div className="absolute top-1/3 right-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform rotate-135 animate-spin-slow origin-left delay-300"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute top-1/3 right-1/4 transform opacity-20">
          <div className="w-20 h-20 border border-green-400/15 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-32 h-32 border border-green-400/10 rounded-full animate-ping delay-600"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute top-1/3 right-1/4 transform w-12 h-12 bg-black rounded-full shadow-xl border border-green-400/25 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Anime Character Avatar */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400/50 shadow-lg shadow-green-400/30 animate-pulse">
              <img 
                src="/pfp.jpg"
                alt="Yassine - Creative Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-green-400/30 animate-spin-slow"></div>
            <div className="absolute inset-2 w-28 h-28 rounded-full border border-green-400/20 animate-spin-reverse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            Who Am I?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              I'm a creative digital designer with a passion for visual impact. I specialize in designing 
              YouTube thumbnails, Instagram/Facebook ads, and short-form video edits. I help influencers 
              and brands attract more viewers with bold, high-converting content that stands out in crowded feeds.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">150+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Thumbnails Created</div>
            </div>
          </div>
          
          <div className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">60+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Videos Edited</div>
            </div>
          </div>

          <div className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">50+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Clients</div>
            </div>
          </div>

          <div className="group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">1+</div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Year Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visual Design', 'Brand Identity', 'Social Media', 'Video Editing', 'Creative Strategy', 'Client Relations'].map((skill, index) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full text-green-300 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;