'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';

export default function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState<number | null>(null);
  const [shimmerActive, setShimmerActive] = useState(0);

  const prizes = [
    { 
      title: "Grand Prize", 
      subtitle: "The Ultimate Winner",
      // desc: "Coming Soon..", 
      icon: "👑",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/30 via-orange-500/20 to-red-500/30",
      glow: "yellow-500/40",
      rank: "1st",
      value: "Coming Soon..",
      shine: "from-yellow-200/60 via-white/80 to-yellow-200/60"
    },
    { 
      title: "Runner Up", 
      subtitle: "Excellence Recognized",
      // desc: "$1,500 + Tech Gadgets + Swag", 
      icon: "🥈",
      gradient: "from-gray-300 via-gray-100 to-gray-300",
      bgGradient: "from-gray-500/30 via-slate-400/20 to-gray-500/30",
      glow: "gray-400/40",
      rank: "2nd",
      value: "Coming Soon..",
      shine: "from-gray-200/60 via-white/80 to-gray-200/60"
    },
    { 
      title: "Second Runner", 
      subtitle: "Excelling",
      // desc: "$1,000 + Design Tools + Portfolio Feature", 
      icon: "🎨",
      gradient: "from-purple-400 via-pink-500 to-purple-600",
      bgGradient: "from-purple-500/30 via-pink-500/20 to-purple-600/30",
      glow: "purple-500/40",
      rank: "🎨",
      value: "Coming Soon..",
      shine: "from-purple-200/60 via-white/80 to-purple-200/60"
    },
  ];

  // Auto shimmer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerActive((prev) => (prev + 1) % prizes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="prizes" className="scroll-mt-32 min-h-screen flex items-center py-10 relative overflow-hidden">
      {/* Epic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating trophy elements */}
        <div className="absolute top-1/5 right-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>🏆</div>
        <div className="absolute bottom-1/5 left-1/5 text-3xl opacity-15 animate-bounce" style={{animationDelay: '3s'}}>💎</div>
        <div className="absolute top-2/3 right-1/5 text-2xl opacity-25 animate-bounce" style={{animationDelay: '5s'}}>⭐</div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
      <SectionTitle>Epic Prizes</SectionTitle>
        {/* Hype Header */}
        <div className="text-center mb-12">
          <p className="text-white/90 text-lg md:text-xl font-medium mt-6 max-w-2xl mx-auto">
            <span className="text-yellow-300">Compete for glory!</span> Amazing rewards await the most innovative builders and creators.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.title}
              className={`group relative cursor-pointer transform transition-all duration-700 ${
                index === 0 ? 'md:scale-110 md:-translate-y-4' : ''
              }`}
              onMouseEnter={() => setHoveredPrize(index)}
              onMouseLeave={() => setHoveredPrize(null)}
            >
              {/* Main Card */}
              <div className={`
                relative overflow-hidden rounded-3xl p-8 h-full liquid-container
                transition-all duration-700 transform-gpu
                ${hoveredPrize === index ? 'scale-105' : 'hover:scale-102'}
              `}>
                
                {/* Rank Badge */}
                <div className={`
                  absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg
                  liquid-container transition-all duration-500
                  ${hoveredPrize === index ? 'scale-110' : ''}
                `}>
                  {prize.rank}
                </div>

                {/* Shimmer Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${prize.shine} opacity-0 transition-all duration-1000 rounded-3xl
                  ${shimmerActive === index || hoveredPrize === index ? 'opacity-100 animate-pulse' : ''}
                `}></div>

                {/* Dynamic Background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${prize.bgGradient} opacity-0 transition-opacity duration-700 rounded-3xl
                  ${hoveredPrize === index ? 'opacity-100' : ''}
                `}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`
                    text-6xl md:text-7xl mb-4 transform transition-all duration-500
                    ${hoveredPrize === index ? 'scale-110 rotate-12 drop-shadow-2xl' : 'group-hover:scale-105'}
                  `}>
                    {prize.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    font-bold text-2xl md:text-3xl mb-2 transition-all duration-500
                    ${hoveredPrize === index 
                      ? `bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent scale-105` 
                      : 'text-white'
                    }
                  `}>
                    {prize.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`
                    text-sm font-medium mb-4 transition-colors duration-300
                    ${hoveredPrize === index ? 'text-white/95' : 'text-white/70'}
                  `}>
                    {prize.subtitle}
                  </p>

                  {/* Value Badge */}
                  <div className={`
                    px-4 py-2 rounded-2xl mb-4 font-bold text-lg transition-all duration-500
                    liquid-container
                    ${hoveredPrize === index ? 'scale-105' : ''}
                  `}>
                    {prize.value}
                  </div>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed transition-all duration-300
                    ${hoveredPrize === index ? 'text-white/95' : 'text-white/80'}
                  `}>
                    {/* {prize.desc} */}
                  </p>

                  {/* Animated particles for hovered card */}
                  {hoveredPrize === index && (
                    <>
                      <div className="absolute top-8 left-8 w-2 h-2 bg-white/70 rounded-full animate-ping"></div>
                      <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/3 left-6 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-1/3 right-8 w-2.5 h-2.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                    </>
                  )}
                </div>

                {/* Epic Glow Effect */}
                <div className={`
                  absolute -inset-4 bg-${prize.glow} opacity-0 blur-2xl transition-all duration-700 rounded-3xl -z-10
                  ${hoveredPrize === index ? 'opacity-70' : ''}
                `}></div>

                {/* Winner spotlight effect */}
                {index === 0 && (
                  <div className="absolute -inset-6 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 blur-3xl rounded-3xl -z-20 animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl liquid-container">
            <span className="text-2xl animate-bounce">🚀</span>
            <p className="text-white font-semibold">Ready to compete? Register now and claim your prize!</p>
            <span className="text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
}
