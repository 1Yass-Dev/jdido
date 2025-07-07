import React from 'react';
import { MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
  const handleLetsTalk = () => {
    const phoneNumber = '0623155756';
    const message = encodeURIComponent('Hi Yassine! I saw your portfolio and would like to discuss a project with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:yassr6129@gmail.com?subject=Project Inquiry&body=Hi Yassine, I would like to discuss a project with you.', '_blank');
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Surreal Vortex Background - Adapted from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Vortex Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-40">
          <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-green-400/10 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 bg-gradient-radial from-green-400/40 via-green-400/15 to-transparent rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-green-400/50 via-green-400/20 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        {/* Lightning Tendrils */}
        <div className="absolute top-1/4 left-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-pulse transform rotate-45 blur-sm"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-1 bg-gradient-to-l from-transparent via-green-400/70 to-transparent animate-pulse transform -rotate-45 blur-sm delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-44 h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-pulse transform rotate-12 blur-sm delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-1 bg-gradient-to-l from-transparent via-green-400/80 to-transparent animate-pulse transform -rotate-12 blur-sm delay-1500"></div>

        {/* Energy Particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-green-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400/50 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-green-400/70 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-400/40 rounded-full animate-ping delay-1200"></div>

        {/* Spiral Arms */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-0 animate-spin-slow origin-left"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-60 animate-spin-slow origin-left delay-200"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-120 animate-spin-slow origin-left delay-400"></div>
        </div>

        {/* Electric Pulse Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="w-24 h-24 border border-green-400/20 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-40 h-40 border border-green-400/15 rounded-full animate-ping delay-500"></div>
          <div className="absolute inset-0 w-56 h-56 border border-green-400/10 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Dark Void Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full shadow-2xl border border-green-400/30 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full mb-8 backdrop-blur-sm border border-green-400/20">
            <Send className="w-10 h-10 text-green-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            Let's Work Together!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to create something amazing? Get in touch and let's bring your vision to life with stunning visuals that convert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div 
              onClick={handleLetsTalk}
              className="group flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors duration-300">WhatsApp</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">0623155756</p>
                <p className="text-sm text-green-400 mt-1">Click to start chatting</p>
              </div>
            </div>

            <div 
              onClick={handleEmailClick}
              className="group flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors duration-300">Email</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">yassr6129@gmail.com</p>
                <p className="text-sm text-green-400 mt-1">Click to send email</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-green-400/30 backdrop-blur-sm text-center">
              <div className="mb-8">
                <MessageCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Let's discuss your vision and create content that stands out from the crowd. 
                  I'm here to help you achieve your goals with professional design solutions.
                </p>
              </div>
              
              <button
                onClick={handleLetsTalk}
                className="group relative inline-flex items-center px-10 py-4 text-xl font-bold text-black bg-gradient-to-r from-green-400 to-green-600 rounded-2xl hover:from-green-300 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/50 w-full justify-center"
              >
                <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Let's Talk Now
              </button>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "What's your turnaround time?", a: "Most projects are completed within 24-48 hours" },
              { q: "Do you offer revisions?", a: "Yes, I include 2 free revisions with every project" },
              { q: "What formats do you deliver?", a: "All standard formats: PNG, JPG, MP4, and source files" },
              { q: "Can you match my brand style?", a: "Absolutely! I work with your brand guidelines and colors" }
            ].map((faq, index) => (
              <div key={index} className="p-4 bg-gray-800/40 rounded-xl border border-gray-700 text-left backdrop-blur-sm">
                <h4 className="text-green-400 font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4">
            © 2024 Yassine_web34. Designed with passion for creative excellence.
          </p>
          <div className="flex justify-center space-x-6">
            <span className="text-green-400 text-sm">Professional</span>
            <span className="text-green-400 text-sm">Reliable</span>
            <span className="text-green-400 text-sm">Creative</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;