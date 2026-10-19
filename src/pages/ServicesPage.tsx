import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock, ArrowUpDown, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { sampleServices } from '../data/salonData';
import type { ServiceCategory } from '../types';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryParam = (searchParams.get('category') as ServiceCategory) || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');

  const categories: { id: string; label: { en: string; si: string } }[] = [
    { id: 'all', label: { en: 'All Services', si: 'සියලු සේවාවන්' } },
    { id: 'haircuts', label: { en: 'Haircuts & Styling', si: 'කොණ්ඩා මෝස්තර' } },
    { id: 'colouring', label: { en: 'Hair Colouring', si: 'වර්ණ ගැන්වීම්' } },
    { id: 'treatments', label: { en: 'Hair Treatments', si: 'හිසකෙස් සත්කාර' } },
    { id: 'grooming', label: { en: 'Beard & Grooming', si: 'පිරිමි සත්කාර' } },
    { id: 'skincare', label: { en: 'Facial & Skincare', si: 'සමේ සත්කාර' } },
    { id: 'bridal', label: { en: 'Bridal & Party', si: 'මනාලියන් හැඩගැන්වීම' } },
    { id: 'nails', label: { en: 'Mani & Pedi', si: 'අත් හා පාද සත්කාර' } },
    { id: 'spa', label: { en: 'Spa & Relaxation', si: 'ස්පා සත්කාර' } },
  ];

  // Filter & Sort Logic
  const filteredServices = useMemo(() => {
    let result = [...sampleServices];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(s => s.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(s => 
        s.name.en.toLowerCase().includes(q) ||
        s.name.si.toLowerCase().includes(q) ||
        s.shortDesc.en.toLowerCase().includes(q) ||
        s.shortDesc.si.toLowerCase().includes(q) ||
        s.categoryName.en.toLowerCase().includes(q) ||
        s.categoryName.si.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceLKR - b.priceLKR);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceLKR - a.priceLKR);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else {
      // featured
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Page Header */}
      <PageHeader
        kicker={t.services.heroKicker}
        title={t.services.heroTitle}
        subtitle={t.services.heroSubtitle}
        breadcrumb={[{ label: t.nav.services }]}
        bgImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls Bar: Search & Sorting */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A45C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.services.searchPlaceholder}
              className="w-full pl-10 pr-10 py-3 bg-[#181818] border border-[#C9A45C]/30 text-xs sm:text-sm text-[#F5F0E7] placeholder:text-[#A7A29A]/60 focus:outline-none focus:border-[#E5C982] rounded-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A7A29A] hover:text-[#E5C982]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#C9A45C]" />
            <span className="text-xs uppercase tracking-wider text-[#A7A29A] hidden sm:inline">
              {t.services.sortBy}:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#181818] border border-[#C9A45C]/30 text-xs text-[#F5F0E7] py-3 px-4 focus:outline-none focus:border-[#E5C982] rounded-none cursor-pointer"
            >
              <option value="featured">{t.services.sortFeatured}</option>
              <option value="price-asc">{t.services.sortPriceAsc}</option>
              <option value="price-desc">{t.services.sortPriceDesc}</option>
              <option value="duration">{t.services.sortDuration}</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#C9A45C]/20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2.5 text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#E5C982] to-[#C9A45C] text-[#101010] font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.3)]'
                  : 'bg-[#181818] text-[#A7A29A] border-[#C9A45C]/20 hover:text-[#F5F0E7] hover:border-[#C9A45C]/60'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Results Count & Active Category indicator */}
        <div className="flex items-center justify-between text-xs text-[#A7A29A] mb-8">
          <span>
            Showing <strong className="text-[#E5C982]">{filteredServices.length}</strong> rituals
          </span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="text-[#C9A45C] hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t.services.clearFilters}</span>
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-[#181818] border border-[#C9A45C]/20 hover:border-[#C9A45C]/70 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_10px_35px_rgba(201,164,92,0.18)] hover:-translate-y-1.5"
              >
                <div>
                  {/* Service Image with subtle zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                    <img
                      src={service.image}
                      alt={service.name[language]}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C9A45C]/40 text-[10px] uppercase tracking-wider text-[#E5C982]">
                      {service.categoryName[language]}
                    </span>

                    {service.popular && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#C9A45C] text-[#101010] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#A7A29A] mb-2 font-light">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{service.durationMinutes} {t.services.mins}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] group-hover:text-[#E5C982] transition-colors leading-snug">
                      {service.name[language]}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light line-clamp-3">
                      {service.shortDesc[language]}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] block">
                        {t.services.startingFrom}
                      </span>
                      <span className="font-serif-luxury text-xl text-gold-pure font-bold">
                        {t.services.lkr} {service.priceLKR.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="px-4 py-2.5 text-center text-xs uppercase tracking-wider border border-[#C9A45C]/40 text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] hover:bg-white/5 transition-colors"
                    >
                      {t.services.viewDetails}
                    </Link>

                    <GoldButton
                      to={`/booking?service=${service.id}`}
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
        ) : (
          /* Empty Search / Filter State */
          <div className="py-20 text-center bg-[#181818] border border-[#C9A45C]/20 rounded-sm p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full border border-[#C9A45C]/40 bg-[#202020] flex items-center justify-center text-[#C9A45C] mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl text-[#F5F0E7]">
              {t.services.noServicesFound}
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A29A] mt-2 mb-6 font-light">
              {t.services.noServicesDesc}
            </p>
            <GoldButton onClick={handleClearFilters} size="sm">
              {t.services.clearFilters}
            </GoldButton>
          </div>
        )}
      </div>
    </div>
  );
};
