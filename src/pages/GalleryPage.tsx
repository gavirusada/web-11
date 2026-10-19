import React, { useState, useMemo } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { Lightbox } from '../components/common/Lightbox';
import { sampleGallery } from '../data/salonData';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: t.gallery.catAll },
    { id: 'haircuts', label: t.gallery.catHaircuts },
    { id: 'colour', label: t.gallery.catColour },
    { id: 'styling', label: t.gallery.catStyling },
    { id: 'bridal', label: t.gallery.catBridal },
    { id: 'grooming', label: t.gallery.catGrooming },
    { id: 'interior', label: t.gallery.catInterior },
  ];

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'all') return sampleGallery;
    return sampleGallery.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActivePhotoIndex(prev => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex(prev => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.gallery.heroKicker}
        title={t.gallery.heroTitle}
        subtitle={t.gallery.heroSubtitle}
        breadcrumb={[{ label: t.nav.gallery }]}
        bgImage="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#E5C982] to-[#C9A45C] text-[#101010] font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.3)]'
                  : 'bg-[#181818] text-[#A7A29A] border-[#C9A45C]/20 hover:text-[#F5F0E7] hover:border-[#C9A45C]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative bg-[#181818] border border-[#C9A45C]/25 rounded-sm overflow-hidden aspect-[4/5] cursor-pointer shadow-xl hover:border-[#E5C982] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,164,92,0.2)]"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 group-hover:brightness-100 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C9A45C]/40 text-[10px] uppercase tracking-wider text-[#E5C982]">
                  {item.categoryLabel[language]}
                </span>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/80 border border-[#E5C982] flex items-center justify-center text-[#E5C982] shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5F0E7] group-hover:text-[#E5C982] transition-colors leading-tight">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-[#A7A29A] mt-1.5 line-clamp-2 font-light">
                    {item.description[language]}
                  </p>
                  {item.stylistName && (
                    <span className="inline-block mt-2 text-[11px] text-[#C9A45C] font-normal italic">
                      Artisan: {item.stylistName}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#181818] border border-[#C9A45C]/20 rounded-sm p-8 max-w-md mx-auto">
            <Sparkles className="w-10 h-10 text-[#C9A45C] mx-auto mb-3" />
            <h3 className="font-serif-luxury text-2xl text-[#F5F0E7]">
              {t.states.emptyGallery}
            </h3>
            <p className="text-xs text-[#A7A29A] mt-2 mb-6">
              {t.states.emptySearchTip}
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-5 py-2.5 bg-[#C9A45C] text-black text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              View All Works
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredGallery}
        currentIndex={activePhotoIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
