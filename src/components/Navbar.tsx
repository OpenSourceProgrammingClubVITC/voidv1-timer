"use client";

// import Link from "next/link"; // Unused
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#prizes", label: "Prizes" },
  { href: "#judges", label: "Judges" },
  { href: "#organisers", label: "Organisers" },
  { href: "#coordinators", label: "Coordinators" },
  { href: "#partners", label: "Partners" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#");
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement>>({});

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Keep track of scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link via IntersectionObserver with better configuration
  useEffect(() => {
    const sectionEls = nav
      .map((i) => document.querySelector<HTMLElement>(i.href))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) {
      // If sections don't exist yet, set a default active state
      setActive("#about");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            // Sort by intersection ratio (how much is visible) and then by position
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            // If intersection ratios are equal, prefer the one that's higher on the page
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        if (visibleEntries.length > 0) {
          const targetId = visibleEntries[0].target.id;
          if (targetId) {
            setActive(`#${targetId}`);
          }
        }
      },
      {
        // Adjusted margins for better detection
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handle smooth scrolling with proper offset for fixed navbar
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Calculate offset to account for fixed navbar height
      const navbarHeight = 60; // Reduced gap for better positioning
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActive(href);
    } // else {
    //   // Debug: Log when element is not found
    //   console.warn(`Element with selector "${href}" not found. Available sections:`,
    //     Array.from(document.querySelectorAll('[id]')).map(el => `#${el.id}`));
    // }
  };

  // Update indicator position with error handling
  const updateIndicator = (targetId: string) => {
    const indicator = indicatorRef.current;
    const targetLink = linkRefs.current[targetId];
    const navContainer = navRef.current?.querySelector(
      ".relative.flex.items-center",
    );

    if (!indicator || !targetLink || !navContainer) return;

    try {
      const linkRect = targetLink.getBoundingClientRect();
      const navRect = navContainer.getBoundingClientRect();

      // Calculate position relative to the nav links container
      const left = linkRect.left - navRect.left;
      const width = linkRect.width;

      // Apply smooth animation
      indicator.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      indicator.style.left = `${left}px`;
      indicator.style.width = `${width}px`;
    } catch (error) {
      // Silently handle any positioning errors
      console.warn("Error updating indicator position:", error);
    }
  };

  // Handle hover and active state changes
  useEffect(() => {
    const currentTarget = hovered || active;
    if (currentTarget) {
      updateIndicator(currentTarget);
    }
  }, [hovered, active]);

  // Recalculate indicator position on window resize
  useEffect(() => {
    const handleResize = () => {
      const currentTarget = hovered || active;
      if (currentTarget) {
        setTimeout(() => updateIndicator(currentTarget), 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hovered, active]);

  // Get gradient color based on active section
  const getActiveGradient = () => {
    const current = hovered || active;
    switch (current) {
      case "#about":
        return "from-purple-500 via-pink-500 to-emerald-500";
      case "#tracks":
        return "from-blue-500 via-cyan-400 to-teal-500";
      case "#prizes":
        return "from-amber-500 via-yellow-400 to-orange-500";
      case "#judges":
        return "from-purple-500 via-violet-400 to-indigo-500";
      case "#organizers":
        return "from-emerald-500 via-green-400 to-teal-500";
      case "#partners":
        return "from-rose-500 via-pink-400 to-purple-500";
      case "#sponsors":
        return "from-amber-500 via-orange-400 to-red-500";
      case "#faq":
        return "from-blue-500 via-indigo-400 to-violet-500";
      default:
        return "from-purple-500 via-pink-500 to-emerald-500";
    }
  };

  return (
    <>
      {/* Desktop liquid glass navbar */}
      <div className="hidden md:block">
        <div
          ref={navRef}
          className={`fixed z-50 top-5 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300
                     ${scrolled ? "px-6 py-2" : "px-8 py-3"}`}
          style={{
            background: "rgba(15, 15, 20, 0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex items-center gap-1">
            <div className="mr-6">
              <a href="#" className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
              </a>
            </div>

            <div className="relative flex items-center">
              {/* Dynamic background indicator */}
              <div
                ref={indicatorRef}
                className="absolute h-full top-0 -z-10 rounded-full transition-all duration-400"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  boxShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              />

              {nav.map((item) => {
                const isActive = active === item.href;
                const isHovered = hovered === item.href;
                const isHighlighted = isActive || isHovered;

                return (
                  <a
                    key={item.href}
                    ref={(el) => {
                      if (el) linkRefs.current[item.href] = el;
                    }}
                    href={item.href}
                    className="relative px-4 py-2 text-sm transition-colors duration-300 cursor-pointer"
                    style={{
                      color: isHighlighted
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.7)",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {item.label}

                    {/* Gradient underline - only shows for highlighted items */}
                    {isHighlighted && (
                      <motion.div
                        className={`absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r ${getActiveGradient()}`}
                        style={{
                          width: "50%",
                          left: "25%",
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        layoutId="navUnderline"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="ml-6">
              <div
                className="apply-button h-9 w-48 rounded-full"
                data-hackathon-slug="voidv1"
                data-button-theme="light"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <header className="md:hidden fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg">
        <div className="h-16 px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
          </a>
          <button
            aria-label="Toggle menu"
            className="p-2 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-black/80 backdrop-blur-lg"
          >
            <div className="flex flex-col px-4">
              {nav.map((item) => {
                const isActive = active === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`py-3 text-base border-b border-white/10 last:border-b-0 relative transition-colors cursor-pointer ${
                      isActive ? "text-white font-medium" : "text-white/80"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(item.href);
                      setOpen(false);
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r ${getActiveGradient()} rounded-full`}
                        layoutId="mobileActiveIndicator"
                      />
                    )}
                  </a>
                );
              })}

              <div className="py-4">
                <div
                  className="apply-button h-9 w-48 rounded-full"
                  data-hackathon-slug="voidv1"
                  data-button-theme="light"
                ></div>
              </div>
            </div>
          </motion.nav>
        )}
      </header>
    </>
  );
}

