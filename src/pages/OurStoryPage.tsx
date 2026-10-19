import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { SectionTitle } from '../components/common/SectionTitle';
import { GoldButton } from '../components/common/GoldButton';

export const OurStoryPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#E5C982]" />,
      title: t.story.val1Title,
      desc: t.story.val1Desc,
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E5C982]" />,
      title: t.story.val2Title,
      desc: t.story.val2Desc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C982]" />,
      title: t.story.val3Title,
      desc: t.story.val3Desc,
    },
    {
      icon: <Award className="w-6 h-6 text-[#E5C982]" />,
      title: t.story.val4Title,
      desc: t.story.val4Desc,
    },
  ];

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.story.heroKicker}
        title={t.story.heroTitle}
        subtitle={t.story.heroSubtitle}
        breadcrumb={[{ label: t.nav.story }]}
        bgImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Chapter 1: The Genesis (Editorial Alternating Layout) */}
      <section className="py-24 bg-[#141414] border-b border-[#C9A45C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div className="lg:col-span-6">
              <SectionTitle
                kicker={t.story.chapter1Kicker}
                title={t.story.chapter1Title}
                align="left"
              />
              <p className="mt-6 text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {t.story.chapter1P1}
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {t.story.chapter1P2}
              </p>

              {/* Milestones / Stats */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#C9A45C]/20">
                <div>
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-gold-pure font-bold block">12+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] mt-1 block">{t.story.statsYears}</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-gold-pure font-bold block">25K+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] mt-1 block">{t.story.statsClients}</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-gold-pure font-bold block">18</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] mt-1 block">{t.story.statsStylists}</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-gold-pure font-bold block">48</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] mt-1 block">{t.story.statsAwards}</span>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-[#C9A45C]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Noir & Gold Styling Station"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-[#C9A45C]/30 shadow-2xl pt-6">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                  alt="Salon Architecture"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Core Values & Philosophy */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker={t.story.valuesKicker}
            title={t.story.valuesTitle}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#181818] border border-[#C9A45C]/20 rounded-sm hover:border-[#C9A45C]/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: Hygiene & Clinical Sanctuary Standards */}
      <section className="py-24 bg-[#141414] border-t border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border-2 border-[#C9A45C]/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Clinical Hygiene & Sterilization Lounge"
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>
            </div>

            {/* Description & Hygiene Protocols */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#C9A45C]" />
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  Gold Standard Protocols
                </span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F0E7] mb-4">
                {t.story.hygieneTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light mb-8">
                {t.story.hygieneDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#1c1c1c] border-l-2 border-[#C9A45C]">
                  <h4 className="text-xs uppercase tracking-wider text-[#F5F0E7] font-semibold mb-1">
                    Medical Autoclave Sterilization
                  </h4>
                  <p className="text-xs text-[#A7A29A] font-light">
                    Every scissor, cuticle nipper, and precision blade undergoes high-pressure steam sterilization before sealed deployment.
                  </p>
                </div>

                <div className="p-4 bg-[#1c1c1c] border-l-2 border-[#C9A45C]">
                  <h4 className="text-xs uppercase tracking-wider text-[#F5F0E7] font-semibold mb-1">
                    Single-Use Organic Capes
                  </h4>
                  <p className="text-xs text-[#A7A29A] font-light">
                    Individual biodegradable eco-capes and sealed neck collars provided fresh for every patron.
                  </p>
                </div>

                <div className="p-4 bg-[#1c1c1c] border-l-2 border-[#C9A45C]">
                  <h4 className="text-xs uppercase tracking-wider text-[#F5F0E7] font-semibold mb-1">
                    Hospital HEPA Filtration
                  </h4>
                  <p className="text-xs text-[#A7A29A] font-light">
                    Continuous negative ion air recirculation eliminates aerosolized particles and chemical scents entirely.
                  </p>
                </div>

                <div className="p-4 bg-[#1c1c1c] border-l-2 border-[#C9A45C]">
                  <h4 className="text-xs uppercase tracking-wider text-[#F5F0E7] font-semibold mb-1">
                    Certified Organic Formulations
                  </h4>
                  <p className="text-xs text-[#A7A29A] font-light">
                    Strict adherence to EU cosmetic safety directives with zero harmful carcinogens or toxic aldehydes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#101010] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F0E7] mb-4">
            Become Part of the Noir & Gold Legacy
          </h2>
          <p className="text-sm text-[#A7A29A] font-light max-w-xl mx-auto mb-8">
            Experience the harmony of world-class craft and pure relaxation at Ward Place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton to="/booking" size="lg">
              {t.nav.bookAppointment}
            </GoldButton>
            <GoldButton to="/services" variant="outline" size="lg">
              {t.hero.exploreBtn}
            </GoldButton>
          </div>
        </div>
      </section>
    </div>
  );
};
