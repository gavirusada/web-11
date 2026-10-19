import React from 'react';
import { Clock, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { samplePackages } from '../data/salonData';

export const OffersPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.offers.heroKicker}
        title={t.offers.heroTitle}
        subtitle={t.offers.heroSubtitle}
        breadcrumb={[{ label: t.nav.offers }]}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro notice banner */}
        <div className="p-4 bg-[#181818] border border-[#C9A45C]/30 rounded-sm mb-12 text-center text-xs text-[#A7A29A] font-light max-w-2xl mx-auto">
          <span className="text-[#E5C982] font-medium mr-1.5">Exclusive Privilege Note:</span>
          {t.offers.validity}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {samplePackages.map((pkg) => {
            const savings = pkg.regularPriceLKR - pkg.promoPriceLKR;
            return (
              <div
                key={pkg.id}
                className="bg-[#181818] border border-[#C9A45C]/30 hover:border-[#E5C982] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={pkg.image}
                      alt={pkg.name[language]}
                      className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

                    {pkg.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-[#E5C982] text-[10px] uppercase tracking-widest text-[#E5C982] font-semibold">
                        {pkg.badge[language]}
                      </span>
                    )}

                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-white/20 text-xs text-[#F5F0E7] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{pkg.durationMinutes} {t.services.mins}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <h3 className="font-serif-luxury text-3xl text-[#F5F0E7]">
                      {pkg.name[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A29A] mt-2 mb-6 font-light leading-relaxed">
                      {pkg.tagline[language]}
                    </p>

                    {/* Included Services */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest text-[#E5C982] font-semibold mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                        {t.offers.includedRituals}:
                      </h4>
                      <div className="space-y-2">
                        {pkg.includedServices[language].map((ritual, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F0E7]/90 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                            <span>{ritual}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Terms & Conditions Accordion / Text */}
                    <div className="p-4 bg-[#141414] border border-[#C9A45C]/20 rounded-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] block mb-1 font-medium">
                        {t.offers.termsTitle}:
                      </span>
                      <ul className="text-xs text-[#A7A29A] font-light space-y-1 list-disc list-inside">
                        {pkg.terms[language].map((term, idx) => (
                          <li key={idx}>{term}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-8 pt-0">
                  <div className="pt-6 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#A7A29A] line-through">
                          LKR {pkg.regularPriceLKR.toLocaleString()}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#E5C982] font-semibold">
                          Save LKR {savings.toLocaleString()}
                        </span>
                      </div>
                      <span className="font-serif-luxury text-3xl text-gold-pure font-bold block mt-0.5">
                        LKR {pkg.promoPriceLKR.toLocaleString()}
                      </span>
                    </div>

                    <GoldButton
                      to={`/booking?package=${pkg.id}`}
                      size="md"
                      className="w-full sm:w-auto"
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      {t.offers.bookPackageBtn}
                    </GoldButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
