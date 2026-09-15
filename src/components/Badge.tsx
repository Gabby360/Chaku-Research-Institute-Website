import React from 'react';

interface BadgeProps {
  label: string;
  tone?: 'light' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, tone = 'light', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
        tone === 'dark'
          ? 'text-[#00d66c]'
          : 'text-[#00a854]'
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === 'dark' ? 'bg-[#00d66c]' : 'bg-[#00a854]'}`} />
      {label}
    </span>
  );
};
export default Badge;
