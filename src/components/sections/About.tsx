
    'use client';

    import React, { useState, useEffect } from 'react';

    export default function About() {
      const [hoveredCard, setHoveredCard] = useState<number | null>(null);
      const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

      useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          setMousePosition({ 
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100 
          });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
      }, []);

      const stats = [
        { k: "Duration", v: "24 Hours", color: "from-purple-500 to-pink-500", glow: "#8B5CF6" },
        { k: "Team Size", v: "1 – 4", color: "from-blue-500 to-cyan-500", glow: "#3B82F6" },
        { k: "Format", v: "In‑person", color: "from-emerald-500 to-teal-500", glow: "#10B981" },
        { k: "Open to", v: "Everyone", color: "from-orange-500 to-red-500", glow: "#F97316" },
        { k: "Judging", v: "Live demo", color: "from-violet-500 to-purple-500", glow: "#7C3AED" },
        { k: "Cost", v: "Free", color: "from-pink-500 to-rose-500", glow: "#EC4899" },
      ];

      const cards = [
        {
          title: "What to expect",
          items: [
            "Kickoff with problem framing & team sync",
            "24 hours of focused building with mentors", 
            "Midnight energy: snacks, music, breaks",
            "Final live demos — no slides, just product"
          ],
          gradient: "from-purple-600/50 via-fuchsia-600/40 to-pink-600/50",
          glow: "#8B5CF6",
          icon: "🚀",
          accentGrad: "from-purple-400 to-fuchsia-400"
        },
        {
          title: "What we provide",
          items: [
            "High‑speed Wi‑Fi, power & workspaces",
            "Meals, snacks, coffee & hydration",
            "Swag, stickers & surprises",
            "Expert mentors across all disciplines"
          ],
          gradient: "from-blue-600/50 via-cyan-600/40 to-teal-600/50",
          glow: "#3B82F6",
          icon: "🎁",
          accentGrad: "from-blue-400 to-cyan-400"
        },
        {
          title: "Judging criteria",
          items: [
            "Impact & real-world usefulness",
            "Technical execution & depth",
            "Design craft & user experience",
            "Innovation & creative approach"
          ],
          gradient: "from-emerald-600/50 via-green-600/40 to-teal-600/50",
          glow: "#10B981",
          icon: "⚖️",
          accentGrad: "from-emerald-400 to-teal-400"
        },
        {
          title: "Logistics",
          items: [
            "Bring your laptop, chargers & valid ID",
            "Teams can form on‑site (solo welcome)",
            "All code written during 24‑hour window",
            "Be kind: follow our code of conduct"
          ],
          gradient: "from-orange-600/50 via-red-600/40 to-rose-600/50",
          glow: "#F97316",
          icon: "📋",
          accentGrad: "from-orange-400 to-red-400"
        }
      ];

      return (
        <section 
          id="about" 
          className="min-h-screen flex items-center justify-center py-10 px-4 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-[2000ms] ease-out"
              style={{
                background: `radial-gradient(circle, #EC4899 0%, #8B5CF6 50%, transparent 70%)`,
                left: `${mousePosition.x * 0.8}%`,
                top: `${mousePosition.y * 0.6}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div 
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 transition-all duration-[3000ms] ease-out"
              style={{
                background: `radial-gradient(circle, #10B981 0%, #3B82F6 50%, transparent 70%)`,
                left: `${100 - mousePosition.x * 0.7}%`,
                top: `${100 - mousePosition.y * 0.8}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                <span 
                  className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-white bg-clip-text text-transparent"
                  style={{ 
                    backgroundSize: '300% 100%',
                    animation: 'gradientShift 3s ease-in-out infinite'
                  }}
                >
                  About VOID
                </span>
              </h2>
              <div className="w-20 h-0.5 mx-auto mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full opacity-80" />
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                <span className="font-black text-purple-400">24-hour</span> in‑person hackathon where builders explore ideas at the edge —
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-semibold"> fast, focused, fearlessly.</span>
              </p>
            </div>

            {/* Rotating Stats Tape */}
            <div className="mb-16 relative overflow-hidden">
              <div className="flex animate-scroll-infinite">
                {stats.map((stat, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl p-3 sm:p-4 md:p-5 w-28 sm:w-32 md:w-36 h-20 md:h-24 liquid-container liquid-container--transparent transition-all duration-500">
                      <div className="text-center relative z-10 h-full flex flex-col justify-center">
                        <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-1 text-white/70">
                          {stat.k}
                        </div>
                        <div className="font-black text-sm md:text-base text-white/95">
                          {stat.v}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
                {stats.map((stat, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
                  >
                    <div className="relative overflow-hidden rounded-2xl p-3 sm:p-4 md:p-5 w-28 sm:w-32 md:w-36 h-20 md:h-24 liquid-container liquid-container--transparent transition-all duration-500">
                      <div className="text-center relative z-10 h-full flex flex-col justify-center">
                        <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-1 text-white/70">
                          {stat.k}
                        </div>
                        <div className="font-black text-sm md:text-base text-white/95">
                          {stat.v}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards - Always Expanded with Diagonal Black Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer perspective-1000"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden void-card shadow-2xl min-h-[360px] sm:min-h-[400px] md:min-h-[450px] p-5 sm:p-6 md:p-7 transition-all duration-700 ease-out transform-gpu hover:scale-105">
                    {/* Background gradient removed for transparent, low-color appearance */}
                    
                    {/* Diagonal black hover effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl transition-all duration-2000 ease-in-out ${
                        hoveredCard === index ? 'opacity-70' : 'opacity-0'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, transparent 60%)`,
                        transform: hoveredCard === index ? 'translate(0, 0)' : 'translate(-150%, -150%)'
                      }}
                    />
                    
                    {/* Matrix grid overlay */}
                    <div 
                      className="absolute inset-0 opacity-10 rounded-2xl"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '15px 15px',
                        animation: 'gridMove 3s linear infinite'
                      }}
                    />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className="rounded-xl flex items-center justify-center mr-3 w-12 h-12 liquid-container liquid-container--transparent scale-110 shadow-xl transition-all duration-500 group-hover:rotate-12">
                          <span className="text-xl">{card.icon}</span>
                        </div>
                        <h3 className="font-black text-lg sm:text-xl text-white">
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Content - always visible */}
                      <div className="flex-1 space-y-4">
                        {card.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-start space-x-3 transition-all duration-500 transform group-hover:translate-x-1"
                            style={{
                              transitionDelay: hoveredCard === index ? `${itemIndex * 100}ms` : '0ms'
                            }}
                          >
                            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 liquid-container liquid-container--transparent scale-125 shadow-sm" />
                            <p className="text-sm sm:text-base leading-relaxed font-medium text-white/90">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute -inset-4 rounded-2xl blur-2xl transition-all duration-1000 -z-10"
                      style={{ 
                        backgroundColor: hoveredCard === index ? card.glow + '40' : card.glow + '20'
                      }}
                    />
                    
                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
                        style={{
                          left: `${15 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes gridMove {
              0% { transform: translate(0, 0); }
              100% { transform: translate(15px, 15px); }
            }
            @keyframes scroll-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-infinite {
              animation: scroll-infinite 20s linear infinite;
            }
            .perspective-1000 {
              perspective: 1000px;
            }
          `}</style>
        </section>
      );
    }
