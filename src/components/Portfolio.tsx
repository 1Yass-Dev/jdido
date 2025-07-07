import React, { useState } from 'react';
import { X, ZoomIn, Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'thumbnails' | 'ads'>('thumbnails');

  const thumbnails = [
    { 
      url: '/money.png',
      title: 'Educationnal',
      category: 'Lifestyle',
      views: '365K'
    },
    { 
      url: '/11.png',
      title: 'Cars Review',
      category: 'Sports',
      views: '25K'
    },
    { 
      url: '/th.png',
      title: 'Movies rating',
      category: 'Entertainment',
      views: '3.2M'
    },
    { 
      url: '/omr.png',
      title: 'Athlete program',
      category: 'Sports',
      views: '1.5M'
    },
    { 
      url: '/po.png',
      title: 'LiveStream',
      category: 'Entertainment',
      views: '4.1M'
    },
    { 
      url: '/ou.png',
      title: 'Religious Content',
      category: 'Religion',
      views: '2.9M'
    },
  ];

  const ads = [
    { 
      url: '/shop1.png',
      title: 'efootball shop',
      category: 'E-commerce',
      ctr: '3.2%'
    },
    { 
      url: '/prso.png',
      title: 'Personal Ad',
      category: 'Services',
      ctr: '2.8%'
    },
    { 
      url: '/opp.png',
      title: 'Soon!',
      category: 'Important!',
      ctr: '...'
    },
    { 
      url: '/opp.png',
      title: 'Soon!',
      category: 'Important!',
      ctr: '...'
    },
    { 
      url: '/opp.png',
      title: 'TSoon!',
      category: 'Important!',
      ctr: '...'
    },
    { 
      url: '/opp.png',
      title: 'Soon!',
      category: 'Important!',
      ctr: '...'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Surreal Vortex Background - Adapted from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center - Bottom center */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 opacity-25">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/20 via-green-400/6 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/30 via-green-400/10 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/40 via-green-400/15 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/5 left-1/5 w-52 h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse transform rotate-75 blur-sm"></div>
        <div className="absolute top-1/4 right-1/5 w-44 h-1 bg-gradient-to-l from-transparent via-green-400/50 to-transparent animate-pulse transform -rotate-75 blur-sm delay-700"></div>
        <div className="absolute bottom-1/5 left-1/3 w-48 h-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse transform rotate-30 blur-sm delay-1300"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-green-400/50 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-green-400/35 rounded-full animate-ping delay-1000"></div>

        {/* Spiral Arms */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform -translate-x-1/2 rotate-45 animate-spin-slow origin-left"></div>
          <div className="absolute bottom-1/4 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent transform -translate-x-1/2 rotate-135 animate-spin-slow origin-left delay-450"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 opacity-15">
          <div className="w-32 h-32 border border-green-400/10 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-48 h-48 border border-green-400/8 rounded-full animate-ping delay-750"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full shadow-xl border border-green-400/20 animate-pulse"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full mb-8 backdrop-blur-sm border border-green-400/20">
            <Play className="w-10 h-10 text-green-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and creative projects that have driven real results
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => setActiveTab('thumbnails')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'thumbnails'
                  ? 'bg-green-400 text-black shadow-lg shadow-green-400/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Thumbnails
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'ads'
                  ? 'bg-green-400 text-black shadow-lg shadow-green-400/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Ad Designs
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'thumbnails' && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="group relative aspect-video bg-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-green-400/50 backdrop-blur-sm"
                  onClick={() => setSelectedImage(thumb.url)}
                >
                  <img
                    src={thumb.url}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ZoomIn className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-bold text-lg mb-1">{thumb.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-sm font-medium">{thumb.category}</span>
                      <span className="text-gray-300 text-sm">{thumb.views} views</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-green-400/30">
                      High CTR
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ads' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ads.map((ad, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-green-400/50 backdrop-blur-sm"
                  onClick={() => setSelectedImage(ad.url)}
                >
                  <img
                    src={ad.url}
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ZoomIn className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-bold text-lg mb-1">{ad.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-sm font-medium">{ad.category}</span>
                      <span className="text-gray-300 text-sm">{ad.ctr} CTR</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-green-400/30">
                      High Convert
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/30 backdrop-blur-sm">
            <ExternalLink className="w-8 h-8 text-green-400" />
            <div className="text-left">
              <h3 className="text-white font-bold text-lg">Ready to Get Started?</h3>
              <p className="text-gray-400">Let's create something amazing together</p>
            </div>
            <button className="px-6 py-3 bg-green-400 text-black font-semibold rounded-xl hover:bg-green-300 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 z-10 backdrop-blur-sm border border-gray-600"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Portfolio Item"
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl mt-8 mb-4"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;