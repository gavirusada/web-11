import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  ChevronRight,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { GoldButton } from '../components/common/GoldButton';
import { sampleServices, sampleStylists } from '../data/salonData';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { language, t } = useLanguage();

  const service = sampleServices.find(s => s.id === serviceId) || sampleServices[0];

  // Recommended stylists for this service
  const recommendedStylists = sampleStylists.filter(stylist =>
    service.recommendedStylistIds?.includes(stylist.id)
  );

  // Related services (in same category or popular, excluding current)
  const relatedServices = sampleServices
    .filter(s => s.id !== service.id && (s.category === service.category || s.popular))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E7]">
      {/* Header Banner */}
      <PageHeader
        kicker={service.categoryName[language]}
        title={service.name[language]}
        breadcrumb={[
          { label: t.serviceDetail.breadcrumbServices, to: '/services' },
          { label: service.name[language] },
        ]}
        bgImage={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A29A] hover:text-[#E5C982] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.serviceDetail.backToServices}</span>
        </Link>

        {/* Main Service Layout: Left Editorial Photo & Overview, Right Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (8 cols): Large Photo, Descriptions, Included, Benefits, Prep Tips */}
          <div className="lg:col-span-8 space-y-12">
            {/* Large Hero Editorial Photo */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[#C9A45C]/30 shadow-2xl bg-black">
              <img
                src={service.image}
                alt={service.name[language]}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
                <span className="px-3 py-1.5 bg-black/85 backdrop-blur-md border border-[#C9A45C]/40 text-[#E5C982] uppercase tracking-wider">
                  {service.categoryName[language]}
                </span>
                <span className="px-3 py-1.5 bg-black/85 backdrop-blur-md border border-white/20 text-[#F5F0E7] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>{service.durationMinutes} {t.services.mins}</span>
                </span>
              </div>
            </div>

            {/* In-depth Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#C9A45C]" />
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  Ritual Description
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#F5F0E7] mb-4">
                The Noir & Gold Signature Method
              </h2>
              <p className="text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light mb-4">
                {service.shortDesc[language]}
              </p>
              <p className="text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                {service.longDesc[language]}
              </p>
            </div>

            {/* What is Included */}
            <div className="p-8 bg-[#181818] border border-[#C9A45C]/25 rounded-sm">
              <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] mb-6 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#E5C982]" />
                {t.serviceDetail.whatsIncluded}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.included[language].map((inc, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F0E7]/90 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Benefits */}
            <div>
              <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] mb-6 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E5C982]" />
                {t.serviceDetail.benefits}
              </h3>
              <div className="space-y-3">
                {service.benefits[language].map((benefit, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#141414] border-l-2 border-[#C9A45C] text-xs sm:text-sm text-[#A7A29A] font-light leading-relaxed"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Tips & Aftercare */}
            <div className="p-6 bg-[#1a1714] border border-[#C9A45C]/30 rounded-sm">
              <h4 className="text-xs uppercase tracking-widest text-[#E5C982] font-semibold mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#C9A45C]" />
                {t.serviceDetail.prepTips}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A7A29A] font-light list-disc list-inside">
                {service.prepTips[language].map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>

            {/* Recommended Stylists for this specific service */}
            {recommendedStylists.length > 0 && (
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#F5F0E7] mb-6">
                  {t.serviceDetail.recommendedStylists}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendedStylists.map((stylist) => (
                    <div
                      key={stylist.id}
                      className="p-4 bg-[#181818] border border-[#C9A45C]/20 rounded-sm flex items-center gap-4 hover:border-[#C9A45C]/60 transition-colors"
                    >
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-16 h-16 rounded-full object-cover border border-[#C9A45C]/40"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-xs text-[#E5C982] mb-0.5">
                          <Star className="w-3 h-3 fill-[#E5C982]" />
                          <span>{stylist.rating}</span>
                        </div>
                        <h4 className="font-serif-luxury text-lg text-[#F5F0E7] truncate">
                          {stylist.name}
                        </h4>
                        <p className="text-[11px] text-[#A7A29A] truncate">
                          {stylist.title[language]}
                        </p>
                      </div>
                      <GoldButton
                        to={`/booking?service=${service.id}&stylist=${stylist.id}`}
                        size="sm"
                        className="text-[10px] shrink-0"
                      >
                        Book
                      </GoldButton>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Booking & Investment Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-8 bg-[#181818] border border-[#C9A45C]/40 rounded-sm shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
                Salon Experience Investment
              </span>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif-luxury text-4xl sm:text-5xl text-gold-pure font-bold">
                  LKR {service.priceLKR.toLocaleString()}
                </span>
                <span className="text-xs text-[#A7A29A]">net</span>
              </div>

              <div className="h-[1px] w-full bg-[#C9A45C]/20 mb-6" />

              <div className="space-y-3 text-xs text-[#A7A29A] mb-8">
                <div className="flex items-center justify-between">
                  <span>{t.serviceDetail.duration}:</span>
                  <span className="text-[#F5F0E7] font-medium">{service.durationMinutes} Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category:</span>
                  <span className="text-[#F5F0E7] font-medium">{service.categoryName[language]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Private VIP Booth:</span>
                  <span className="text-[#E5C982]">Complimentary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Beverage Pairing:</span>
                  <span className="text-[#E5C982]">Barista Coffee / Tea</span>
                </div>
              </div>

              <GoldButton
                to={`/booking?service=${service.id}`}
                size="lg"
                className="w-full text-center"
                icon={<Calendar className="w-4 h-4" />}
              >
                {t.serviceDetail.bookThisService}
              </GoldButton>

              <p className="mt-4 text-center text-[11px] text-[#A7A29A] font-light leading-relaxed">
                Staggered appointments with dedicated attention. Free cancellation up to 24h prior.
              </p>
            </div>

            {/* Concierge Assistance Card */}
            <div className="p-6 bg-[#141414] border border-white/5 rounded-sm text-center">
              <h4 className="font-serif-luxury text-lg text-[#F5F0E7] mb-1">
                Prefer Phone Reservation?
              </h4>
              <p className="text-xs text-[#A7A29A] mb-4 font-light">
                Our front desk concierge is at your service.
              </p>
              <a
                href="tel:+94112688900"
                className="text-xs uppercase tracking-widest text-[#E5C982] hover:underline"
              >
                +94 11 268 8900
              </a>
            </div>
          </div>
        </div>

        {/* Related Services Carousel / Grid */}
        <div className="mt-24 pt-16 border-t border-[#C9A45C]/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif-luxury text-3xl text-[#F5F0E7]">
              {t.serviceDetail.relatedServices}
            </h3>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest text-[#C9A45C] hover:text-[#E5C982] flex items-center gap-1"
            >
              <span>{t.home.viewAllServices}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#181818] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.name[language]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif-luxury text-xl text-[#F5F0E7] mb-1">
                    {rel.name[language]}
                  </h4>
                  <p className="text-xs text-[#A7A29A] line-clamp-2 font-light mb-4">
                    {rel.shortDesc[language]}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="font-serif-luxury text-base text-gold-pure font-bold">
                      LKR {rel.priceLKR.toLocaleString()}
                    </span>
                    <Link
                      to={`/services/${rel.id}`}
                      className="text-[11px] uppercase tracking-wider text-[#E5C982] hover:underline"
                    >
                      {t.services.viewDetails}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
