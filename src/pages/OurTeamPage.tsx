import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Calendar, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { StylistModal } from '../components/common/StylistModal';
import { sampleStylists } from '../data/salonData';
import type { Stylist } from '../types';

export const OurTeamPage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [activeStylist, setActiveStylist] = useState<Stylist | null>(null);

  const filters = [
    { id: 'all', label: t.team.filterAll },
    { id: 'hair', label: 'Couture Hair & Cuts' },
    { id: 'colour', label: 'Balayage & Colour' },
    { id: 'grooming', label: 'Barbering & Beard' },
    { id: 'bridal', label: 'Bridal & Aesthetics' },
  ];

  const filteredStylists = useMemo(() => {
    if (selectedSpecialty === 'all') return sampleStylists;
    return sampleStylists.filter(stylist => {
      const allSpecs = stylist.specialties.en.join(' ').toLowerCase();
      if (selectedSpecialty === 'hair') return allSpecs.includes('cut') || allSpecs.includes('keratin');
      if (selectedSpecialty === 'colour') return allSpecs.includes('colour') || allSpecs.includes('balayage') || allSpecs.includes('blonde');
      if (selectedSpecialty === 'grooming') return allSpecs.includes('fade') || allSpecs.includes('razor') || allSpecs.includes('beard') || allSpecs.includes('grooming');
      if (selectedSpecialty === 'bridal') return allSpecs.includes('bridal') || allSpecs.includes('facial') || allSpecs.includes('makeup');
      return true;
    });
  }, [selectedSpecialty]);

  const handleBookWithStylist = (stylistId: string) => {
    setActiveStylist(null);
    navigate(`/booking?stylist=${stylistId}`);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.team.heroKicker}
        title={t.team.heroTitle}
        subtitle={t.team.heroSubtitle}
        breadcrumb={[{ label: t.nav.team }]}
        bgImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Specialty Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedSpecialty(f.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                selectedSpecialty === f.id
                  ? 'bg-gradient-to-r from-[#E5C982] to-[#C9A45C] text-[#101010] font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.3)]'
                  : 'bg-[#181818] text-[#A7A29A] border-[#C9A45C]/20 hover:text-[#F5F0E7] hover:border-[#C9A45C]/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStylists.map((stylist) => (
            <div
              key={stylist.id}
              className="group bg-[#181818] border border-[#C9A45C]/25 hover:border-[#C9A45C]/70 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_10px_35px_rgba(201,164,92,0.18)] hover:-translate-y-1.5"
            >
              <div>
                {/* Stylist Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/60">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C9A45C]/40 text-xs text-[#E5C982] flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#E5C982]" />
                    <span>{stylist.rating}</span>
                    <span className="text-[10px] text-[#A7A29A]">({stylist.reviewsCount})</span>
                  </div>

                  {/* Experience Ribbon */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-[#C9A45C]/40 text-[10px] uppercase tracking-widest text-[#E5C982]">
                    {stylist.experienceYears} Years Master Experience
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-6">
                  <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] group-hover:text-[#E5C982] transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C9A45C] mt-1 mb-3 font-medium">
                    {stylist.title[language]}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light line-clamp-3 mb-6">
                    {stylist.bio[language]}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] block mb-2">
                      {t.team.specialties}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stylist.specialties[language].map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#222222] text-[10px] text-[#F5F0E7]/90 tracking-wider rounded-none border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveStylist(stylist)}
                    className="px-4 py-2.5 text-center text-xs uppercase tracking-wider border border-[#C9A45C]/40 text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Profile</span>
                  </button>

                  <GoldButton
                    to={`/booking?stylist=${stylist.id}`}
                    size="sm"
                    className="w-full text-xs"
                    icon={<Calendar className="w-3.5 h-3.5" />}
                  >
                    Book
                  </GoldButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stylist Modal Detail */}
      <StylistModal
        stylist={activeStylist}
        onClose={() => setActiveStylist(null)}
        onBook={handleBookWithStylist}
      />
    </div>
  );
};
