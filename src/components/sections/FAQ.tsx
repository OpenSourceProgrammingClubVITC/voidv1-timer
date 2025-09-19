"use client";

import React, { useState } from "react";
import SectionTitle from "../SectionTitle";

const QA = [
  {
    q: "Who can participate?",
    a: "Anyone who loves to build — students, professionals, beginners. Teams of 4-6 are welcome.",
  },
  {
    q: "What should I bring?",
    a: "Laptop, chargers, valid ID, and your creative energy. We'll take care of food and space.",
  },
  // {
  //   q: "Do I need a team beforehand?",
  //   a: "No. You can join solo and form a team on‑site during the kickoff mingle.",
  // },
  {
    q: "What are the judging criteria?",
    a: "Impact, technical depth, design craft, and innovation. Live demos only — no slide decks.",
  },
  {
    q: "Is there a fee?",
    a: "No. VOID is completely free to attend.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-32 container mx-auto px-6 py-24 md:py-10">
      <SectionTitle>FAQ</SectionTitle>

      <div className="max-w-3xl mx-auto space-y-4">
        {QA.map((item, i) => (
          <div key={item.q} className="rounded-2xl liquid-container p-4 md:p-5">
            <button
              className="w-full text-left flex items-center justify-between gap-4 text-white"
              onClick={() => setOpen((curr) => (curr === i ? null : i))}
            >
              <span className="font-semibold">{item.q}</span>
              <span className="text-white/70">{open === i ? "–" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <p className="text-white/80 text-sm md:text-base">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


