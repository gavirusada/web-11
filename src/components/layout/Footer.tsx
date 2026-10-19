import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { salonInfo } from '../../data/salonData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0b0b0b] text-[#A7A29A] border-t border-[#C9A45C]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#C9A45C]/15">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-full border border-[#C9A45C] bg-[#181818] flex items-center justify-center shadow-[0_0_15px_rgba(201,164,92,0.2)]">
                  <span className="font-serif-luxury text-lg text-gold-pure font-bold">N&G</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-2xl tracking-[0.2em] text-[#F5F0E7] uppercase font-light">
                    Noir & Gold
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A45C] font-semibold">
                    Haute Coiffure • Colombo 07
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm leading-relaxed text-[#A7A29A] font-light max-w-sm mt-3">
                {t.footer.desc}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={salonInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#181818] border border-[#C9A45C]/30 flex items-center justify-center text-[#F5F0E7] hover:text-[#E5C982] hover:border-[#E5C982] hover:bg-[#222222] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={salonInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#181818] border border-[#C9A45C]/30 flex items-center justify-center text-[#F5F0E7] hover:text-[#E5C982] hover:border-[#E5C982] hover:bg-[#222222] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href={salonInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#181818] border border-[#C9A45C]/30 flex items-center justify-center text-[#F5F0E7] hover:text-[#E5C982] hover:border-[#E5C982] hover:bg-[#222222] transition-colors"
              >
                <span className="text-xs font-bold text-[#C9A45C]">WA</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-luxury text-base text-[#F5F0E7] tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C9A45C]" />
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link to="/" className="hover:text-[#E5C982] transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors">{t.nav.services}</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#E5C982] transition-colors">{t.nav.story}</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E5C982] transition-colors">{t.nav.gallery}</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#E5C982] transition-colors">{t.nav.team}</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-[#E5C982] transition-colors">{t.nav.offers}</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#E5C982] transition-colors">{t.nav.faq}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E5C982] transition-colors">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-luxury text-base text-[#F5F0E7] tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C9A45C]" />
              {t.footer.popularServices}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A7A29A]">
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  Couture Precision Haircut
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  French Dimensional Balayage
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  Tokyo Scalp Hydrotherapy Head Spa
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  24K Imperial Gold Facial
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  Royal Hot Towel Straight-Razor Shave
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C982] transition-colors block">
                  Haute Couture Bridal Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Sanctuary Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-luxury text-base text-[#F5F0E7] tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C9A45C]" />
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#A7A29A] leading-relaxed mb-4">
              {t.footer.newsletterDesc}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                required
                className="w-full bg-[#181818] border border-[#C9A45C]/30 rounded-none px-3.5 py-2.5 text-xs text-[#F5F0E7] placeholder:text-[#A7A29A]/50 focus:outline-none focus:border-[#E5C982] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 px-3 bg-[#C9A45C] text-[#101010] hover:bg-[#E5C982] transition-colors flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {isSubscribed && (
              <div className="flex items-center gap-2 text-xs text-[#E5C982] bg-[#202020] p-2 border border-[#C9A45C]/40 mb-4 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.footer.subscribedSuccess}</span>
              </div>
            )}

            {/* Hours summary */}
            <div className="space-y-1.5 text-xs text-[#A7A29A]">
              <div className="flex items-center gap-2 text-[#F5F0E7]">
                <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="font-medium">{t.footer.hours}:</span>
              </div>
              <p className="pl-5 text-[11px]">{t.footer.monSat}</p>
              <p className="pl-5 text-[11px]">{t.footer.sun}</p>
            </div>
          </div>
        </div>

        {/* Contact info quick ribbon */}
        <div className="py-6 border-b border-[#C9A45C]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>{salonInfo.address}</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center">
            <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <a href={`tel:${salonInfo.phoneRaw}`} className="hover:text-[#E5C982]">
              {salonInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <a href={`mailto:${salonInfo.email}`} className="hover:text-[#E5C982]">
              {salonInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A7A29A]/70">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="text-[#C9A45C]">{t.footer.unisexBadge}</span>
            <Link to="/contact" className="hover:text-[#E5C982]">{t.footer.privacy}</Link>
            <Link to="/contact" className="hover:text-[#E5C982]">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
