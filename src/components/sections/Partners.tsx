'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [floatingIndex, setFloatingIndex] = useState(0);

  const partners = [
    { 
      name: "TechCorp", 
      type: "Platinum Sponsor",
      logo: "TC",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/30",
      glow: "blue-500/40",
      description: "Leading tech innovation"
    },
    { 
      name: "InnovateAI", 
      type: "Gold Sponsor",
      logo: "AI",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/30",
      glow: "purple-500/40",
      description: "AI & Machine Learning"
    },
    { 
      name: "DevTools Pro", 
      type: "Silver Sponsor",
      logo: "DT",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/20 to-teal-500/30",
      glow: "emerald-500/40",
      description: "Developer productivity tools"
    },
    { 
      name: "CloudBase", 
      type: "Infrastructure Partner",
      logo: "CB",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/30",
      glow: "orange-500/40",
      description: "Cloud infrastructure solutions"
    },
    { 
      name: "DesignStudio", 
      type: "Design Partner",
      logo: "DS",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/20 to-rose-500/30",
      glow: "pink-500/40",
      description: "Creative design services"
    },
    { 
      name: "StartupHub", 
      type: "Community Partner",
      logo: "SH",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/20 to-purple-500/30",
      glow: "violet-500/40",
      description: "Startup ecosystem support"
    }
  ];

  // Auto floating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIndex((prev) => (prev + 1) % partners.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section id="partners" className="scroll-mt-32 min-h-screen flex items-center py-10 relative overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/6 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle floating shapes */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/10 rounded-full animate-bounce opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400/20 rounded-full animate-bounce opacity-40" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-blue-400/15 rounded-full animate-bounce opacity-25" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 relative">
            <span className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-white bg-clip-text text-transparent">
              Our Partners
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full opacity-80"></div>
          </h2>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Powered by industry leaders who believe in fostering innovation and supporting the next generation of builders.
          </p>
        </div>

        {/* Partners Feature Card for GDG */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl p-6 md:p-8 liquid-container">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-56 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/gemini.jpg" // Replace with your GDG image, e.g. /partners/gdg.jpg
                  alt="GDG logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-white/90">
                <h3 className="text-xl font-bold mb-1">Google Developer Groups (GDG)</h3>
                <p className="text-white/75 text-sm">
                  Community led groups for developers interested in Google technologies. GDGs host meetups, workshops
                  and hackathons to help builders learn, connect and grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        {/* <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              tier: "Platinum",
              benefits: ["Logo placement", "Speaking slot", "Booth space", "Recruitment access"],
              gradient: "from-blue-500 to-cyan-500",
              icon: "💎"
            },
            {
              tier: "Gold", 
              benefits: ["Logo placement", "Booth space", "Recruitment access", "Swag inclusion"],
              gradient: "from-yellow-400 to-orange-500",
              icon: "🥇"
            },
            {
              tier: "Silver",
              benefits: ["Logo placement", "Digital mentions", "Community access"],
              gradient: "from-gray-400 to-gray-600",
              icon: "🥈"
            }
          ].map((tier, index) => (
            <div key={tier.tier} className="group">
              <div className="rounded-2xl p-6 liquid-container transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {tier.icon}
                  </span>
                  <h3 className={`
                    font-bold text-lg
                    bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent
                  `}>
                    {tier.tier} Partner
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1 h-1 bg-white/60 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div> */}

        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/30 group hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🤝</span>
            <div className="text-left">
              <p className="text-white font-semibold">Interested in partnering?</p>
              <p className="text-white/70 text-sm">Join our mission to empower builders</p>
            </div>
            <span className="text-2xl group-hover:-rotate-12 transition-transform duration-300">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}