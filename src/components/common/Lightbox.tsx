import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label={t.gallery.closeLightbox}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#202020]/80 text-[#F5F0E7] hover:text-[#E5C982] hover:bg-[#303030] border border-[#C9A45C]/30 transition-all cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label={t.gallery.prevImage}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181818]/80 text-[#F5F0E7] hover:text-[#E5C982] hover:bg-[#252525] border border-[#C9A45C]/30 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label={t.gallery.nextImage}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181818]/80 text-[#F5F0E7] hover:text-[#E5C982] hover:bg-[#252525] border border-[#C9A45C]/30 transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative max-w-5xl max-h-[90vh] mx-4 flex flex-col items-center">
        <div className="relative overflow-hidden rounded-sm border border-[#C9A45C]/30 shadow-2xl bg-[#101010]">
          <img
            src={currentItem.image}
            alt={currentItem.title[language]}
            className="max-h-[75vh] w-auto object-contain select-none transition-all duration-300"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-xl">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#C9A45C] mb-1">
            <span>{currentItem.categoryLabel[language]}</span>
            <span>•</span>
            <span>
              {currentIndex + 1} {t.gallery.imageCounter} {items.length}
            </span>
          </div>
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5F0E7]">
            {currentItem.title[language]}
          </h3>
          <p className="text-xs sm:text-sm text-[#A7A29A] mt-1 font-light">
            {currentItem.description[language]}
          </p>
          {currentItem.stylistName && (
            <p className="text-xs text-[#E5C982] mt-1 italic">
              Crafted by {currentItem.stylistName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
