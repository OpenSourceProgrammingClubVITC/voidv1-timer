"use client";

import SectionTitle from "../SectionTitle";
import styles from "./TracksAccordion.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

type Spec = { label: string; value: string };
type Track = {
  id: string;
  number: string;
  brand: string;
  name: string;
  subtitle: string;
  specs: Spec[];
  badges: string[];
  background: string;
};

const DATA: Track[] = [
  {
    id: "fintech",
    number: "01",
    brand: "Fintech & Digital Payments",
    name: "Real‑time, Composable Payments",
    subtitle: "UPI, multi‑rail checkout, KYC/AML automation",
    specs: [
      { label: "Focus", value: "Real-time transactions & security" },
      { label: "Stack", value: "Payment gateways, APIs, blockchain" },
      { label: "Challenge", value: "Build a secure, instant payment solution" },
      // { label: "Prizes", value: "₹2L cash + API credits + mentorship" },
    ],
    badges: ["UPI Integration", "Secure", "Scalable"],
    background:
      "/fintech.jpg",
  },
  {
    id: "health-ed",
    number: "02",
    brand: "Healthtech & Edtech",
    name: "Assistive, Privacy‑first Tools",
    subtitle: "Care coordination, tele‑health, adaptive learning",
    specs: [
      { label: "Focus", value: "Patient care & learning outcomes" },
      { label: "Stack", value: "ML/AI, telehealth APIs, LLMs" },
      { label: "Challenge", value: "Create tools that improve healthcare/education" },
      // { label: "Prizes", value: "₹1.5L + cloud credits + deployment support" },
    ],
    badges: ["AI-Powered", "Privacy-First", "Accessible"],
    background:
      "/medtech.jpg",
  },
  {
    id: "retail-saas-mobility",
    number: "03",
    brand: "Retailtech | SaaS | Smart Mobility",
    name: "Operational Intelligence",
    subtitle: "Inventory, routing, commerce automation",
    specs: [
      { label: "Focus", value: "Efficiency, automation, optimization" },
      { label: "Stack", value: "IoT, real-time analytics, mobile apps" },
      { label: "Challenge", value: "Build solutions for retail, SaaS or mobility" },
      // { label: "Prizes", value: "₹1.8L + industry partnerships + mentorship" },
    ],
    badges: ["IoT-Ready", "Real-time", "Mobile-First"],
    background:
      "/retail.jpeg",
  },
  {
    id: "agri-sdg",
    number: "04",
    brand: "AgriTech & SDG",
    name: "Planet‑scale Resilience",
    subtitle: "Yield, climate risk, supply transparency",
    specs: [
      { label: "Focus", value: "Sustainable agriculture & climate action" },
      { label: "Stack", value: "Satellite imagery, IoT sensors, ML" },
      { label: "Challenge", value: "Create solutions for sustainable development" },
      // { label: "Prizes", value: "₹1.5L + field implementation + UN recognition" },
    ],
    badges: ["Sustainable", "Data-Driven", "Impact"],
    background:
      "/agri.jpg",
  },
  {
    id: "open",
    number: "05",
    brand: "Open Innovation",
    name: "Wildcard & Frontier",
    subtitle: "If it inspires, build it.",
    specs: [
      { label: "Focus", value: "Innovation & creative problem-solving" },
      { label: "Stack", value: "Any tech stack of your choice" },
      { label: "Challenge", value: "Build something unique that doesn't fit other tracks" },
      // { label: "Prizes", value: "₹2L + incubation opportunity + investor pitch" },
    ],
    badges: ["Innovative", "Disruptive", "Moonshot"],
    background:
      "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')",
  },
];

export default function Tracks() {
  // Use a ref to avoid re-renders during interaction
  const [active, setActive] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const setActiveSlide = useCallback(
    (index: number) => {
      // Use requestAnimationFrame for smoother UI updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setActive((curr) => (curr === index ? -1 : index));
      });
    },
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Use requestAnimationFrame for smoother UI updates on keyboard nav
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (e.key === "ArrowLeft") {
          setActive((curr) => (curr === -1 ? DATA.length - 1 : (curr - 1 + DATA.length) % DATA.length));
        }
        if (e.key === "ArrowRight") {
          setActive((curr) => (curr === -1 ? 0 : (curr + 1) % DATA.length));
        }
      });
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Do not auto-activate on mobile; reveal details only on tap/click

  return (
    <section id="tracks" className="scroll-mt-32 container mx-auto px-0 md:px-6 py-10 md:py-10">
      <SectionTitle>Tracks</SectionTitle>

      <div className={styles.sliderContainer}>
        <div className={styles.accordionSlider}>
          {DATA.map((t, i) => {
            // For mobile, add special class to make titles always visible
            const slideClass = `${styles.slide} ${active === i ? styles.active : ""} ${isMobile ? styles.mobileSlide : ""}`;
            
            return (
              <div
                key={t.id}
                className={slideClass}
                style={{ backgroundImage: t.background.startsWith("url(") ? t.background : `url('${t.background}')` }}
                onMouseEnter={() => !isMobile && setActiveSlide(i)}
                onClick={() => setActiveSlide(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveSlide(i)}
                aria-pressed={active === i}
              >
                <div className={styles.slideContent}>
                  <div className={styles.slideNumber}>{t.number}</div>
                  <div className={`${styles.carBrand} ${isMobile ? styles.mobileCarBrand : ""}`}>{t.brand}</div>
                  <div className={`${styles.carName} ${isMobile ? styles.mobileCarName : ""}`}>{t.name}</div>
                  <div className={styles.carSubtitle}>{t.subtitle}</div>
                  <div className={styles.carSpecs}>
                    {t.specs.map((s) => (
                      <div key={s.label} className={styles.specRow}>
                        <span className={styles.specLabel}>{s.label}:</span>
                        <span className={styles.specValue}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.performanceBadges}>
                    {t.badges.map((b, idx) => (
                      <div key={b} className={styles.badge} style={{ transitionDelay: active === i ? `${0.85 + idx * 0.05}s` : undefined }}>
                        <div className={styles.badgeIcon} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.addButton} aria-hidden />
              </div>
            );
          })}
        </div>

        {/* Mobile instructions */}
        {isMobile && (
          <div className="text-center text-white/60 text-xs mt-4 px-4">
            Tap on a track to expand details
          </div>
        )}
      </div>
    </section>
  );
}
