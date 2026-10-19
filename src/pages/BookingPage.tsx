import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Check, 
  Clock, 
  User, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Printer,
  CalendarPlus,
  RefreshCw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { sampleServices, sampleStylists } from '../data/salonData';
import type { BookingFormData } from '../types';

export const BookingPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();

  const preselectedService = searchParams.get('service') || '';
  const preselectedStylist = searchParams.get('stylist') || '';

  // Current Step: 1 to 7
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preselectedService || sampleServices[0].id,
    stylistId: preselectedStylist || 'any',
    date: '',
    timeSlot: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [bookingRef, setBookingRef] = useState<string>('');
  const [calendarAdded, setCalendarAdded] = useState<boolean>(false);

  // Generate next 14 days dynamically
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const dayNum = d.getDate();
    return { dateStr, dayName, monthName, dayNum };
  });

  // Default first date
  useEffect(() => {
    if (!formData.date && availableDates.length > 0) {
      setFormData(prev => ({ ...prev, date: availableDates[0].dateStr }));
    }
  }, []);

  const timeSlots = {
    morning: ['09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'],
    afternoon: ['12:30 PM', '01:30 PM', '02:30 PM', '03:30 PM'],
    evening: ['04:30 PM', '05:30 PM', '06:30 PM', '07:00 PM'],
  };

  const selectedServiceObj = sampleServices.find(s => s.id === formData.serviceId) || sampleServices[0];
  const selectedStylistObj = sampleStylists.find(s => s.id === formData.stylistId);

  // Steps definition
  const steps = [
    { num: 1, label: t.booking.step1 },
    { num: 2, label: t.booking.step2 },
    { num: 3, label: t.booking.step3 },
    { num: 4, label: t.booking.step4 },
    { num: 5, label: t.booking.step5 },
    { num: 6, label: t.booking.step6 },
    { num: 7, label: t.booking.step7 },
  ];

  // Validation
  const validateStep5 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t.booking.validationError;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = t.booking.phoneError;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 4 && !formData.timeSlot) {
      // Pick first slot if none selected
      setFormData(prev => ({ ...prev, timeSlot: timeSlots.morning[0] }));
    }

    if (currentStep === 5) {
      if (!validateStep5()) return;
    }

    if (currentStep === 6) {
      // Generate reference code and advance to confirmation
      const randomCode = 'NG-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomCode);
      setCurrentStep(7);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentStep(prev => Math.min(prev + 1, 7));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateCalendar = () => {
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setFormData({
      serviceId: sampleServices[0].id,
      stylistId: 'any',
      date: availableDates[0].dateStr,
      timeSlot: '',
      fullName: '',
      phone: '',
      email: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={t.booking.heroKicker}
        title={t.booking.heroTitle}
        subtitle={t.booking.heroSubtitle}
        breadcrumb={[{ label: t.nav.bookAppointment }]}
        bgImage="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Step Progress Bar (Steps 1 to 6) */}
        {currentStep < 7 && (
          <div className="mb-12">
            {/* Desktop Stepper */}
            <div className="hidden md:flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C9A45C]/20 -translate-y-1/2 z-0" />
              {steps.slice(0, 6).map((s) => {
                const isPassed = currentStep > s.num;
                const isCurrent = currentStep === s.num;
                return (
                  <div key={s.num} className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={() => s.num < currentStep && setCurrentStep(s.num)}
                      disabled={s.num > currentStep}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                        isPassed
                          ? 'bg-[#C9A45C] text-[#101010] shadow-[0_0_10px_rgba(201,164,92,0.4)] cursor-pointer'
                          : isCurrent
                          ? 'bg-[#181818] border-2 border-[#E5C982] text-[#E5C982] shadow-[0_0_15px_rgba(229,201,130,0.5)]'
                          : 'bg-[#181818] border border-[#C9A45C]/30 text-[#A7A29A]/50'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4" /> : s.num}
                    </button>
                    <span
                      className={`text-[11px] uppercase tracking-wider mt-2 ${
                        isCurrent
                          ? 'text-[#E5C982] font-semibold'
                          : isPassed
                          ? 'text-[#F5F0E7]'
                          : 'text-[#A7A29A]/50'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile Step Badge */}
            <div className="md:hidden flex items-center justify-between p-4 bg-[#181818] border border-[#C9A45C]/30 rounded-sm">
              <span className="text-xs uppercase tracking-widest text-[#C9A45C]">
                {t.booking.stepIndicator} {currentStep} {t.booking.of} 6:
              </span>
              <span className="text-xs font-semibold text-[#F5F0E7] uppercase">
                {steps[currentStep - 1]?.label}
              </span>
            </div>
          </div>
        )}

        {/* Prototype simulation alert notice */}
        <div className="mb-8 p-3.5 bg-[#181818] border border-[#C9A45C]/30 rounded-sm flex items-start gap-3 text-xs text-[#A7A29A]">
          <AlertCircle className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-light">
            {t.booking.demoDisclaimer}
          </p>
        </div>

        {/* Main Multi-Step Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Step Panel (8 cols or 12 cols if confirmed) */}
          <div className={currentStep === 7 ? 'lg:col-span-12' : 'lg:col-span-8'}>
            <div className="bg-[#181818] border border-[#C9A45C]/30 rounded-sm p-6 sm:p-8 shadow-2xl">
              
              {/* ============================================================ */}
              {/* STEP 1: SELECT SERVICE                                       */}
              {/* ============================================================ */}
              {currentStep === 1 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step1}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    Select your signature treatment or hair styling experience.
                  </p>

                  <div className="grid grid-cols-1 gap-3 max-h-[500px] overflow-y-auto pr-2">
                    {sampleServices.map((service) => {
                      const isSelected = formData.serviceId === service.id;
                      return (
                        <div
                          key={service.id}
                          onClick={() => setFormData({ ...formData, serviceId: service.id })}
                          className={`p-4 rounded-sm border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                            isSelected
                              ? 'bg-[#222222] border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.25)]'
                              : 'bg-[#141414] border-[#C9A45C]/20 hover:border-[#C9A45C]/60'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={service.image}
                              alt={service.name[language]}
                              className="w-16 h-16 object-cover rounded-sm border border-[#C9A45C]/30 shrink-0"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-wider text-[#C9A45C]">
                                  {service.categoryName[language]}
                                </span>
                                <span className="text-xs text-[#A7A29A]">• {service.durationMinutes} {t.services.mins}</span>
                              </div>
                              <h4 className="font-serif-luxury text-lg text-[#F5F0E7] font-normal">
                                {service.name[language]}
                              </h4>
                              <p className="text-xs text-[#A7A29A] line-clamp-1 font-light">
                                {service.shortDesc[language]}
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-serif-luxury text-lg text-gold-pure font-bold block">
                              LKR {service.priceLKR.toLocaleString()}
                            </span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-2 ml-auto ${
                              isSelected ? 'border-[#E5C982] bg-[#E5C982] text-black' : 'border-[#C9A45C]/40'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 2: CHOOSE STYLIST                                       */}
              {/* ============================================================ */}
              {currentStep === 2 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step2}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    Choose your master artisan or let us select the ideal specialist.
                  </p>

                  <div className="space-y-4">
                    {/* Any available stylist option */}
                    <div
                      onClick={() => setFormData({ ...formData, stylistId: 'any' })}
                      className={`p-4 rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                        formData.stylistId === 'any'
                          ? 'bg-[#222222] border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.25)]'
                          : 'bg-[#141414] border-[#C9A45C]/20 hover:border-[#C9A45C]/60'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border border-[#C9A45C] bg-[#1c1c1c] flex items-center justify-center text-[#E5C982]">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-serif-luxury text-lg text-[#F5F0E7]">
                            {t.booking.anyStylist}
                          </h4>
                          <p className="text-xs text-[#A7A29A] font-light">
                            {t.booking.anyStylistDesc}
                          </p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.stylistId === 'any' ? 'border-[#E5C982] bg-[#E5C982] text-black' : 'border-[#C9A45C]/40'
                      }`}>
                        {formData.stylistId === 'any' && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {/* Specific stylists */}
                    {sampleStylists.map((stylist) => {
                      const isSelected = formData.stylistId === stylist.id;
                      return (
                        <div
                          key={stylist.id}
                          onClick={() => setFormData({ ...formData, stylistId: stylist.id })}
                          className={`p-4 rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#222222] border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.25)]'
                              : 'bg-[#141414] border-[#C9A45C]/20 hover:border-[#C9A45C]/60'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={stylist.image}
                              alt={stylist.name}
                              className="w-14 h-14 rounded-full object-cover border border-[#C9A45C]/40 shrink-0"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-serif-luxury text-lg text-[#F5F0E7]">
                                  {stylist.name}
                                </h4>
                                <span className="text-[11px] text-[#E5C982] font-semibold">★ {stylist.rating}</span>
                              </div>
                              <p className="text-xs text-[#A7A29A] font-light">
                                {stylist.title[language]} ({stylist.experienceYears} yrs)
                              </p>
                            </div>
                          </div>

                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#E5C982] bg-[#E5C982] text-black' : 'border-[#C9A45C]/40'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 3: SELECT DATE                                          */}
              {/* ============================================================ */}
              {currentStep === 3 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step3}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    {t.booking.selectDateDesc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                    {availableDates.map((item) => {
                      const isSelected = formData.date === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          type="button"
                          onClick={() => setFormData({ ...formData, date: item.dateStr })}
                          className={`p-3 rounded-sm border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                            isSelected
                              ? 'bg-gradient-to-b from-[#E5C982] to-[#C9A45C] text-[#101010] border-[#E5C982] shadow-[0_0_15px_rgba(201,164,92,0.3)] font-semibold'
                              : 'bg-[#141414] text-[#F5F0E7] border-[#C9A45C]/20 hover:border-[#C9A45C]/60 hover:bg-[#202020]'
                          }`}
                        >
                          <span className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-black' : 'text-[#A7A29A]'}`}>
                            {item.dayName}
                          </span>
                          <span className="font-serif-luxury text-2xl my-1">
                            {item.dayNum}
                          </span>
                          <span className={`text-[10px] uppercase tracking-widest ${isSelected ? 'text-black' : 'text-[#C9A45C]'}`}>
                            {item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 p-4 bg-[#141414] border border-[#C9A45C]/20 rounded-sm flex items-center justify-between text-xs">
                    <span className="text-[#A7A29A]">Selected Sanctuary Date:</span>
                    <span className="text-[#E5C982] font-semibold">
                      {formData.date || 'Please select a date above'}
                    </span>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 4: CHOOSE TIME SLOT                                     */}
              {/* ============================================================ */}
              {currentStep === 4 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step4}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    Pick your preferred arrival time on {formData.date}.
                  </p>

                  <div className="space-y-6">
                    {/* Morning */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#C9A45C] mb-3 flex items-center gap-2 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {t.booking.morningSlots}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.morning.map((slot) => {
                          const isSelected = formData.timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeSlot: slot })}
                              className={`py-2.5 px-3 rounded-sm border text-xs tracking-wider transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E5C982] text-black font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(229,201,130,0.3)]'
                                  : 'bg-[#141414] text-[#F5F0E7] border-[#C9A45C]/20 hover:border-[#C9A45C]/60 hover:bg-[#202020]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#C9A45C] mb-3 flex items-center gap-2 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {t.booking.afternoonSlots}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.afternoon.map((slot) => {
                          const isSelected = formData.timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeSlot: slot })}
                              className={`py-2.5 px-3 rounded-sm border text-xs tracking-wider transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E5C982] text-black font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(229,201,130,0.3)]'
                                  : 'bg-[#141414] text-[#F5F0E7] border-[#C9A45C]/20 hover:border-[#C9A45C]/60 hover:bg-[#202020]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Evening */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#C9A45C] mb-3 flex items-center gap-2 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {t.booking.eveningSlots}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.evening.map((slot) => {
                          const isSelected = formData.timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeSlot: slot })}
                              className={`py-2.5 px-3 rounded-sm border text-xs tracking-wider transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E5C982] text-black font-semibold border-[#E5C982] shadow-[0_0_15px_rgba(229,201,130,0.3)]'
                                  : 'bg-[#141414] text-[#F5F0E7] border-[#C9A45C]/20 hover:border-[#C9A45C]/60 hover:bg-[#202020]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 5: GUEST DETAILS                                        */}
              {/* ============================================================ */}
              {currentStep === 5 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step5}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    Please provide your contact information so our concierge may welcome you.
                  </p>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1.5">
                        {t.booking.fullNameLabel}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A45C]" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder={t.booking.fullNamePlaceholder}
                          className={`w-full pl-10 pr-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none ${
                            formErrors.fullName ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                          }`}
                        />
                      </div>
                      {formErrors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1.5">
                        {t.booking.phoneLabel}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A45C]" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.booking.phonePlaceholder}
                          className={`w-full pl-10 pr-4 py-3 bg-[#141414] border text-xs sm:text-sm text-[#F5F0E7] focus:outline-none rounded-none ${
                            formErrors.phone ? 'border-red-500' : 'border-[#C9A45C]/30 focus:border-[#E5C982]'
                          }`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1.5">
                        {t.booking.emailLabel}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A45C]" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.booking.emailPlaceholder}
                          className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#C9A45C]/30 text-xs sm:text-sm text-[#F5F0E7] focus:outline-none focus:border-[#E5C982] rounded-none"
                        />
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A7A29A] mb-1.5">
                        {t.booking.notesLabel}
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3 w-4 h-4 text-[#C9A45C]" />
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder={t.booking.notesPlaceholder}
                          className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#C9A45C]/30 text-xs sm:text-sm text-[#F5F0E7] focus:outline-none focus:border-[#E5C982] rounded-none resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 6: REVIEW APPOINTMENT                                   */}
              {/* ============================================================ */}
              {currentStep === 6 && (
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F0E7] mb-2">
                    {t.booking.step6}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light mb-6">
                    Review your reservation details before confirming.
                  </p>

                  <div className="space-y-4">
                    {/* Service & Price */}
                    <div className="p-4 bg-[#141414] border border-[#C9A45C]/25 rounded-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                          {t.booking.selectedService}
                        </span>
                        <h4 className="font-serif-luxury text-xl text-[#F5F0E7]">
                          {selectedServiceObj.name[language]}
                        </h4>
                        <span className="text-xs text-[#A7A29A]">
                          {selectedServiceObj.durationMinutes} mins • {selectedServiceObj.categoryName[language]}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-serif-luxury text-xl text-gold-pure font-bold block">
                          LKR {selectedServiceObj.priceLKR.toLocaleString()}
                        </span>
                        <button
                          onClick={() => setCurrentStep(1)}
                          className="text-[11px] text-[#E5C982] hover:underline cursor-pointer"
                        >
                          {t.booking.editService}
                        </button>
                      </div>
                    </div>

                    {/* Stylist */}
                    <div className="p-4 bg-[#141414] border border-[#C9A45C]/25 rounded-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                          {t.booking.selectedStylist}
                        </span>
                        <h4 className="font-serif-luxury text-lg text-[#F5F0E7]">
                          {selectedStylistObj ? selectedStylistObj.name : t.booking.anyStylist}
                        </h4>
                        {selectedStylistObj && (
                          <span className="text-xs text-[#A7A29A]">
                            {selectedStylistObj.title[language]}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="text-[11px] text-[#E5C982] hover:underline cursor-pointer"
                      >
                        {t.booking.editStylist}
                      </button>
                    </div>

                    {/* Date & Time */}
                    <div className="p-4 bg-[#141414] border border-[#C9A45C]/25 rounded-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                          {t.booking.selectedDate} & {t.booking.selectedTime}
                        </span>
                        <h4 className="font-serif-luxury text-lg text-[#F5F0E7]">
                          {formData.date} at {formData.timeSlot || '09:00 AM'}
                        </h4>
                        <span className="text-xs text-[#A7A29A]">
                          Ward Place Sanctuary Suite
                        </span>
                      </div>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="text-[11px] text-[#E5C982] hover:underline cursor-pointer"
                      >
                        {t.booking.editDateTime}
                      </button>
                    </div>

                    {/* Guest Contact */}
                    <div className="p-4 bg-[#141414] border border-[#C9A45C]/25 rounded-sm">
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block mb-1">
                        Guest Contact
                      </span>
                      <p className="text-sm text-[#F5F0E7] font-medium">{formData.fullName}</p>
                      <p className="text-xs text-[#A7A29A]">{formData.phone} {formData.email ? `• ${formData.email}` : ''}</p>
                      {formData.notes && (
                        <p className="text-xs text-[#A7A29A] italic mt-2">"{formData.notes}"</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* STEP 7: CONFIRMATION PREVIEW (DEMO ONLY)                     */}
              {/* ============================================================ */}
              {currentStep === 7 && (
                <div className="text-center py-6 animate-fade-in max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-[#181818] border-2 border-[#E5C982] flex items-center justify-center text-[#E5C982] mx-auto mb-6 shadow-[0_0_25px_rgba(201,164,92,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                    {t.booking.confirmationTitle}
                  </span>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F0E7] mt-1 mb-2">
                    {t.booking.confirmationSub}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A29A] font-light max-w-md mx-auto mb-8">
                    A confirmation SMS has been prepared for your device. We look forward to welcoming you at NOIR & GOLD SALON.
                  </p>

                  {/* Summary Card */}
                  <div className="p-6 bg-[#141414] border border-[#C9A45C]/40 rounded-sm text-left mb-8 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#C9A45C]/20">
                      <span className="text-xs uppercase tracking-wider text-[#A7A29A]">{t.booking.bookingRef}:</span>
                      <span className="font-mono text-sm text-[#E5C982] font-bold tracking-wider">{bookingRef}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A7A29A]">{t.booking.selectedService}:</span>
                      <span className="text-[#F5F0E7] font-medium">{selectedServiceObj.name[language]}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A7A29A]">{t.booking.selectedStylist}:</span>
                      <span className="text-[#F5F0E7] font-medium">
                        {selectedStylistObj ? selectedStylistObj.name : t.booking.anyStylist}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A7A29A]">{t.booking.selectedDate} & Time:</span>
                      <span className="text-[#F5F0E7] font-medium">{formData.date} at {formData.timeSlot || '09:00 AM'}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A7A29A]">Guest Name:</span>
                      <span className="text-[#F5F0E7] font-medium">{formData.fullName}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-[#C9A45C]/20">
                      <span className="text-[#A7A29A]">{t.booking.totalEstimated}:</span>
                      <span className="font-serif-luxury text-xl text-gold-pure font-bold">
                        LKR {selectedServiceObj.priceLKR.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSimulateCalendar}
                      className="w-full sm:w-auto px-5 py-3 border border-[#C9A45C]/40 text-xs uppercase tracking-wider text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <CalendarPlus className="w-4 h-4 text-[#C9A45C]" />
                      <span>{calendarAdded ? 'Saved to Calendar!' : t.booking.addToCalendar}</span>
                    </button>

                    <button
                      onClick={handlePrint}
                      className="w-full sm:w-auto px-5 py-3 border border-[#C9A45C]/40 text-xs uppercase tracking-wider text-[#F5F0E7] hover:border-[#E5C982] hover:text-[#E5C982] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Printer className="w-4 h-4 text-[#C9A45C]" />
                      <span>{t.booking.printSummary}</span>
                    </button>

                    <GoldButton
                      to="/"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      {t.booking.returnHome}
                    </GoldButton>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={resetBooking}
                      className="text-xs text-[#A7A29A] hover:text-[#E5C982] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Book Another Appointment</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step Navigation Actions (Steps 1 to 6) */}
              {currentStep < 7 && (
                <div className="mt-8 pt-6 border-t border-[#C9A45C]/20 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#A7A29A] hover:text-[#F5F0E7] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{t.booking.back}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <GoldButton
                    onClick={handleNext}
                    size="md"
                    icon={currentStep === 6 ? <CheckCircle2 className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  >
                    {currentStep === 6 ? t.booking.confirmBookingBtn : t.booking.next}
                  </GoldButton>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (4 cols): Live Summary Card (Steps 1 to 6) */}
          {currentStep < 7 && (
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-[#181818] border border-[#C9A45C]/30 rounded-sm p-6 shadow-2xl">
                <h4 className="font-serif-luxury text-xl text-[#F5F0E7] mb-4 pb-3 border-b border-[#C9A45C]/20">
                  {t.booking.summaryTitle}
                </h4>

                <div className="space-y-4 text-xs">
                  {/* Selected service */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                      {t.booking.selectedService}
                    </span>
                    <span className="font-serif-luxury text-lg text-[#F5F0E7] block font-medium">
                      {selectedServiceObj.name[language]}
                    </span>
                    <span className="text-[11px] text-[#A7A29A]">
                      {selectedServiceObj.durationMinutes} {t.services.mins}
                    </span>
                  </div>

                  {/* Stylist */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                      {t.booking.selectedStylist}
                    </span>
                    <span className="text-[#F5F0E7] font-medium block">
                      {selectedStylistObj ? selectedStylistObj.name : t.booking.anyStylist}
                    </span>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] block">
                      {t.booking.selectedDate} & Time
                    </span>
                    <span className="text-[#F5F0E7] font-medium block">
                      {formData.date || 'Pending date selection'}
                    </span>
                    <span className="text-[11px] text-[#E5C982]">
                      {formData.timeSlot ? formData.timeSlot : 'Pending slot selection'}
                    </span>
                  </div>

                  <div className="h-[1px] w-full bg-[#C9A45C]/20 my-4" />

                  {/* Pricing breakdown */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A7A29A] block mb-2">
                      {t.booking.priceBreakdown}
                    </span>
                    <div className="flex items-center justify-between text-xs text-[#A7A29A] mb-1">
                      <span>Service Ritual:</span>
                      <span>LKR {selectedServiceObj.priceLKR.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#A7A29A] mb-1">
                      <span>Valet & Amenities:</span>
                      <span className="text-[#E5C982]">Included</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#A7A29A] mb-3">
                      <span>Taxes & Service:</span>
                      <span className="text-[#E5C982]">Included</span>
                    </div>

                    <div className="flex items-baseline justify-between pt-3 border-t border-white/5">
                      <span className="text-xs uppercase tracking-wider text-[#F5F0E7] font-semibold">
                        {t.booking.totalEstimated}:
                      </span>
                      <span className="font-serif-luxury text-2xl text-gold-pure font-bold">
                        LKR {selectedServiceObj.priceLKR.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#A7A29A] font-light leading-relaxed">
                  {t.booking.taxesIncluded}. Free cancellation up to 24 hours prior.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
