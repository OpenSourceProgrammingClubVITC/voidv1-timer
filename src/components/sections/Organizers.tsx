import React from "react";
import Image from "next/image";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import SectionTitle from "../SectionTitle";
import LiquidGlassCard from "../LiquidGlassCard";
import SectionSubtitle from "../SectionSubtitle";

type ClubOrganizer = {
  name: string;
  bio: string;
  profileSrc: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

type StudentOrganizer = {
  name: string;
  bio: string;
  profileSrc: string;
};

type CoOrganizer = {
  name: string;
  bio: string;
  profileSrc: string;
};

type POC = {
  name: string;
  bio: string;
  role: string;
  profileSrc: string;
};

type CoreTechTeam = {
  name: string;
  bio: string;
  profileSrc: string;
};

type Organizers = {
  clubs: ClubOrganizer[];
  organizers: StudentOrganizer[];
  coOrganizers: CoOrganizer[];
  poc: POC[];
  coreTechTeam: CoreTechTeam[];
};

const ORGANIZERS: Organizers = {
  clubs: [
    {
      name: "OSPC",
      bio: "The Open Source Programming Club at VIT Chennai is dedicated to fostering innovation through open source collaboration and building a vibrant tech community on campus.",
      profileSrc: "/ospc.png",
      socialLinks: {
        twitter: "https://twitter.com/ospcvitc",
        linkedin:
          "https://www.linkedin.com/company/opensource-programming-club-vitc",
        github: "https://github.com/OSPC-VITC",
        website: "https://ospcvitc.club",
      },
    },
    {
      name: "BIC",
      bio: "Business Innovation Community at VIT Chennai fosters innovation and entrepreneurship, providing resources and mentorship for student startups to thrive in the competitive business landscape.",
      profileSrc: "/bi.jpg",
      socialLinks: {
        twitter: "https://twitter.com/vitchennai",
        linkedin: "https://www.linkedin.com/company/bic-vitc/",
      },
    },
  ],
  organizers: [
    {
      name: "Pranav",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Arjuun",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Mithil",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Dhanavanthini",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Kanishk",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ],
  coOrganizers: [
    {
      name: "Pavithra",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Derrick",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ],

  poc: [
    {
      name: "Vaibhav",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Social Media",
    },
    {
      name: "Barani",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Photography",
    },
    {
      name: "Rohit",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Website",
    },
    {
      name: "Sudeep",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Stage and Guest",
    },
    {
      name: "Jeevika",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Registration",
    },
    {
      name: "Joshnavi",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Registration",
    },
    {
      name: "Food Team",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      role: "Food",
    },
  ],

  coreTechTeam: [
    {
      name: "Naveen",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Priyanka",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Keerthivasan",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Shourya",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Sanjaykumar",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      name: "Kishore",
      profileSrc: "/ospc.png",
      bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ],
};

export default function Organizers() {
  return (
    <section id="organisers" className="text-white px-4 relative z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/6 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Subtle floating shapes */}
        <div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/10 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400/20 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-3 h-3 bg-blue-400/15 rounded-full animate-bounce opacity-25"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <SectionTitle>VOID Organizers</SectionTitle>
        <SectionSubtitle>Club / Chapters</SectionSubtitle>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          VOID is powered by OSPC x BIC, bringing together the best minds to
          create an electrifying innovation battlefield in the digital realm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-3">
          {ORGANIZERS.clubs.map((organizer) => (
            <LiquidGlassCard className="h-full" key={organizer.name}>
              <div className="p-6 space-y-4">
                <div className="relative h-44 w-full mb-4 flex items-center justify-center">
                  <div className="relative w-[90%] h-full">
                    <Image
                      src={organizer.profileSrc}
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
                    <h3 className="text-3xl font-bold text-white tracking-wide font-heading">
                      {organizer.name}
                    </h3>
                    <p className="text-white/85 font-medium text-lg">
                      Club / Chapters
                    </p>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {organizer.bio}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-4">
                    {Object.entries(organizer.socialLinks).map(
                      ([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/85 hover:text-white transition-colors"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === "twitter" && (
                            <TwitterLogoIcon className="h-6 w-6" />
                          )}
                          {platform === "linkedin" && (
                            <LinkedInLogoIcon className="h-6 w-6" />
                          )}
                          {platform === "github" && (
                            <GitHubLogoIcon className="h-6 w-6" />
                          )}
                          {platform === "website" && (
                            <Globe className="h-6 w-6" />
                          )}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
        <SectionSubtitle>Organizers</SectionSubtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {ORGANIZERS.organizers.map((info) => (
            <LiquidGlassCard key={info.name}>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="size-28 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={info.profileSrc}
                    alt={`${info.name} photo`}
                    fill
                    sizes="256px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-2xl font-bold mb-2">{info.name}</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {info.bio}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
        <SectionSubtitle>Co Organizers</SectionSubtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {ORGANIZERS.coOrganizers.map((info) => (
            <LiquidGlassCard key={info.name}>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="size-28 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={info.profileSrc}
                    alt={`${info.name} photo`}
                    fill
                    sizes="256px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-2xl font-bold mb-2">{info.name}</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {info.bio}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
        <SectionSubtitle>POC</SectionSubtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {ORGANIZERS.poc.map((info) => (
            <LiquidGlassCard key={info.name}>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="size-28 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={info.profileSrc}
                    alt={`${info.name} photo`}
                    fill
                    sizes="256px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-2xl font-bold mb-2">{info.name}</h3>
                  <p className="text-white/85 font-medium text-lg mb-1">
                    {info.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {info.bio}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
        <SectionSubtitle>Core Tech Team</SectionSubtitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {ORGANIZERS.coreTechTeam.map((info) => (
            <LiquidGlassCard key={info.name}>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="size-28 rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={info.profileSrc}
                    alt={`${info.name} photo`}
                    fill
                    sizes="256px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-2xl font-bold mb-2">{info.name}</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {info.bio}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
