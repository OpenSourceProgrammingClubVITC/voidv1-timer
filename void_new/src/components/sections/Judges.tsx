"use client";

import React from 'react';
import SectionTitle from '../SectionTitle';

// Judge data
// const JUDGES = [
//   {
//     name: "Mr. Senthil Nathan",
//     image: "/judges/senthil.jpeg",
//     role: "Head of Product, DevOps, IBM Z",
//     linkedin: "https://www.linkedin.com/in/reachsenthilnathan/"
//   },
//   {
//     name: "Mr. Suresh Kumar",
//     image: "/judges/suresh.png",
//     role: "Senior Specialist, PayPal",
//     linkedin: "https://www.linkedin.com/in/suresh-kumar-c-56083a135/"
//   },
//   {
//     name: "Mr. Abdul Hadi",
//     image: "/judges/abdul.jpeg",
//     role: "Senior Software Engineer, PayPal",
//     linkedin: "https://www.linkedin.com/in/abdul-hadi-n-66792b22/"
//   },
//   {
//     name: "Mrs. Janani",
//     image: "/judges/janani.jpeg",
//     role: "Technical Evangelist, PayPal",
//     linkedin: "https://www.linkedin.com/in/janani-velmurugan-b9214521/"
//   },
//   {
//     name: "Mr. Santhosh Kumar",
//     image: "/judges/santosh.jpeg",
//     role: "Compliance Lead, PayPal",
//     linkedin: "https://www.linkedin.com/in/santhosh-kumar-profile/"
//   },
//   {
//     name: "Mr. Ajith M",
//     image: "/judges/ajith.jpeg",
//     role: "Lead Analytics professional, PayPal",
//     linkedin: "https://www.linkedin.com/in/ajith-m-97278b147/"
//   }
// ];

