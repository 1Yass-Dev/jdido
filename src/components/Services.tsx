import React from 'react';
import { Target, Scissors, Megaphone, Star, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails for YouTube, Reels, and TikToks that boost click-through rates and maximize engagement',
      features: ['High-resolution designs', 'A/B testing options', 'Brand consistent', 'Quick turnaround'],
      price: 'Starting at $15',
      popular: true
    },
    {
      icon: Scissors,
      title: 'Video Editing',
      description: 'Professional short-form content editing that keeps viewers engaged from start to finish with dynamic transitions',
      features: ['Motion graphics', 'Color correction', 'Sound design', 'Platform optimization'],
      price: 'Starting at $25',
      popular: false
    },
    {
      icon: Megaphone,
      title: 'Ad Design',
      description: 'Compelling Instagram/Facebook ads and stories that convert viewers into customers with proven design psychology',
      features: ['Platform optimized', 'Conversion focused', 'Brand guidelines', 'Multiple formats'],
      price: 'Starting at $20',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Surreal Vortex Background - Adapted from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center - Right side */}
        <div className="absolute top-1/3 right-1/6 transform w-80 h-80 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/25 via-green-400/8 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/35 via-green-400/12 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/45 via-green-400/18 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/6 left-1/6 w-48 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-pulse transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-1 bg-gradient-to-l from-transparent via-green-400/60 to-transparent animate-pulse transform -rotate-45 blur-sm delay-600"></div>
        <div className="absolute top-2/3 right-1/5 w-44 h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse transform rotate-25 blur-sm delay-1100"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-green-400/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-green-400/60 rounded-full animate-ping delay-400"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-green-400/40 rounded-full animate-ping delay-900"></div>

        {/* Spiral Arms */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/6 w-3/4 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform rotate-60 animate-spin-slow origin-left"></div>
          <div className="absolute top-1/3 right-1/6 w-3/4 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform rotate-180 animate-spin-slow origin-left delay-350"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute top-1/3 right-1/6 transform opacity-20">
          <div className="w-24 h-24 border border-green-400/15 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-40 h-40 border border-green-400/10 rounded-full animate-ping delay-650"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute top-1/3 right-1/6 transform w-12 h-12 bg-black rounded-full shadow-xl border border-green-400/25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full mb-8 backdrop-blur-sm border border-green-400/20">
            <Star className="w-10 h-10 text-green-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive design services to elevate your brand and maximize your content's impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                service.popular 
                  ? 'border-green-400/50 shadow-lg shadow-green-400/20' 
                  : 'border-gray-700 hover:border-green-400/50'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-400/30">
                  <service.icon className="w-10 h-10 text-green-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-2xl font-bold text-green-400 mb-4">{service.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold rounded-xl hover:from-green-300 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Consultation', desc: 'Understand your vision' },
              { icon: Target, title: 'Strategy', desc: 'Plan the perfect approach' },
              { icon: Scissors, title: 'Creation', desc: 'Bring ideas to life' },
              { icon: Shield, title: 'Delivery', desc: 'Perfect final product' }
            ].map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-4 border border-green-400/30">
                  <step.icon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;