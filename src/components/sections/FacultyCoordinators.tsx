import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const FACULTY_COORDINATORS_NAMES = [
  {
    name: "Dr.Nisha R",
    photoUrl: "/ospc.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    name: "Dr.Jayaram B",
    photoUrl: "/ospc.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    name: "Dr.Umitty Srinivasa Rao",
    photoUrl: "/ospc.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    name: "Dr.Maheswari S",
    photoUrl: "/ospc.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

export default function FacultyCoordinators() {
  return (
    <section
      id="partners"
      className="scroll-mt-32 flex items-center py-10 relative overflow-hidden"
    >
      {/* Sophisticated background */}
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

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionTitle>Faculty Coordinators</SectionTitle>
        <p className="text-center text-lg text-gray-300 max-w-xl mx-auto">
          The mentors who guide us, support the team, and keep everything on
          track.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto my-16">
          {FACULTY_COORDINATORS_NAMES.map((info) => (
            <div
              key={info.name}
              className="rounded-2xl p-6 md:p-8 liquid-container"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="size-24 md:size-48  rounded-xl overflow-hidden relative flex-shrink-0">
                  <Image
                    src={info.photoUrl}
                    alt={`${info.name} logo`}
                    fill
                    sizes="256px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div className="text-white/90 w-full">
                  <h3 className="text-center text-xl font-bold mb-2">
                    {info.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {info.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