export default function JudgesSection() {
  
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
    
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  
  // const nextJudge = () => {
  //   setActiveIndex((prev) => (prev + 1) % JUDGES.length);
  // };

  // const prevJudge = () => {
  //   setActiveIndex((prev) => (prev - 1 + JUDGES.length) % JUDGES.length);
  // };

  // // Calculate position for each album cover
  // const getPositionStyles = (index: number) => {
  //   const diff = (index - activeIndex + JUDGES.length) % JUDGES.length;
    
  //   // Adjust these values to control the carousel appearance
  //   let zIndex = 6 - diff;
  //   let xPos = 0;
  //   let yPos = 0;
  //   let scale = 1;
  //   let rotate = 0;
  //   let opacity = 1;
    
  //   if (diff === 0) { // Active item
  //     xPos = 0;
  //     scale = 1;
  //     zIndex = 100;
  //     opacity = 1;
  //   } else if (diff === 1 || diff === JUDGES.length - 1) { // Items to left and right
  //     xPos = diff === 1 ? (isMobile ? 220 : 320) : (isMobile ? -220 : -320);
  //     yPos = isMobile ? 30 : 0;
  //     scale = isMobile ? 0.7 : 0.85;
  //     opacity = isMobile ? 0.5 : 0.8;
  //     rotate = diff === 1 ? 15 : -15;
  //     zIndex = isMobile ? 5 : 20;
  //   } else if (diff === 2 || diff === JUDGES.length - 2) { // Items further out
  //     xPos = diff === 2 ? (isMobile ? 320 : 520) : (isMobile ? -320 : -520);
  //     yPos = isMobile ? 50 : 10;
  //     scale = isMobile ? 0.5 : 0.7;
  //     opacity = isMobile ? 0.2 : 0.6;
  //     rotate = diff === 2 ? 30 : -30;
  //     zIndex = isMobile ? 1 : 10;
  //   } else { // Hide the rest
  //     opacity = 0;
  //     scale = 0.5;
  //     xPos = diff < JUDGES.length / 2 ? (isMobile ? 350 : 700) : (isMobile ? -350 : -700);
  //     zIndex = 1;
  //   }
    
  //   return {
  //     zIndex,
  //     x: xPos,
  //     y: yPos,
  //     scale,
  //     rotateY: rotate,
  //     opacity
  //   };
  // };

  // // Additional style properties that don't need to be animated
  // const getAdditionalStyles = (index: number) => {
  //   const isActive = index === activeIndex;
    
  //   // Define styles with proper TypeScript typing for Framer Motion
  //   const styles: React.CSSProperties = {
  //     position: 'absolute',
  //     transformOrigin: 'center center',
  //     perspective: 1200,
  //     willChange: 'transform, opacity, z-index',
  //     pointerEvents: 'auto',
  //     isolation: isActive ? 'isolate' : 'auto',
  //     filter: isActive ? 'none' : (isMobile ? 'brightness(0.7) blur(1px)' : 'brightness(0.8)')
  //   };
    
  //   return styles;
  // };
  return (
    <section id="judges" className="py-10 text-white relative overflow-hidden">
      <SectionTitle>Meet Our Judges</SectionTitle>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white my-12">
        COMING SOON...
        </h1>
      {/* <div className="h-px w-40 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div> */}
      {/* <p className="text-white/70 mt-3 text-xs sm:text-sm tracking-[0.1em] uppercase font-mono">
        Under Construction
      </p> */}
    </div>
  {/* </div> */}
  </section>
)}

        {/* 3D Album Carousel */}
        {/* <div className="relative h-[450px] md:h-[550px] w-full perspective-1000px flex justify-center items-center mt-10" ref={containerRef}>
          <div className="relative h-full w-full transform-style-3d">
            {JUDGES.map((judge, index) => (
              <motion.div
                key={index}
                className={`absolute top-1/2 left-1/2 h-[350px] md:h-[500px] w-[250px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 transform-style-3d cursor-pointer hover:z-[500] ${index === activeIndex ? 'active-card' : ''}`}
                animate={getPositionStyles(index)}
                transition={{
                  type: "spring",
                  stiffness: 270,
                  damping: 40,
                  mass: 1.2
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{
                  scale: index === activeIndex ? 1.05 : (isMobile ? 0.75 : 0.85),
                  opacity: index === activeIndex ? 1 : 0.85,
                }}
                style={getAdditionalStyles(index)}
              >
                <div 
                  className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden liquid-container"
                  style={{ 
                    transformStyle: "preserve-3d",
                    boxShadow: index === activeIndex ? 
                      "0 25px 50px -12px rgba(0, 0, 0, 0.85)" : 
                      "0 20px 25px -5px rgba(0, 0, 0, 0.65)",
                    WebkitBoxReflect: index === activeIndex ? 
                      "below 0.5vmin linear-gradient(transparent 0 70%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0.3) 100%)" :
                      "none",
                    textAlign: "center",
                    objectPosition: judge.role === "Head of Product, DevOps, IBM Z" ? "85% center" : 
                                  judge.role === "Senior Specialist, PayPal" ? "center center" : "center"
                   }}
                >
                  <OptimizedImage 
                    src={judge.image} 
                    alt={judge.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    mobileQuality={60}
                    desktopQuality={85}
                    loading="lazy"
                  /> */}
                  
                  {/* Judge Info Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white font-heading">{judge.name}</h3>
                    <p className="text-purple-300 text-lg">{judge.role}</p>
                    <a 
                      href={judge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">View Profile</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
        
        {/* Controls - positioned below carousel */}
        {/* <div className="flex justify-center mt-8 md:mt-12 gap-12 md:gap-16 items-center">
          <button
            onClick={prevJudge}
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-900/60 hover:bg-purple-800/80 transition-colors border border-purple-700/50 void-pulse"
            aria-label="Previous judge"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextJudge}
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-900/60 hover:bg-purple-800/80 transition-colors border border-purple-700/50 void-pulse"
            aria-label="Next judge"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .perspective-1000px { perspective: 1000px; }
        @keyframes void-pulse {
          0% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(147, 51, 234, 0); }
          100% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0); }
        }
        .void-pulse { animation: void-pulse 2s infinite; }
      `}</style>
    </section>
  );
}
*/}
