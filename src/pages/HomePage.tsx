import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronRight, 
  Clock, 
  Star, 
  ShieldCheck, 
  Award, 
  Coffee, 
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionTitle } from '../components/common/SectionTitle';
import { GoldButton } from '../components/common/GoldButton';
import { StylistModal } from '../components/common/StylistModal';
import { 
  sampleServices, 
  sampleStylists, 
  samplePackages, 
  sampleTestimonials, 
  salonInfo 
} from '../data/salonData';
import type { Stylist } from '../types';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  
  // Interactive Before & After transformation slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const featuredServices = sampleServices.filter(s => s.popular).slice(0, 4);

  const handleBookWithStylist = (stylistId: string) => {
    setSelectedStylist(null);
    navigate(`/booking?stylist=${stylistId}`);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Full-width cinematic salon photograph with dark gold overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
            alt="Noir and Gold Luxury Salon Experience"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,92,0.18)_0%,_transparent_75%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center py-20">
          {/* Small premium label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A45C]/40 bg-[#181818]/80 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_15px_rgba(201,164,92,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C982]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E5C982] font-semibold">
              {t.hero.badge}
            </span>
          </div>

          {/* Large heading */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F0E7] leading-[1.08] uppercase max-w-4xl">
            {t.hero.headingMain}{' '}
            <span className="text-gold-gradient italic block mt-1">
              {t.hero.headingSub}
            </span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#A7A29A] font-light max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <GoldButton
              to="/booking"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
              icon={<Calendar className="w-4 h-4" />}
            >
              {t.hero.bookBtn}
            </GoldButton>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5F0E7] hover:text-[#E5C982] transition-colors py-3 px-4 border-b border-transparent hover:border-[#E5C982]"
            >
              <span>{t.hero.exploreBtn}</span>
              <ChevronRight className="w-4 h-4 text-[#C9A45C]" />
            </Link>
          </div>

          {/* VIP Label / Badge */}
          <div className="mt-12 flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A45C]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-ping" />
            <span>{t.hero.experienceLabel}</span>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#A7A29A]">
          <span>{t.hero.scrollDown}</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A45C] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BRAND INTRODUCTION & PHILOSOPHY                           */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#141414] border-t border-b border-[#C9A45C]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Image Grid */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-[#C9A45C]/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                    alt="Noir & Gold Master Hair Styling"
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Overlapping decorative image card */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 aspect-square overflow-hidden rounded-sm border-2 border-[#C9A45C] shadow-2xl hidden sm:block bg-[#181818]">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                    alt="Men's Luxury Grooming"
                    className="w-full h-full object-cover filter brightness-90"
                  />
                </div>
                {/* Floating experience badge */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#181818]/95 backdrop-blur-md border border-[#C9A45C] p-4 rounded-sm shadow-xl">
                  <span className="font-serif-luxury text-3xl font-bold text-gold-pure block">12+</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A29A]">Years of Distinction</span>
                </div>
              </div>
            </div>

            {/* Editorial Story Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <SectionTitle
                kicker={t.home.introKicker}
                title={t.home.introTitle}
                align="left"
              />
              <p className="mt-6 text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {t.home.introDesc1}
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {t.home.introDesc2}
              </p>

              {/* Statistics row */}
              <div className="mt-8 grid grid-cols-3 gap-6 w-full py-6 border-t border-b border-[#C9A45C]/20">
                <div>
                  <span className="font-serif-luxury text-2xl sm:text-3xl text-gold-pure font-bold">25,000+</span>
                  <span className="block text-[11px] uppercase tracking-wider text-[#A7A29A] mt-1">Patrons Served</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-2xl sm:text-3xl text-gold-pure font-bold">18</span>
                  <span className="block text-[11px] uppercase tracking-wider text-[#A7A29A] mt-1">Master Artisans</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-2xl sm:text-3xl text-gold-pure font-bold">48</span>
                  <span className="block text-[11px] uppercase tracking-wider text-[#A7A29A] mt-1">Global Accolades</span>
                </div>
              </div>

              <div className="mt-8">
                <GoldButton to="/story" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                  {t.home.learnMore}
                </GoldButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED SERVICES CARDS                                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              kicker={t.home.featuredKicker}
              title={t.home.featuredTitle}
              subtitle={t.home.featuredSubtitle}
              align="left"
            />
            <GoldButton to="/services" variant="outline" size="sm" icon={<ChevronRight className="w-3.5 h-3.5" />}>
              {t.home.viewAllServices}
            </GoldButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#181818] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(201,164,92,0.15)] hover:-translate-y-1.5"
              >
                <div>
                  {/* Service Image with zoom effect */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={service.image}
                      alt={service.name[language]}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-[#C9A45C]/40 text-[10px] uppercase tracking-wider text-[#E5C982]">
                      {service.categoryName[language]}
                    </span>
                  </div>

                  {/* Service info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-[#A7A29A] mb-2 font-light">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{service.durationMinutes} {t.services.mins}</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl text-[#F5F0E7] group-hover:text-[#E5C982] transition-colors leading-snug">
                      {service.name[language]}
                    </h3>

                    <p className="mt-2.5 text-xs text-[#A7A29A] leading-relaxed font-light line-clamp-2">
                      {service.shortDesc[language]}
                    </p>
                  </div>
                </div>

                {/* Card footer: price and actions */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] block">
                        {t.services.startingFrom}
                      </span>
                      <span className="font-serif-luxury text-lg text-gold-pure font-bold">
                        {t.services.lkr} {service.priceLKR.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-3 py-2 text-center text-[11px] uppercase tracking-wider border border-[#C9A45C]/30 text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] transition-colors"
                    >
                      {t.services.viewDetails}
                    </Link>
                    <GoldButton
                      to={`/booking?service=${service.id}`}
                      size="sm"
                      className="w-full text-[11px]"
                    >
                      {t.services.bookNow}
                    </GoldButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHY CHOOSE US (THE NOIR & GOLD STANDARD)                  */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#141414] border-t border-b border-[#C9A45C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker={t.home.whyKicker}
            title={t.home.whyTitle}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1c1c1c] p-8 border border-[#C9A45C]/20 rounded-sm hover:border-[#C9A45C]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center mb-6 text-[#E5C982]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#F5F0E7] mb-3">
                {t.home.why1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                {t.home.why1Desc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1c1c1c] p-8 border border-[#C9A45C]/20 rounded-sm hover:border-[#C9A45C]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center mb-6 text-[#E5C982]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#F5F0E7] mb-3">
                {t.home.why2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                {t.home.why2Desc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1c1c1c] p-8 border border-[#C9A45C]/20 rounded-sm hover:border-[#C9A45C]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center mb-6 text-[#E5C982]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#F5F0E7] mb-3">
                {t.home.why3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                {t.home.why3Desc}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1c1c1c] p-8 border border-[#C9A45C]/20 rounded-sm hover:border-[#C9A45C]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] bg-[#222222] flex items-center justify-center mb-6 text-[#E5C982]">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#F5F0E7] mb-3">
                {t.home.why4Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                {t.home.why4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. THE SALON EXPERIENCE & ATMOSPHERE                         */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 bg-[#101010] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionTitle
                kicker={t.home.experienceKicker}
                title={t.home.experienceTitle}
                align="left"
              />
              <p className="mt-6 text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {t.home.experienceDesc}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#C9A45C]/20 text-[#E5C982] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F5F0E7] font-light">
                    {t.home.experienceBullet1}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#C9A45C]/20 text-[#E5C982] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F5F0E7] font-light">
                    {t.home.experienceBullet2}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#C9A45C]/20 text-[#E5C982] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F5F0E7] font-light">
                    {t.home.experienceBullet3}
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <GoldButton to="/booking" size="md">
                  {t.hero.bookBtn}
                </GoldButton>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-[#C9A45C]/25 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm border border-[#C9A45C]/25 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                    alt="Head Spa Hydrotherapy Basin"
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-sm border border-[#C9A45C]/25 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
                    alt="24K Gold Facial Treatment"
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-[#C9A45C]/25 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80"
                    alt="Manicure & Pedicure Suite"
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BEFORE-AND-AFTER STYLE GALLERY INTERACTIVE SLIDER         */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#141414] border-t border-b border-[#C9A45C]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker={t.home.transformKicker}
            title={t.home.transformTitle}
            subtitle={t.home.transformSubtitle}
            className="mb-14"
          />

          {/* Interactive Before/After Comparison Card */}
          <div className="relative max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-sm border-2 border-[#C9A45C]/40 shadow-2xl select-none group">
            {/* After Image (Full width background) */}
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
              alt="After Noir & Gold Balayage Transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-[#101010]/90 backdrop-blur-md border border-[#E5C982] text-xs uppercase tracking-widest text-[#E5C982] font-semibold">
              {t.home.afterLabel}
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
                alt="Before Hair State"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#F5F0E7]">
                {t.home.beforeLabel}
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#E5C982] cursor-ew-resize shadow-[0_0_15px_#E5C982]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central drag handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#181818] border-2 border-[#E5C982] flex items-center justify-center text-[#E5C982] shadow-2xl">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Range input overlay for smooth touch and drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Drag to compare before and after transformation"
            />
          </div>

          <p className="text-center text-xs text-[#A7A29A] mt-4 uppercase tracking-wider">
            Drag the handle horizontally to reveal the before and after transition
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. MEET OUR STYLISTS PREVIEW                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              kicker={t.home.teamKicker}
              title={t.home.teamTitle}
              subtitle={t.home.teamSubtitle}
              align="left"
            />
            <GoldButton to="/team" variant="outline" size="sm" icon={<ChevronRight className="w-3.5 h-3.5" />}>
              {t.home.viewTeam}
            </GoldButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleStylists.slice(0, 3).map((stylist) => (
              <div
                key={stylist.id}
                className="group relative bg-[#181818] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 rounded-sm overflow-hidden transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                  
                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#C9A45C]/40 text-xs text-[#E5C982] flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#E5C982]" />
                    <span>{stylist.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block mb-1">
                    {stylist.experienceYears} Years Master Craft
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] group-hover:text-[#E5C982] transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs text-[#A7A29A] mt-1 mb-4 uppercase tracking-wider font-light">
                    {stylist.title[language]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {stylist.specialties[language].slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#202020] text-[10px] text-[#A7A29A] tracking-wider rounded-none border border-white/5"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedStylist(stylist)}
                      className="px-3 py-2 text-center text-xs uppercase tracking-wider border border-[#C9A45C]/30 text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] transition-colors cursor-pointer"
                    >
                      {t.team.viewProfile}
                    </button>
                    <GoldButton
                      to={`/booking?stylist=${stylist.id}`}
                      size="sm"
                      className="w-full text-xs"
                    >
                      {t.services.bookNow}
                    </GoldButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CLIENT TESTIMONIALS                                       */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#141414] border-t border-b border-[#C9A45C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker={t.home.testiKicker}
            title={t.home.testiTitle}
            subtitle={t.home.testiSubtitle}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#1c1c1c] p-8 rounded-sm border border-[#C9A45C]/20 flex flex-col justify-between relative shadow-lg"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#E5C982] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5C982]" />
                    ))}
                  </div>

                  <p className="font-serif-luxury text-base sm:text-lg text-[#F5F0E7] italic leading-relaxed mb-6">
                    "{item.review[language]}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C9A45C]/15 flex items-center gap-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.clientName}
                      className="w-10 h-10 rounded-full object-cover border border-[#C9A45C]/40"
                    />
                  )}
                  <div>
                    <h4 className="text-xs font-semibold text-[#F5F0E7] uppercase tracking-wider">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-[#C9A45C] font-light">
                      {item.clientRole[language]}
                    </p>
                    <span className="text-[10px] text-[#A7A29A]/70 block mt-0.5">
                      {item.serviceName[language]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SPECIAL OFFERS & PACKAGES HIGHLIGHT                       */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              kicker={t.home.offersKicker}
              title={t.home.offersTitle}
              subtitle={t.home.offersSubtitle}
              align="left"
            />
            <GoldButton to="/offers" variant="outline" size="sm" icon={<ChevronRight className="w-3.5 h-3.5" />}>
              {t.home.viewOffers}
            </GoldButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {samplePackages.slice(0, 2).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#181818] border border-[#C9A45C]/30 rounded-sm overflow-hidden flex flex-col sm:flex-row shadow-xl hover:border-[#C9A45C]/70 transition-all duration-300"
              >
                <div className="sm:w-2/5 relative min-h-[200px]">
                  <img
                    src={pkg.image}
                    alt={pkg.name[language]}
                    className="w-full h-full object-cover filter brightness-90"
                  />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#101010]/90 border border-[#E5C982] text-[10px] uppercase tracking-widest text-[#E5C982]">
                      {pkg.badge[language]}
                    </span>
                  )}
                </div>

                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#A7A29A] mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{pkg.durationMinutes} {t.services.mins}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl text-[#F5F0E7]">
                      {pkg.name[language]}
                    </h3>
                    <p className="text-xs text-[#A7A29A] mt-1 mb-4 font-light leading-relaxed">
                      {pkg.tagline[language]}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {pkg.includedServices[language].slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#F5F0E7]/90 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#A7A29A] line-through block">
                        LKR {pkg.regularPriceLKR.toLocaleString()}
                      </span>
                      <span className="font-serif-luxury text-xl text-gold-pure font-bold">
                        LKR {pkg.promoPriceLKR.toLocaleString()}
                      </span>
                    </div>

                    <GoldButton to={`/booking?package=${pkg.id}`} size="sm">
                      {t.offers.bookPackageBtn}
                    </GoldButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. APPOINTMENT VIP CTA BANNER                               */}
      {/* ============================================================ */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#181818] via-[#201d18] to-[#181818] border-t border-b border-[#C9A45C]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-[#C9A45C] flex items-center justify-center text-[#E5C982] mb-6">
            <Flame className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-3">
            {t.home.ctaKicker}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F5F0E7] max-w-3xl leading-tight">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A7A29A] font-light max-w-xl leading-relaxed">
            {t.home.ctaDesc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <GoldButton to="/booking" size="lg" icon={<Calendar className="w-4 h-4" />}>
              {t.home.ctaBook}
            </GoldButton>
            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="px-8 py-4 text-xs uppercase tracking-widest font-semibold border border-[#C9A45C]/50 text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] transition-colors"
            >
              {t.home.ctaCall} ({salonInfo.phone})
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. LOCATION AND OPENING HOURS                               */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info details */}
            <div className="lg:col-span-5">
              <SectionTitle
                kicker={t.home.hoursKicker}
                title={t.home.hoursTitle}
                subtitle={t.home.hoursDesc}
                align="left"
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#181818] border border-[#C9A45C]/20 rounded-sm">
                  <MapPin className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                      {t.contact.addressTitle}
                    </h4>
                    <p className="text-xs text-[#A7A29A] mt-1 font-light leading-relaxed">
                      {salonInfo.address}
                    </p>
                    <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-[#E5C982]">
                      {t.contact.valetAvailable}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#181818] border border-[#C9A45C]/20 rounded-sm">
                  <Clock className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                      {t.contact.hoursTitle}
                    </h4>
                    <p className="text-xs text-[#A7A29A] mt-1 font-light">
                      {salonInfo.openingHours.weekdays}
                    </p>
                    <p className="text-xs text-[#A7A29A] font-light">
                      {salonInfo.openingHours.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#181818] border border-[#C9A45C]/20 rounded-sm">
                  <Phone className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                      {t.contact.phoneTitle}
                    </h4>
                    <a href={`tel:${salonInfo.phoneRaw}`} className="text-xs text-[#E5C982] hover:underline mt-1 block">
                      {salonInfo.phone}
                    </a>
                    <a href={salonInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-xs text-[#A7A29A] hover:text-[#E5C982] mt-0.5 block">
                      WhatsApp: {salonInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Luxury Map Placeholder / Preview UI */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] bg-[#181818] border border-[#C9A45C]/30 rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between p-8">
                {/* Visual map stylized background */}
                <div 
                  className="absolute inset-0 opacity-40 bg-cover bg-center filter contrast-125"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80")`
                  }}
                />
                <div className="absolute inset-0 bg-[#141414]/85 backdrop-blur-[2px]" />

                {/* Map graphic overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-[#C9A45C]/40 text-xs text-[#E5C982]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.contact.openNow}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A29A]">
                    Colombo 07 • Cinnamon Gardens
                  </span>
                </div>

                {/* Pin in center */}
                <div className="relative z-10 self-center flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#181818] border-2 border-[#E5C982] flex items-center justify-center text-[#E5C982] shadow-[0_0_25px_rgba(201,164,92,0.4)] animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="mt-3 bg-black/90 border border-[#C9A45C] px-4 py-2 rounded-sm shadow-xl">
                    <span className="font-serif-luxury text-base text-[#F5F0E7] block font-semibold">
                      NOIR & GOLD SALON
                    </span>
                    <span className="text-[10px] text-[#A7A29A] uppercase tracking-wider">
                      75 Ward Place, Colombo 07
                    </span>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="relative z-10 flex items-center justify-between text-xs pt-4 border-t border-[#C9A45C]/20">
                  <span className="text-[#A7A29A]">6.9147° N, 79.8732° E</span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E5C982] hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px]"
                  >
                    <span>{t.contact.mapDirections}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylist profile modal */}
      <StylistModal
        stylist={selectedStylist}
        onClose={() => setSelectedStylist(null)}
        onBook={handleBookWithStylist}
      />
    </div>
  );
};
