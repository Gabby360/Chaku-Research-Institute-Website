import React, { useState, useEffect, useRef } from 'react';
import CountUpNumber from './CountUpNumber';

interface AnimatedProgressBarProps {
  label: string;
  value: number;
  suffix?: string;
  progressPercent: number;
  delay?: number;
}

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  label,
  value,
  suffix = '',
  progressPercent,
  delay = 0,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={containerRef} className="group">
      <div className="flex items-center justify-between mb-2.5">
        <span className="font-heading font-bold text-[#042817] text-base sm:text-lg tracking-tight">
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-heading font-black text-[#042817] text-base sm:text-xl">
            {isAnimated ? (
              <CountUpNumber value={value} suffix={suffix} formatWithComma={true} duration={1800} />
            ) : (
              `0${suffix}`
            )}
          </span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-3.5 w-full rounded-full bg-[#e8ece4] p-0.5 overflow-hidden shadow-inner">
        {/* Animated Green Fill */}
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-[#00a854] via-[#00d66c] to-[#34d399] transition-all duration-[1600ms] cubic-bezier(0.16, 1, 0.3, 1) shadow-sm"
          style={{ width: isAnimated ? `${progressPercent}%` : '0%' }}
        >
          {/* Glowing pulse head tip */}
          <div className="absolute right-0 top-0 bottom-0 w-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
