import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PageHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  breadcrumb,
  bgImage = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80',
}) => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#101010] border-b border-[#C9A45C]/20">
      {/* Background with luxury gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.25] scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,164,92,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A29A] mb-6">
          <Link to="/" className="hover:text-[#E5C982] transition-colors">
            {t.nav.home}
          </Link>
          {breadcrumb?.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-[#C9A45C]/60" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-[#E5C982] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#C9A45C]">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {kicker && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
              {kicker}
            </span>
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
          </div>
        )}

        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F0E7] tracking-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-[#A7A29A] max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
