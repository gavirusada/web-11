import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Scissors } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoldButton } from '../components/common/GoldButton';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-xl w-full text-center p-8 sm:p-12 bg-[#181818] border border-[#C9A45C]/30 rounded-sm shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,164,92,0.1),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center text-[#E5C982] mx-auto mb-6 shadow-xl">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-semibold block mb-2">
            Error 404
          </span>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-[#F5F0E7] mb-3">
            {t.states.notFoundTitle}
          </h1>

          <p className="text-xs sm:text-sm text-[#A7A29A] font-light leading-relaxed max-w-md mx-auto mb-8">
            {t.states.notFoundSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <GoldButton to="/" size="md" icon={<Home className="w-4 h-4" />}>
              {t.states.backHome}
            </GoldButton>
            <GoldButton to="/services" variant="outline" size="md" icon={<Scissors className="w-4 h-4" />}>
              {t.states.exploreServices}
            </GoldButton>
          </div>

          <div className="pt-6 border-t border-[#C9A45C]/20">
            <span className="text-[10px] uppercase tracking-widest text-[#A7A29A] block mb-3">
              Direct Inquiries
            </span>
            <div className="flex items-center justify-center gap-6 text-xs text-[#E5C982]">
              <Link to="/booking" className="hover:underline flex items-center gap-1">
                <span>Book Appointment</span>
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:underline flex items-center gap-1">
                <span>Contact Sanctuary</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
