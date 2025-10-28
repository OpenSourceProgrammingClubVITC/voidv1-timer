'use client';

import React, { useState, useEffect, memo } from 'react';

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

type Prize = {
  id: string;
  rank: number;
  title: string;
  icon: string;
  value: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
  };
};

const PRIZES_CONFIG: Prize[] = [
  {
    id: 'first-place',
    rank: 1,
    title: 'First Place',
    icon: '🏆',
    value: 'Coming Soon',
    description: 'Ultimate champion reward',
    colors: {
      primary: 'from-yellow-400 via-amber-500 to-orange-500',
      secondary: 'from-yellow-500/20 via-amber-500/15 to-orange-500/20',
      accent: 'text-yellow-400',
      glow: 'shadow-yellow-500/25'
    }
  },
  {
    id: 'second-place',
    rank: 2,
    title: 'Second Place',
    icon: '🥈',
    value: 'Coming Soon',
    description: 'Runner-up excellence',
    colors: {
      primary: 'from-slate-300 via-gray-200 to-slate-300',
      secondary: 'from-slate-500/20 via-gray-400/15 to-slate-500/20',
      accent: 'text-slate-300',
      glow: 'shadow-slate-400/25'
    }
  },
  {
    id: 'third-place',
    rank: 3,
    title: 'Third Place',
    icon: '🥉',
    value: 'Coming Soon',
    description: 'Bronze achievement',
    colors: {
      primary: 'from-amber-600 via-orange-700 to-amber-800',
      secondary: 'from-amber-600/20 via-orange-700/15 to-amber-800/20',
      accent: 'text-amber-400',
      glow: 'shadow-amber-600/25'
    }
  }
];

const ANIMATION_CONFIG = {
  shimmerInterval: 4000,
  hoverScale: 1.05,
  championScale: 1.08
};

const SectionTitle = memo(({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      {children}
    </h2>
  </div>
));
SectionTitle.displayName = 'SectionTitle';

interface PrizeCardProps {
  prize: Prize;
  isHovered: boolean;
  isShimmering: boolean;
  onHover: (hovered: boolean) => void;
}

const PrizeCard = memo(({ prize, isHovered, isShimmering, onHover }: PrizeCardProps) => {
  return (
    <article
      className={cn(
        'group relative transition-all duration-500 ease-out cursor-pointer',
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      role="button"
      tabIndex={0}
      aria-label={`${prize.title} - ${prize.value}`}
    >
      <div
        className={cn(
          'relative h-80 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden',
          'transition-all duration-500 ease-out',
          'bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80',
          isHovered && 'scale-105 border-white/20',
        )}
        style={{
          boxShadow: isHovered ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${prize.colors.glow.replace('shadow-', 'rgba(')}` : '0 10px 25px -3px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Background Gradient */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-500',
            `bg-gradient-to-br ${prize.colors.secondary}`,
            (isHovered || isShimmering) && 'opacity-100'
          )}
        />

        {/* Shimmer Effect */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-1000',
            'bg-gradient-to-r from-transparent via-white/10 to-transparent',
            'transform -skew-x-12',
            isShimmering && 'opacity-100 animate-shimmer'
          )}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Rank Badge */}
          <div
            className={cn(
              'absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
              'bg-white/10 backdrop-blur-sm border border-white/20',
              prize.colors.accent
            )}
          >
            #{prize.rank}
          </div>

          {/* Icon */}
          <div
            className={cn(
              'text-7xl mb-6 transition-all duration-500',
              isHovered && 'scale-110 drop-shadow-2xl'
            )}
          >
            {prize.icon}
          </div>

          {/* Title */}
          <h3
            className={cn(
              'text-2xl md:text-3xl font-bold mb-3 transition-all duration-500',
              isHovered
                ? `bg-gradient-to-r ${prize.colors.primary} bg-clip-text text-transparent`
                : 'text-white'
            )}
          >
            {prize.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 font-medium">
            {prize.description}
          </p>

          {/* Value */}
          <div
            className={cn(
              'px-6 py-3 rounded-xl border transition-all duration-500',
              'bg-white/5 backdrop-blur-sm border-white/10',
              isHovered && 'bg-white/10 border-white/20 scale-105'
            )}
          >
            <span className="text-white font-semibold text-lg">
              {prize.value}
            </span>
          </div>

          {/* Hover Effects */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-6 left-6 w-2 h-2 bg-white/60 rounded-full animate-ping" />
              <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/3 left-4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
});
PrizeCard.displayName = 'PrizeCard';



export default function Prizes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shimmerIndex, setShimmerIndex] = useState(0);

  // Auto-shimmer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerIndex((prev) => (prev + 1) % PRIZES_CONFIG.length);
    }, ANIMATION_CONFIG.shimmerInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="prizes"
      className="relative py-20 scroll-mt-32"
      role="region"
      aria-labelledby="prizes-title"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionTitle>
          <span id="prizes-title">Prizes & Recognition</span>
        </SectionTitle>

        {/* Description */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed">
            Compete with the best and earn recognition for your innovative solutions. 
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-semibold">
              {" "}Amazing rewards await the most creative minds.
            </span>
          </p>
        </div>

        {/* Prizes Grid */}
          <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">          {PRIZES_CONFIG.map((prize, index) => (
            <PrizeCard
              key={prize.id}
              prize={prize}
              isHovered={hoveredIndex === index}
              isShimmering={shimmerIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>

      </div>

      
    </section>
  );
}