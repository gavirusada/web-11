import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { salonInfo, sampleFAQs } from '../data/salonData';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: 'haircut',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.message.trim()) errs.message = 'Please provide your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceInterest: 'haircut',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.contact.heroKicker}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroSubtitle}
        breadcrumb={[{ label: t.nav.contact }]}
        bgImage="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Contact Cards, Hours, Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sanctuary Address Card */}
            <div className="p-6 bg-[#181818] border border-[#C9A45C]/30 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#202020] border border-[#C9A45C]/40 text-[#E5C982] rounded-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A7A29A] mt-1 font-light leading-relaxed">
                    {salonInfo.address}
                  </p>
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-[#E5C982]">
                    {t.contact.valetAvailable}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Telephone */}
            <div className="p-6 bg-[#181818] border border-[#C9A45C]/30 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#202020] border border-[#C9A45C]/40 text-[#E5C982] rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                    {t.contact.phoneTitle}
                  </h4>
                  <a
                    href={`tel:${salonInfo.phoneRaw}`}
                    className="text-base text-gold-pure font-bold hover:underline mt-1 block"
                  >
                    {salonInfo.phone}
                  </a>
                  <p className="text-xs text-[#A7A29A] font-light mt-0.5">
                    Front Desk & Bridal Concierge
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp VIP Direct */}
            <div className="p-6 bg-[#181818] border border-[#C9A45C]/30 rounded-sm flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#202020] border border-[#C9A45C]/40 text-[#E5C982] rounded-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                    {t.contact.whatsappTitle}
                  </h4>
                  <p className="text-xs text-[#A7A29A] mt-0.5 font-light">
                    Instant appointment booking & consultations
                  </p>
                </div>
              </div>

              <a
                href={salonInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-[#202020] border border-[#25D366]/40 text-emerald-400 hover:bg-emerald-950/30 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t.contact.whatsappCTA}</span>
              </a>
            </div>

            {/* Email Address */}
            <div className="p-6 bg-[#181818] border border-[#C9A45C]/30 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#202020] border border-[#C9A45C]/40 text-[#E5C982] rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#F5F0E7] font-semibold">
                    {t.contact.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${salonInfo.email}`}
                    className="text-xs sm:text-sm text-[#E5C982] hover:underline mt-1 block"
                  >
                    {salonInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Sanctuary Hours */}
            <div className="p-6 bg-[#181818] border border-[#C9A45C]/30 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#202020] border border-[#C9A45C]/40 text-[#E5C982] rounded-sm">
                  <Clock className="w-5 h-5" />
                </div>
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
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form & Embedded Map Preview */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form Card */}
            <div className="p-8 bg-[#181818] border border-[#C9A45C]/30 rounded-sm shadow-2xl">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-1">
                  Private Salon Inquiries
                </span>
                <h3 className="font-serif-luxury text-3xl text-[#F5F0E7]">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A29A] font-light mt-1">
                  {t.contact.formSubtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-[#141414] border border-[#C9A45C]/50 rounded-sm text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#E5C982] flex items-center justify-center text-[#E5C982] mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl text-[#F5F0E7] mb-2">
                    {t.contact.formSuccessTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light max-w-md mx-auto mb-6">
                    {t.contact.formSuccessDesc}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 text-xs uppercase tracking-wider border border-[#C9A45C] text-[#E5C982] hover:bg-[#C9A45C]/10 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1">
                        {t.contact.fieldName}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Amanda Perera"
                        className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none ${
                          errors.fullName ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[10px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1">
                        {t.contact.fieldPhone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +94 77 123 4567"
                        className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none ${
                          errors.phone ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1">
                        {t.contact.fieldEmail}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. amanda@example.com"
                        className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none ${
                          errors.email ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1">
                        {t.contact.fieldService}
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#141414] border border-[#C9A45C]/30 text-xs sm:text-sm text-[#F5F0E7] focus:outline-none focus:border-[#E5C982] rounded-none cursor-pointer"
                      >
                        <option value="haircut">Couture Haircut & Styling</option>
                        <option value="balayage">Balayage & Hair Colour</option>
                        <option value="grooming">Executive Beard & Shave</option>
                        <option value="facial">24K Gold Cellular Facial</option>
                        <option value="bridal">Bridal Atelier Consultation</option>
                        <option value="package">Special Offers & Packages</option>
                        <option value="vip">Private VIP Suite Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1">
                      {t.contact.fieldMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us about your preferred date, requirements, or event details..."
                      className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <GoldButton
                      type="submit"
                      disabled={isSubmitting}
                      size="md"
                      className="w-full sm:w-auto"
                      icon={<Send className="w-3.5 h-3.5" />}
                    >
                      {isSubmitting ? t.contact.sending : t.contact.fieldSubmit}
                    </GoldButton>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Map UI Preview */}
            <div className="relative aspect-[16/9] bg-[#181818] border border-[#C9A45C]/30 rounded-sm overflow-hidden flex flex-col justify-between p-6">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center filter contrast-125"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80")`
                }}
              />
              <div className="absolute inset-0 bg-[#141414]/85" />

              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="px-3 py-1 bg-black/80 border border-[#C9A45C]/40 text-[#E5C982]">
                  {t.contact.mapTitle}
                </span>
                <span className="text-[#A7A29A]">Cinnamon Gardens, Colombo 07</span>
              </div>

              <div className="relative z-10 self-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#181818] border-2 border-[#E5C982] flex items-center justify-center text-[#E5C982] mx-auto shadow-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-serif-luxury text-lg text-[#F5F0E7] block mt-2">
                  NOIR & GOLD SALON
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs pt-3 border-t border-white/10">
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

        {/* Quick FAQ section preview */}
        <div className="mt-24 pt-16 border-t border-[#C9A45C]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                Client Advisory
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mt-1">
                {t.contact.quickFAQTitle}
              </h3>
            </div>
            <GoldButton to="/faq" variant="outline" size="sm">
              View All Questions
            </GoldButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleFAQs.slice(0, 4).map((faq) => (
              <div key={faq.id} className="p-6 bg-[#181818] border border-[#C9A45C]/20 rounded-sm">
                <h4 className="font-serif-luxury text-lg text-[#F5F0E7] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C9A45C] shrink-0" />
                  <span>{faq.question[language]}</span>
                </h4>
                <p className="text-xs text-[#A7A29A] leading-relaxed font-light pl-6">
                  {faq.answer[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
