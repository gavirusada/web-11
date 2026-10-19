import React from 'react';

interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignment} ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#C9A45C]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
            {kicker}
          </span>
          <span className="w-6 h-[1px] bg-[#C9A45C]" />
        </div>
      )}
      <h2
        className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide leading-tight ${
          light ? 'text-[#171717]' : 'text-[#F5F0E7]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            light ? 'text-[#555555]' : 'text-[#A7A29A]'
          } font-light max-w-2xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
