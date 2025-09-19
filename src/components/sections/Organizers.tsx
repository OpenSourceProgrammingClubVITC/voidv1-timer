'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Globe } from 'lucide-react';
import SectionTitle from '../SectionTitle';


interface Organizer {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

const organizers: Organizer[] = [
  {
    id: 1,
    name: "OSPC",
    role: "Organizer",
    bio: "The Open Source Programming Club at VIT Chennai is dedicated to fostering innovation through open source collaboration and building a vibrant tech community on campus.",
    imageUrl: "/ospc.png",
    socialLinks: {
      twitter: "https://twitter.com/ospcvitc",
      linkedin: "https://www.linkedin.com/company/opensource-programming-club-vitc",
      github: "https://github.com/OSPC-VITC",
      website: "https://ospcvitc.club",
    }
  },
  {
    id: 2,
    name: "BIC",
    role: "Organizer",
    bio: "Business Innovation Community at VIT Chennai fosters innovation and entrepreneurship, providing resources and mentorship for student startups to thrive in the competitive business landscape.",
    imageUrl: "/bi.jpg",
    socialLinks: {
      twitter: "https://twitter.com/vitchennai",
      linkedin: "https://www.linkedin.com/company/bic-vitc/"
    }
  },
];

const OrganisersSection: React.FC = () => {
  return (
    <section id="organisers" className="text-white py-10 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16 space-y-6"
        >
          <SectionTitle>VOID Organizers</SectionTitle>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            VOID is powered by OSPC x BIC, bringing together the best minds to create an electrifying innovation battlefield in the digital realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24 px-3">
          {organizers.map((organizer) => (
            <motion.div
              key={organizer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-wrapper w-full"
            >
              <Card className="relative h-full bg-black/20 hover:bg-black/30 transition-colors overflow-hidden shadow-xl hover:shadow-2xl liquid-container rounded-2xl">
                <div className="p-6 space-y-4">
                  <div className="relative h-44 w-full mb-4 flex items-center justify-center">
                    <div className="relative w-[90%] h-full">
                      <Image
                        src={organizer.imageUrl}
                        alt={organizer.name}
                        fill
                        className="object-contain brightness-200"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white tracking-wide font-heading">{organizer.name}</h3>
                      <p className="text-white/85 font-medium text-lg">{organizer.role}</p>
                      <p className="text-gray-300 leading-relaxed text-base">{organizer.bio}</p>
                    </div>

                    <div className="flex gap-4 mt-4">
                      {Object.entries(organizer.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/85 hover:text-white transition-colors"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === 'twitter' && <TwitterLogoIcon className="h-6 w-6" />}
                          {platform === 'linkedin' && <LinkedInLogoIcon className="h-6 w-6" />}
                          {platform === 'github' && <GitHubLogoIcon className="h-6 w-6" />}
                          {platform === 'website' && <Globe className="h-6 w-6" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SVG filter for animated borders */}
      <svg className="hidden">
        <filter id="unopaq" width="3000%" x="-1000%" height="3000%" y="-1000%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 2 0"
          ></feColorMatrix>
        </filter>
      </svg>

      <style jsx>{`
        .glow-wrapper {
          position: relative;
        }

        .glow-wrapper::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: transparent;
          box-shadow: 0 0 30px 8px rgba(168, 85, 247, 0.4);
          z-index: -1;
        }

        .card-container {
          position: relative;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, rgba(76, 29, 149, 0.15), rgba(0, 0, 0, 0.4));
        }

        .card-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(76, 29, 149, 0.2), transparent 70%);
          pointer-events: none;
        }

        .a {
          pointer-events: none;
          position: absolute;
          --w: 2px;
          --g: #fff0, #9333EA 50%, #9333EA 50%, #fff0;
          z-index: 30;
          filter: drop-shadow(0 0 5px rgba(147, 51, 234, 1));
        }

        .a::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: url(#unopaq);
          z-index: 25;
        }

        .a::after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: url(#unopaq);
          opacity: 0;
          z-index: 25;
          transition: 0.3s;
        }

        .card-container:hover .a::after {
          opacity: 1;
        }

        .l {
          left: 0;
          background: linear-gradient(to bottom, 
            #fff0 0%, 
            #9333EA 15%, 
            #9333EA 85%, 
            #fff0 100%
          );
          top: 0;
          bottom: 0;
          width: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .r {
          right: 0;
          background: linear-gradient(to bottom, 
            #fff0 0%, 
            #9333EA 15%, 
            #9333EA 85%, 
            #fff0 100%
          );
          top: 0;
          bottom: 0;
          width: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .t {
          top: 0;
          background: linear-gradient(to right, 
            #fff0 0%, 
            #9333EA 15%, 
            #9333EA 85%, 
            #fff0 100%
          );
          left: 0;
          right: 0;
          height: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .b {
          bottom: 0;
          background: linear-gradient(to right, 
            #fff0 0%, 
            #9333EA 15%, 
            #9333EA 85%, 
            #fff0 100%
          );
          left: 0;
          right: 0;
          height: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .card-container {
          border-radius: 0 !important;
        }

        .card-container > div:first-child {
          border-radius: 0 !important;
        }

        .card-container:hover {
          box-shadow: 0 0 40px rgba(147, 51, 234, 0.5);
        }

        .card-container:hover .a {
          filter: drop-shadow(0 0 8px rgba(147, 51, 234, 1));
        }

        .card-container:hover .l,
        .card-container:hover .r,
        .card-container:hover .t,
        .card-container:hover .b {
          box-shadow: 0 0 20px 3px rgba(147, 51, 234, 1);
        }

        .card-container:hover::before {
          box-shadow: 0 0 45px 10px rgba(147, 51, 234, 0.5);
        }
      `}</style>
    </section>
  );
};

export default OrganisersSection;
