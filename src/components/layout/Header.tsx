import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { GoldButton } from '../common/GoldButton';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.story, path: '/story' },
    { label: t.nav.gallery, path: '/gallery' },
    { label: t.nav.team, path: '/team' },
    { label: t.nav.offers, path: '/offers' },
    { label: t.nav.faq, path: '/faq' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C9A45C] bg-[#181818] flex items-center justify-center shadow-[0_0_15px_rgba(201,164,92,0.2)] group-hover:border-[#E5C982] transition-colors">
                <span className="font-serif-luxury text-base sm:text-lg text-gold-pure font-bold tracking-tighter">
                  N&G
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg sm:text-xl md:text-2xl tracking-[0.18em] text-[#F5F0E7] uppercase font-light leading-none group-hover:text-[#E5C982] transition-colors">
                  Noir & Gold
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A45C] font-medium leading-tight mt-0.5">
                  Haute Salon • Colombo
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1 ${
                    isActive(link.path)
                      ? 'text-[#E5C982] font-semibold'
                      : 'text-[#F5F0E7]/80 hover:text-[#E5C982]'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side: Language switcher + Appointment CTA */}
            <div className="hidden sm:flex items-center gap-3 md:gap-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                aria-label="Switch Language"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C9A45C]/40 bg-[#181818]/80 text-[#F5F0E7] text-xs uppercase tracking-wider hover:border-[#E5C982] hover:text-[#E5C982] hover:bg-[#202020] transition-all cursor-pointer"
                title={language === 'en' ? 'සිංහල භාෂාවට මාරු වන්න' : 'Switch to English'}
              >
                <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="font-medium">{t.nav.switchLang}</span>
              </button>

              {/* Appointment CTA */}
              <GoldButton
                to="/booking"
                size="sm"
                icon={<Calendar className="w-3.5 h-3.5" />}
              >
                {t.nav.bookAppointment}
              </GoldButton>
            </div>

            {/* Mobile Actions: Language toggle + Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1 text-xs border border-[#C9A45C]/40 rounded-full text-[#F5F0E7] bg-[#181818]"
              >
                {language === 'en' ? 'සිං' : 'EN'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
                className="p-2 text-[#F5F0E7] hover:text-[#E5C982] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#C9A45C]/20">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#C9A45C] bg-[#181818] flex items-center justify-center">
                  <span className="font-serif-luxury text-sm text-[#E5C982] font-bold">N&G</span>
                </div>
                <span className="font-serif-luxury text-xl tracking-widest text-[#F5F0E7] uppercase">
                  Noir & Gold
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F5F0E7] hover:text-[#E5C982]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg uppercase tracking-[0.2em] font-light py-2 border-b border-white/5 transition-colors ${
                    isActive(link.path)
                      ? 'text-[#E5C982] font-normal pl-2 border-l-2 border-[#C9A45C]'
                      : 'text-[#F5F0E7]/80 hover:text-[#E5C982]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#C9A45C]/20 flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#A7A29A]">Language / භාෂාව</span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A45C]/50 text-xs text-[#E5C982]"
              >
                <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{t.nav.switchLang}</span>
              </button>
            </div>

            <GoldButton
              to="/booking"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
              icon={<Sparkles className="w-4 h-4" />}
            >
              {t.nav.bookAppointment}
            </GoldButton>

            <p className="text-[11px] text-center text-[#A7A29A] tracking-wider">
              75 Ward Place, Colombo 07 • +94 11 268 8900
            </p>
          </div>
        </div>
      )}
    </>
  );
};
