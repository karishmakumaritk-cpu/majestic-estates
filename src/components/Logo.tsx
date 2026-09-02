import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'symbol' | 'footer';
  theme?: 'dark' | 'light';
  className?: string;
  symbolSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  symbolSize = 38
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#faf8f5' : '#16191c';
  const subTextColor = isLight ? '#c5a86a' : '#5a626a';
  const goldColor = '#c5a86a';
  const goldDark = '#b39556';

  // Architectural "M E" Monogram Symbol:
  // Combines modern Indian architectural arches, solid vertical pillars (symbolizing trust & foundations),
  // and interlocking geometric "M" & "E" lines inspired by Delhi stone architectural framing.
  const renderSymbol = () => (
    <svg
      width={symbolSize}
      height={symbolSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Majestic Estates Architectural Logo"
    >
      {/* Background soft geometric frame */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="10"
        stroke={goldColor}
        strokeWidth="2"
        strokeOpacity="0.45"
        fill={isLight ? 'rgba(255,255,255,0.03)' : 'rgba(22,25,28,0.02)'}
      />
      
      {/* Outer subtle arch contour representing Indian doorway geometry */}
      <path
        d="M24 82V42C24 27.64 35.64 16 50 16C64.36 16 76 27.64 76 42V82"
        stroke={goldColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Modern Architectural 'M' and 'E' Interlocked Monogram */}
      {/* Left Pillar of M */}
      <line x1="30" y1="36" x2="30" y2="76" stroke={goldDark} strokeWidth="4.5" strokeLinecap="round" />
      {/* Right Pillar of M / E vertical spine */}
      <line x1="70" y1="36" x2="70" y2="76" stroke={goldDark} strokeWidth="4.5" strokeLinecap="round" />
      
      {/* Central M peak & arch intersection */}
      <path
        d="M30 40L50 62L70 40"
        stroke={goldColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* The 'E' horizontal architectural slabs */}
      <line x1="48" y1="46" x2="68" y2="46" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="44" y1="58" x2="68" y2="58" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="76" x2="68" y2="76" stroke={goldDark} strokeWidth="4" strokeLinecap="round" />

      {/* Decorative architectural keystone accent */}
      <circle cx="50" cy="24" r="2.5" fill={goldColor} />
    </svg>
  );

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderSymbol()}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {renderSymbol()}
      <div className="flex flex-col tracking-tight">
        <span
          className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] uppercase leading-none"
          style={{ color: textColor }}
        >
          Majestic <span style={{ color: goldColor }}>Estates</span>
        </span>
        <span
          className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase mt-1 leading-none opacity-90"
          style={{ color: subTextColor }}
        >
          Real Estate Consultant
        </span>
      </div>
    </div>
  );
};
