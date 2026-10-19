import React from 'react';
import { X, Star, Calendar, Award } from 'lucide-react';
import type { Stylist } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { GoldButton } from './GoldButton';

interface StylistModalProps {
  stylist: Stylist | null;
  onClose: () => void;
  onBook: (stylistId: string) => void;
}

export const StylistModal: React.FC<StylistModalProps> = ({
  stylist,
  onClose,
  onBook,
}) => {
  const { language, t } = useLanguage();

  if (!stylist) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181818] border border-[#C9A45C]/30 shadow-2xl p-6 sm:p-8 rounded-sm animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={t.team.modalClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#202020] text-[#A7A29A] hover:text-[#E5C982] border border-[#C9A45C]/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Stylist Portrait */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-[#C9A45C]/40 shadow-xl">
              <img
                src={stylist.image}
                alt={stylist.name}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="flex items-center gap-1.5 text-xs text-[#E5C982] font-semibold">
                  <Star className="w-4 h-4 fill-[#E5C982]" />
                  <span>{stylist.rating}</span>
                  <span className="text-[#A7A29A] font-light">({stylist.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="w-full mt-4 p-3 bg-[#202020] border border-[#C9A45C]/20 rounded-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#A7A29A]">{t.team.experience}:</span>
                <span className="text-[#E5C982] font-semibold">{stylist.experienceYears} Years</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-4 h-[1px] bg-[#C9A45C]" />
                <span className="text-xs uppercase tracking-widest text-[#C9A45C]">
                  Noir & Gold Senior Artisan
                </span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F0E7]">
                {stylist.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#E5C982] tracking-wider uppercase mt-1 mb-4 font-medium">
                {stylist.title[language]}
              </p>

              <div className="h-[1px] w-full bg-[#C9A45C]/20 mb-4" />

              <p className="text-sm text-[#A7A29A] leading-relaxed font-light mb-6">
                {stylist.bio[language]}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                  {t.team.specialties}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stylist.specialties[language].map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#202020] border border-[#C9A45C]/30 text-xs text-[#F5F0E7] tracking-wider rounded-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample portfolio miniatures */}
              {stylist.portfolioImages && stylist.portfolioImages.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-[#A7A29A] mb-2.5">
                    Selected Works
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {stylist.portfolioImages.map((img, i) => (
                      <div key={i} className="aspect-square overflow-hidden rounded-sm border border-[#C9A45C]/20">
                        <img
                          src={img}
                          alt="Portfolio work"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row gap-3">
              <GoldButton
                variant="primary"
                className="w-full"
                onClick={() => onBook(stylist.id)}
                icon={<Calendar className="w-4 h-4" />}
              >
                {t.team.bookWith} {stylist.name}
              </GoldButton>
              <GoldButton
                variant="outline"
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                {t.team.modalClose}
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
