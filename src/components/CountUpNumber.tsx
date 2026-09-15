import React, { useState, useEffect, useRef } from 'react';

interface CountUpNumberProps {
  value?: number;
  prefix?: string;
  suffix?: string;
  displayText?: string;
  duration?: number;
  className?: string;
  formatWithComma?: boolean;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value = 0,
  prefix = '',
  suffix = '',
  displayText,
  duration = 2000,
  className = '',
  formatWithComma = true,
}) => {
  const [currentVal, setCurrentVal] = useState<number | string>(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Special handler for non-numeric target display string e.g. "$XX"
    if (displayText && (displayText.includes('XX') || isNaN(value) || value === 0)) {
      let interval: NodeJS.Timeout;
      let stepCount = 0;
      const totalSteps = 25;
      
      interval = setInterval(() => {
        stepCount++;
        if (stepCount >= totalSteps) {
          setCurrentVal(displayText);
          clearInterval(interval);
        } else {
          // Scramble random 2-digit number before locking to target display text
          const randomNum = Math.floor(Math.random() * 90) + 10;
          setCurrentVal(`$${randomNum}`);
        }
      }, duration / totalSteps);

      return () => clearInterval(interval);
    }

    // Standard numeric countdown / count-up effect
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out cubic function for smooth slowing down at the end
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const animatedNum = Math.floor(easeOutProgress * value);

      setCurrentVal(animatedNum);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrentVal(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration, displayText]);

  const formattedValue = typeof currentVal === 'number'
    ? (formatWithComma ? currentVal.toLocaleString() : currentVal.toString())
    : currentVal;

  return (
    <span ref={elementRef} className={className}>
      {typeof currentVal === 'string'
        ? currentVal
        : `${prefix}${formattedValue}${suffix}`}
    </span>
  );
};

export default CountUpNumber;
