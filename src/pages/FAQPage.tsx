import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, HelpCircle, Phone, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { sampleFAQs, salonInfo } from '../data/salonData';

export const FAQPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const categories = [
    { id: 'all', label: t.faq.tabAll },
    { id: 'booking', label: t.faq.tabBooking },
    { id: 'services', label: t.faq.tabServices },
    { id: 'etiquette', label: t.faq.tabEtiquette },
    { id: 'payment', label: t.faq.tabPayment },
  ];

  const filteredFAQs = useMemo(() => {
    return sampleFAQs.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch = 
        item.question.en.toLowerCase().includes(q) ||
        item.question.si.toLowerCase().includes(q) ||
        item.answer.en.toLowerCase().includes(q) ||
        item.answer.si.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.faq.heroKicker}
        title={t.faq.heroTitle}
        subtitle={t.faq.heroSubtitle}
        breadcrumb={[{ label: t.nav.faq }]}
        bgImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A45C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.faq.searchPlaceholder}
            className="w-full pl-11 pr-10 py-3.5 bg-[#181818] border border-[#C9A45C]/30 text-xs sm:text-sm text-[#F5F0E7] placeholder:text-[#A7A29A]/50 focus:outline-none focus:border-[#E5C982] rounded-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A7A29A] hover:text-[#E5C982]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#E5C982] to-[#C9A45C] text-[#101010] font-semibold border-[#E5C982]'
                  : 'bg-[#181818] text-[#A7A29A] border-[#C9A45C]/20 hover:text-[#F5F0E7] hover:border-[#C9A45C]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions List */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-[#181818] border border-[#C9A45C]/25 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#C9A45C]/60"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-luxury text-lg sm:text-xl text-[#F5F0E7] pr-4 leading-snug">
                      {faq.question[language]}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-[#C9A45C]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#C9A45C] text-black rotate-180' : 'bg-[#141414] text-[#E5C982]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A7A29A] font-light leading-relaxed border-t border-white/5 animate-fade-in">
                      {faq.answer[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#181818] border border-[#C9A45C]/20 rounded-sm p-8">
            <HelpCircle className="w-10 h-10 text-[#C9A45C] mx-auto mb-3" />
            <h3 className="font-serif-luxury text-xl text-[#F5F0E7]">
              No questions found matching your search
            </h3>
            <p className="text-xs text-[#A7A29A] mt-2 mb-6">
              Please contact our front desk concierge directly for bespoke assistance.
            </p>
            <GoldButton onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} size="sm">
              Reset FAQ Search
            </GoldButton>
          </div>
        )}

        {/* Reach Concierge Card */}
        <div className="mt-16 p-8 bg-[#141414] border border-[#C9A45C]/30 rounded-sm text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Personal Concierge Desk
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
            {t.faq.stillHaveQuestions}
          </h3>
          <p className="text-xs sm:text-sm text-[#A7A29A] font-light max-w-lg mx-auto mb-6">
            {t.faq.reachConcierge}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GoldButton to="/contact" size="md">
              {t.faq.contactConciergeBtn}
            </GoldButton>
            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="px-6 py-3 border border-[#C9A45C]/40 text-xs uppercase tracking-wider text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>{salonInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
