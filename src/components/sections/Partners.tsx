'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';

export default function Partners() {

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
        <div className="text-center mb-12">
          <SectionTitle>Our Partnes</SectionTitle>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Powered by industry leaders who believe in fostering innovation and supporting the next generation of builders.
          </p>
        </div>

        {/* Featured Partner Cards - unified layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {[
            {
              name: "Google Student Group",
              description:
                "Community led groups for developers interested in Google technologies. GDGs host meetups, workshops and hackathons to help builders learn, connect and grow.",
              logo: "/gemini.jpg",
              link: "https://developers.google.com/community/gdg",
              ctaLabel: "Learn more"
            },
            {
              name: "Perplexity AI",
              description:
                "AI-powered answer engine combining large language models with live web search to deliver fast, cited, up-to-date answers.",
              logo: "/perplexity.png",
              link: "https://www.perplexity.ai/",
              ctaLabel: "Visit"
            }
          ].map((p) => (
            <div key={p.name} className="rounded-2xl p-6 md:p-8 liquid-container">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                  <p className="text-white/75 text-sm mb-3">{p.description}</p>
                  <div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm transition-colors"
                    >
                      <span className="mr-2">{p.ctaLabel}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/>
                        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Asymmetric Club",
              description:
                "A student‑founded technical community organizing workshops, hackathons, webinars, and projects to empower continuous learning and growth across tech domains.",
              logo: "/asy.png",
              link: "https://www.linkedin.com/company/club-asymmetric/",
              ctaLabel: "LinkedIn"
            },
            {
              name: "AIDRIOTX",
              description:
                "A student community empowering people through AI, robotics, IoT and tech events, workshops and projects.",
              logo: "/aidriot.jpeg",
              link: "https://www.linkedin.com/company/aidriotx-sist/?viewAsMember=true",
              ctaLabel: "LinkedIn"
            },
            {
              name: "Aurelian Racing",
              description:
                "Student motorsport team fostering engineering excellence through design, build and racing initiatives.",
              logo: "/aurelian.jpeg",
              link: "https://www.instagram.com/aurelian_racing?igsh=MWpraGEzYnNjd3BlZg==",
              ctaLabel: "Instagram"
            },
            {
              name: "SJCE Motorsport",
              description:
                "Formula Student team from SJCE focused on innovation, design and competitive motorsport.",
              logo: "/sjce.jpeg",
              link: "https://www.instagram.com/sjce_motorsport?igsh=MXFqOHMwOWJlNHdpbA==",
              ctaLabel: "Instagram"
            }
          ].map((p) => (
            <div key={p.name} className="rounded-2xl p-6 md:p-8 liquid-container">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                  <p className="text-white/75 text-sm mb-3">{p.description}</p>
                  <div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm transition-colors"
                    >
                      <span className="mr-2">{p.ctaLabel}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/>
                        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
