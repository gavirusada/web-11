import type { Service, Stylist, PackageOffer, GalleryItem, Testimonial, FAQItem } from '../types';

export const salonInfo = {
  name: 'NOIR & GOLD SALON',
  tagline: 'Haute Coiffure & Luxury Aesthetics',
  address: '75 Ward Place, Cinnamon Gardens, Colombo 07, Sri Lanka',
  phone: '+94 11 268 8900',
  phoneRaw: '+94112688900',
  whatsapp: '+94 77 123 4567',
  whatsappUrl: 'https://wa.me/94771234567?text=Hello%20Noir%20%26%20Gold%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20appointment.',
  email: 'concierge@noirandgold.com',
  openingHours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday & Poya Days: 10:00 AM – 6:00 PM',
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
    tiktok: 'https://tiktok.com',
  },
  coordinates: {
    lat: 6.9147,
    lng: 79.8732,
  },
};

export const sampleServices: Service[] = [
  // 1. Haircuts & Styling
  {
    id: 'precision-couture-cut',
    name: {
      en: 'Couture Precision Haircut & Blowout',
      si: 'සුවිශේෂී නිරවද්‍ය කොණ්ඩා කැපුම සහ බ්ලෝඩ්‍රයි',
    },
    category: 'haircuts',
    categoryName: { en: 'Haircuts & Styling', si: 'කොණ්ඩා මෝස්තර සහ කැපුම්' },
    priceLKR: 9500,
    durationMinutes: 60,
    gender: 'unisex',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Architectural precision scissor cut tailored to facial contours, accompanied by scalp massage and signature blowout.',
      si: 'මුහුණේ හැඩයට ගැලපෙන පරිදි සිදුකරන නිරවද්‍ය කොණ්ඩා කැපුම, හිස්කබල සම්බාහනය සහ ආකර්ෂණීය බ්ලෝඩ්‍රයි නිමාව.',
    },
    longDesc: {
      en: 'Our flagship haircut experience begins with an in-depth cranial and bone-structure consultation by a Creative Director. Following an invigorating botanical clarifying wash and restorative hair mask, your hair is sculpted utilizing dry and wet European shear techniques to deliver effortless movement and structure.',
      si: 'අපගේ ප්‍රධාන නිර්මාණ අධ්‍යක්ෂවරයෙකුගේ පුද්ගලික උපදේශනයෙන් ඇරඹේ. ඖෂධීය පෝෂණීය සේදීමකින් පසු යුරෝපීය තාක්ෂණයෙන් ඔබේ කොණ්ඩය කපා හැඩගන්වනු ලබයි.',
    },
    benefits: {
      en: [
        'Custom geometric graduation tailored to your profile',
        'Long-lasting hair weight redistribution for easy home maintenance',
        'Complimentary luxury botanical scalp treatment and blowdry finish',
      ],
      si: [
        'ඔබේ මුහුණේ ස්වභාවයට අනන්‍ය වූ ජ්‍යාමිතික කොණ්ඩා සැකසුම',
        'නිවසේදී පවා පහසුවෙන් කළමනාකරණය කළ හැකි දිගුකාලීන නිමාව',
        'නොමිලේ ලබාදෙන ඖෂධීය හිස්කබල සත්කාරය සහ බ්ලෝඩ්‍රයි නිමාව',
      ],
    },
    included: {
      en: ['Face shape aesthetic analysis', 'Aromatherapy scalp massage', 'Shampoo & caviar mask rinse', 'Precision scissor craft', 'Velvet blowdry styling'],
      si: ['මුහුණේ හැඩය විශ්ලේෂණය', 'සුවඳවත් හිස්කබල සම්බාහනය', 'ෂැම්පු සහ කැවියර් මාස්ක් සේදීම', 'නිරවද්‍ය කතුරු කැපුම', 'බ්ලෝඩ්‍රයි විලාසිතා නිමාව'],
    },
    prepTips: {
      en: ['Feel free to bring reference imagery of styles you admire.', 'Arrive 10 minutes early to enjoy our barista lounge coffee.'],
      si: ['ඔබ කැමති විලාසිතා වල ඡායාරූප රැගෙන ඒමට හැකිය.', 'අපගේ ප්‍රණීත කෝපි රසවිඳීමට මිනිත්තු 10කට පෙර පැමිණෙන්න.'],
    },
    recommendedStylistIds: ['elena-rostova', 'marcus-vance'],
  },
  {
    id: 'gentlemans-signature-cut',
    name: {
      en: 'Gentleman’s Royal Haircut & Beard Sculpt',
      si: 'රාජකීය පිරිමි කොණ්ඩා කැපුම සහ රැවුල කැපීම',
    },
    category: 'haircuts',
    categoryName: { en: 'Haircuts & Styling', si: 'කොණ්ඩා මෝස්තර සහ කැපුම්' },
    priceLKR: 7500,
    durationMinutes: 50,
    gender: 'men',
    popular: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Faded taper or executive scissor cut paired with hot towel throat shave and beard line definition.',
      si: 'නවතම ෆේඩ් (fade) හෝ සාම්ප්‍රදායික කතුරු කැපුම, උණුසුම් තුවා රැවුල කැපීම හා රැවුල් රේඛා හැඩගැන්වීම.',
    },
    longDesc: {
      en: 'Tailored for the distinguished gentleman. Incorporates precision clippers, hand shear shaping, dual eucalyptus hot towel compress, straight-razor detailing, and cold rock alum finish for flawless irritation-free skin.',
      si: 'පිරිමි පෞරුෂය ඉස්මතු කෙරෙන විශේෂිත සත්කාරයකි. උණුසුම් තුවා සත්කාරය, අත් කතුරු කැපුම සහ රැවුල මනාව හැඩගැන්වීම මෙයට ඇතුළත්ය.',
    },
    benefits: {
      en: [
        'Razor-sharp neckline definition',
        'Beard softening with organic moroccan argan oil',
        'Cooling aftershave balm formulated in Florence',
      ],
      si: [
        'ඉතා පැහැදිලි හා නිරවුල් බෙල්ලේ රේඛාව',
        'කාබනික ආර්ගන් තෙල් මගින් රැවුල මෘදු කිරීම',
        'සුවඳවත් ඉතාලි පසු-රැවුල් ආලේපනය',
      ],
    },
    included: {
      en: ['Consultation', 'Custom haircut', 'Beard shaping', 'Hot towel wrap', 'Beard elixir finish'],
      si: ['උපදේශනය', 'කොණ්ඩා කැපුම', 'රැවුල හැඩගැන්වීම', 'උණුසුම් තුවා සත්කාරය', 'රැවුල සඳහා වන තෙල් සත්කාරය'],
    },
    prepTips: {
      en: ['Avoid shaving 48 hours prior to your visit for best skin soothing outcome.'],
      si: ['හොඳම ප්‍රතිඵල සඳහා පැමිණීමට පැය 48කට පෙර රැවුල කැපීමෙන් වළකින්න.'],
    },
    recommendedStylistIds: ['marcus-vance', 'tariq-al-mansoor'],
  },

  // 2. Hair Colouring
  {
    id: 'french-luxury-balayage',
    name: {
      en: 'French Dimensional Balayage & Gloss',
      si: 'ප්‍රංශ බැලයාජ් වර්ණ ගැන්වීම සහ ග්ලොස්',
    },
    category: 'colouring',
    categoryName: { en: 'Hair Colouring', si: 'කොණ්ඩා වර්ණ ගැන්වීම්' },
    priceLKR: 28000,
    durationMinutes: 180,
    gender: 'women',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Hand-painted freehand sunlit gradients with ammonia-free bond-protecting lightening system and bespoke acidic gloss.',
      si: 'හිසකෙස් ආරක්ෂා කරන ඇමෝනියා රහිත ප්‍රංශ බැලයාජ් වර්ණ ගැන්වීම සහ දිදුලන ග්ලොස් නිමාව.',
    },
    longDesc: {
      en: 'The pinnacle of bespoke hair artistry. Our master colourists hand-paint delicate gradients using Parisian freehand clay lighteners infused with bond-multiplying technologies, followed by tone-customized gloss that seals the cuticle for reflective luminosity.',
      si: 'ප්‍රංශ තාක්ෂණයෙන් යුත් අතින් වර්ණ ගැන්වීමේ කලාව. ඔබේ සමේ පැහැයට වඩාත්ම ගැලපෙන පරිදි ආකර්ෂණීය ස්වභාවික දිදුලන නිමාවක් ලබාදේ.',
    },
    benefits: {
      en: [
        'Zero demarcation lines during regrowth',
        'Multi-tonal depth that catches natural sunlight',
        'Enhanced hair structural integrity via bond-building peptides',
      ],
      si: [
        'හිසකෙස් වර්ධනය වීමේදී පැහැදිලි රේඛා නොපෙනී ස්වභාවිකව පැවතීම',
        'ස්වභාවික ආලෝකයට දිදුලන බහු-වර්ණ ගැඹුර',
        'පෙප්ටයිඩ් මගින් හිසකෙස් සවිමත් කිරීම',
      ],
    },
    included: {
      en: ['Chromatic skin-tone analysis', 'Freehand balayage application', 'Olaplex bond protector', 'Acidic color gloss treatment', 'Silk bounce blowdry'],
      si: ['සමේ පැහැය විශ්ලේෂණය', 'බැලයාජ් ආලේපනය', 'ඔලැප්ලෙක්ස් ආරක්ෂණ සත්කාරය', 'ඇසිඩික් කලර් ග්ලොස් සත්කාරය', 'සිල්ක් බ්ලෝඩ්‍රයි නිමාව'],
    },
    prepTips: {
      en: ['Wash your hair 24 hours prior without heavy silicone conditioners or oils.'],
      si: ['පැමිණීමට පැය 24කට පෙර වැඩි ඝන තෙල් වර්ග නොගා හිසකෙස් සෝදා තබාගන්න.'],
    },
    recommendedStylistIds: ['elena-rostova', 'chloe-dupont'],
  },
  {
    id: 'platinum-toning-gloss',
    name: {
      en: 'Liquid Gold / Platinum Tonal Glaze',
      si: 'ලික්විඩ් ගෝල්ඩ් / ප්ලැටිනම් ටෝනල් ග්ලේස්',
    },
    category: 'colouring',
    categoryName: { en: 'Hair Colouring', si: 'කොණ්ඩා වර්ණ ගැන්වීම්' },
    priceLKR: 14500,
    durationMinutes: 90,
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Neutralize brassiness, restore deep amber or icy platinum tones, and infuse mirror-like diamond shine.',
      si: 'හිසකෙස් වල අනවශ්‍ය කහ පැහැය ඉවත් කර, රන්වන් හෝ ප්ලැටිනම් දිදුලන නිමාවක් ලබාදෙන සත්කාරය.',
    },
    longDesc: {
      en: 'A rapid yet transformative color refreshment designed for dull or previously colored hair. Powered by vegan amino acids that deposit sheer pigment while closing the hair cuticle tight for glass-hair reflections.',
      si: 'පෙර වර්ණ ගැන්වූ හෝ අවපැහැ ගැන්වුණු හිසකෙස් සඳහා ක්ෂණික ප්‍රබෝධයක් ගෙනදෙන වීදුරුවක් බඳු දිදුලන නිමාවක් ලබාදෙන සත්කාරයකි.',
    },
    benefits: {
      en: ['Mirror glass reflection', 'Elimination of unwanted warm undertones', 'Hydrates parched hair ends'],
      si: ['වීදුරුවක් බඳු කැඩපත් දිස්නය', 'අනවශ්‍ය රන්වන් පැහැය සමනය කිරීම', 'වියළි අගිසි වලට තෙතමනය ලබාදීම'],
    },
    included: {
      en: ['Color neutralization wash', 'Custom gloss formula', 'Scalp detox rinse', 'Styling blowout'],
      si: ['වර්ණ සමබරතා සේදීම', 'විශේෂ ග්ලොස් ආලේපනය', 'හිස්කබල ඩිටොක්ස් සේදීම', 'බ්ලෝඩ්‍රයි විලාසිතා නිමාව'],
    },
    prepTips: { en: ['Ideal between your main coloring visits.'], si: ['ප්‍රධාන වර්ණ ගැන්වීම් දෙකක් අතරතුර සිදුකිරීමට ඉතා සුදුසුයි.'] },
    recommendedStylistIds: ['chloe-dupont'],
  },

  // 3. Hair Treatments
  {
    id: 'caviar-botox-restoration',
    name: {
      en: 'Caviar & Collagen Hair Botox Therapy',
      si: 'කැවියර් සහ කොලැජන් හෙයාර් බොටොක්ස් සත්කාරය',
    },
    category: 'treatments',
    categoryName: { en: 'Hair Treatments', si: 'හිසකෙස් සත්කාර' },
    priceLKR: 22000,
    durationMinutes: 120,
    gender: 'unisex',
    popular: true,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Deep structural cellular reconstruction infusing marine caviar extracts, hydrolyzed collagen, and biomimetic peptides.',
      si: 'හානිවූ හිසකෙස් අභ්‍යන්තරයෙන්ම යථා තත්ත්වයට පත්කරන කැවියර් හා කොලැජන් සත්කාරය.',
    },
    longDesc: {
      en: 'Zero formaldehyde or harmful chemicals. This breakthrough restorative treatment fills porous gaps in compromised hair shafts caused by UV radiation, heat styling, and bleach, yielding 12 weeks of silk elasticity.',
      si: 'හානිකර රසායනික ද්‍රව්‍ය නොමැතිව, හිරු එළියෙන් හෝ රස්නයෙන් හානිවූ හිසකෙස් සති 12ක් පුරා මෘදු හා සිල්ක් මෙන් පවත්වා ගැනීමට උපකාරී වේ.',
    },
    benefits: {
      en: ['Eliminates 95% of frizz in tropical humidity', 'Restores natural elasticity and tensile strength', 'Imparts weightless cashmere texture'],
      si: ['තෙතමනය සහිත කාලගුණයේදී කොණ්ඩය විසිරී යාම 95%කින් පාලනය කරයි', 'හිසකෙස් වල ශක්තිය හා නම්‍යශීලී බව යළි ලබාදෙයි', 'කැෂ්මියර් වැනි මෘදු බවක් එක්කරයි'],
    },
    included: {
      en: ['Deep clarifying wash', 'Caviar & collagen nano-infusion', 'Infrared ultrasonic cold iron sealing', 'Silkening blowout finish'],
      si: ['ගැඹුරු පිරිසිදුකාරක සේදීම', 'කැවියර් නැනෝ ආලේපනය', 'අධෝරක්ත අතිධ්වනික යකඩ මුද්‍රා තැබීම', 'සිල්ක් බ්ලෝඩ්‍රයි නිමාව'],
    },
    prepTips: { en: ['Wash your hair the morning of your visit without heavy styling oils.'], si: ['පැමිණෙන දිනයේ උදෑසන තෙල් නොගා හිස සෝදා පැමිණෙන්න.'] },
    recommendedStylistIds: ['elena-rostova', 'chloe-dupont'],
  },
  {
    id: 'organic-brazilian-keratin',
    name: {
      en: 'Organic Nano-Keratin Silk Smoothing',
      si: 'කාබනික නැනෝ-කෙරටින් සිල්ක් සත්කාරය',
    },
    category: 'treatments',
    categoryName: { en: 'Hair Treatments', si: 'හිසකෙස් සත්කාර' },
    priceLKR: 26000,
    durationMinutes: 150,
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Formaldehyde-free smoothing ritual delivering humidity-proof glass shine and manageable straight texture for 4-6 months.',
      si: 'මාස 4-6ක් දක්වා හිසකෙස් විසිරී යාම වළකා සෘජු හා දිදුලන සුමට බවක් ලබාදෙන ආරක්ෂිත කෙරටින් සත්කාරය.',
    },
    longDesc: {
      en: 'Infused with Amazonian and argan extracts, this gentle yet ultra-effective formula re-aligns hair bonds without chemical odors or stinging eyes.',
      si: 'ස්වභාවික ආර්ගන් සාරය අඩංගු මෙමගින් ඇස් දැවිල්ලක් හෝ තද ගන්ධයක් නොමැතිව හිසකෙස් සුමට හා දිගුකාලීනව සෘජු කර තබයි.',
    },
    benefits: {
      en: ['Cuts daily styling time by 70%', 'Protects against tropical Colombo humidity', 'Silky touch and incredible gloss'],
      si: ['දිනපතා කොණ්ඩය සකස් කිරීමේ කාලය 70%කින් අඩු කරයි', 'කොළඹ තෙත් කාලගුණයෙන් ආරක්ෂා කරයි', 'සිල්ක් වැනි මෘදු බව සහ දිස්නය'],
    },
    included: {
      en: ['Purifying wash', 'Nano-keratin infusion', 'Precision thermal alignment', 'Post-keratin protective serum'],
      si: ['පිරිසිදු කිරීමේ සේදීම', 'නැනෝ කෙරටින් ආලේපනය', 'නිරවද්‍ය උෂ්ණත්ව මුද්‍රා තැබීම', 'ආරක්ෂණ සීරම් ආලේපනය'],
    },
    prepTips: { en: ['Do not pin or tie hair for 48 hours after treatment.'], si: ['සත්කාරයෙන් පසු පැය 48ක් යනතුරු කොණ්ඩය ගැටගැසීමෙන් වළකින්න.'] },
    recommendedStylistIds: ['chloe-dupont', 'marcus-vance'],
  },

  // 4. Beard & Grooming
  {
    id: 'traditional-hot-towel-shave',
    name: {
      en: 'The Sovereign Hot Towel Straight-Razor Shave',
      si: 'රාජකීය උණුසුම් තුවා රේසර් රැවුල කැපීම',
    },
    category: 'grooming',
    categoryName: { en: 'Beard & Grooming', si: 'රැවුල සහ පිරිමි සත්කාර' },
    priceLKR: 5500,
    durationMinutes: 45,
    gender: 'men',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Authentic 7-step barbershop shave with Italian badger-hair lather, hot essential oil towels, and obsidian cooling stones.',
      si: 'ඉතාලි ක්‍රමයට සිදුකෙරෙන පියවර 7ක සාම්ප්‍රදායික උණුසුම් තුවා රේසර් රැවුල කැපීමේ සත්කාරය.',
    },
    longDesc: {
      en: 'A timeless gentleman’s indulgence. Begins with pre-shave sandalwood oil massage, three eucalyptus-infused steam towels, badger hair lathering, twin-pass feather razor shave, and finishes with chilled obsidian stone massage and astringent tonique.',
      si: 'සඳුන් තෙල් සම්බාහනය, යුකැලිප්ටස් වාෂ්ප තුවා සහ සියුම් රේසර් භාවිතයෙන් සමට කිසිදු හානියක් නොවන සේ සිදුකරන විශිෂ්ට සත්කාරයකි.',
    },
    benefits: {
      en: ['Unmatched velvet-smooth skin closeness', 'Zero razor bumps or ingrown hairs', 'Deep stress relief via facial pressure point massage'],
      si: ['වෙල්වට් වැනි අතිශය මෘදු සමක්', 'රේසර් මගින් ඇතිවන ලප කැළැල් හෝ දැවිල්ල නොමැති වීම', 'මුහුණේ මාංශපේෂී සම්බාහනයෙන් ලැබෙන මානසික සුවය'],
    },
    included: {
      en: ['Sandalwood pre-shave massage', 'Triple steam towels', 'Feather straight-edge shave', 'Cold obsidian stone closure', 'Colonia finish'],
      si: ['පූර්ව සඳුන් සම්බාහනය', 'ත්‍රිත්ව වාෂ්ප තුවා සත්කාරය', 'නිරවද්‍ය රේසර් රැවුල කැපීම', 'සිසිල් කළු ගල් සම්බාහනය', 'සුවඳ විලවුන් නිමාව'],
    },
    prepTips: { en: ['Relax and let the warm towels melt your tension.'], si: ['උණුසුම් තුවා සත්කාරයේ සුවය විඳිමින් සැහැල්ලු වන්න.'] },
    recommendedStylistIds: ['tariq-al-mansoor'],
  },

  // 5. Facial & Skincare
  {
    id: '24k-gold-imperial-facial',
    name: {
      en: '24K Imperial Gold Rejuvenation Facial',
      si: '24K රන් ආලේපිත සුඛෝපභෝගී මුහුණේ සත්කාරය',
    },
    category: 'skincare',
    categoryName: { en: 'Facial & Skincare', si: 'මුහුණ සහ සමේ සත්කාර' },
    priceLKR: 24000,
    durationMinutes: 90,
    gender: 'unisex',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Pure 24K biological gold leaf sheets, micro-current contouring, and Swiss plant stem cells for radiant cellular lift.',
      si: 'පිරිසිදු 24K රන් පත්‍ර, මයික්‍රෝ-කරන්ට් තාක්ෂණය සහ ස්විට්සර්ලන්ත ශාක සෛල සාරය යොදා සිදුකරන සත්කාරය.',
    },
    longDesc: {
      en: 'Gold has been prized since antiquity for its potent anti-inflammatory and cellular renewal properties. Our therapists apply certified 24-karat gold foil leaves that melt deeply into the dermis under sonic vibrations, restoring natural radiance and firmness.',
      si: 'සම තරුණ බවින් හා ප්‍රබෝධයෙන් තැබීමට රන් වල ඇති සුවිශේෂී ගුණය ප්‍රකටය. අතිධ්වනික තරංග මගින් රන් සාරය සම තුළට කාන්දු කර සම ඇදීම හා රැලි වැටීම පාලනය කරයි.',
    },
    benefits: {
      en: ['Instant porcelain radiance for high-profile events', 'Stimulates native collagen production', 'Visible reduction in fine expression lines'],
      si: ['විශේෂ උත්සව සඳහා ක්ෂණික දිදුලන පැහැපත් බව', 'ස්වභාවික කොලැජන් වර්ධනය උත්තේජනය කිරීම', 'මුහුණේ සියුම් රැළි පාලනය'],
    },
    included: {
      en: ['Double enzyme cleanse', 'Diamond tip microdermabrasion', '24K gold foil mask infusion', 'Lymphatic drainage massage', 'Stem cell serum lock'],
      si: ['ද්විත්ව එන්සයිම පිරිසිදු කිරීම', 'ඩයමන්ඩ් මයික්‍රෝඩර්මාබ්‍රේෂන්', '24K රන් ආවරණ සත්කාරය', 'වසා ගැටිති සම්බාහනය', 'ස්ටෙම් සෙල් සීරම් ආලේපනය'],
    },
    prepTips: { en: ['Avoid exfoliating products for 48 hours prior.'], si: ['පැමිණීමට පැය 48කට පෙර ස්ක්‍රබ් වර්ග භාවිතයෙන් වළකින්න.'] },
    recommendedStylistIds: ['ananya-sharma'],
  },
  {
    id: 'hydrafacial-md-deep-infusion',
    name: {
      en: 'Hydra-Infusion Vortex Glow Facial',
      si: 'හයිඩ්‍රා-ඉන්ෆියුෂන් වෝටෙක්ස් ග්ලෝ ෆේෂල්',
    },
    category: 'skincare',
    categoryName: { en: 'Facial & Skincare', si: 'මුහුණ සහ සමේ සත්කාර' },
    priceLKR: 18500,
    durationMinutes: 75,
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1512290900672-1f0233364f33?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Vortex suction extraction unclogs pores while saturating skin with hyaluronic acid, peptides, and antioxidant cocktails.',
      si: 'මුහුණේ කුණු දූවිලි හා කළු ලප ඉවත් කර හයුලූරොනික් ඇසිඩ් මගින් සම ගැඹුරින් තෙතමනය කරන නවීන සත්කාරය.',
    },
    longDesc: {
      en: 'Non-invasive 4-step dermal breakthrough that purifies, painlessly vacuums blackheads, exfoliates dead skin layers, and infuses custom concentrated serums directly into open pores.',
      si: 'කිසිදු වේදනාවකින් තොරව සිදුකරන පියවර 4ක ප්‍රතිකාරයකි. කළු ලප ඉවත් කර සමට අවශ්‍ය තෙතමනය හා පෝෂණය ක්ෂණිකව ලබාදෙයි.',
    },
    benefits: {
      en: ['Zero downtime or visible redness', 'Refines enlarged pores and balances sebum', 'Hydrates deeply against urban pollution'],
      si: ['මුහුණ රතු වීමක් නොමැතිව ක්ෂණිකව සාමාන්‍ය කටයුතුවල නිරත විය හැක', 'විශාල වූ සිදුරු කුඩා කරයි', 'නාගරික දූෂණයෙන් සම ආරක්ෂා කරයි'],
    },
    included: {
      en: ['Vortex deep cleanse', 'Gentle glycolic peel', 'Painless vacuum extraction', 'Hyaluronic flood mask', 'LED light therapy'],
      si: ['වෝටෙක්ස් ගැඹුරු පිරිසිදු කිරීම', 'මෘදු පීලින් සත්කාරය', 'වේදනා රහිත වැකියුම් කළු ලප ඉවත් කිරීම', 'හයුලූරොනික් ආවරණය', 'LED ආලෝක ප්‍රතිකාරය'],
    },
    prepTips: { en: ['Arrive without makeup if convenient.'], si: ['හැකි නම් මේකප් රහිතව පැමිණෙන්න.'] },
    recommendedStylistIds: ['ananya-sharma'],
  },

  // 6. Bridal & Party Makeup
  {
    id: 'haute-couture-bridal-makeover',
    name: {
      en: 'Haute Couture Bridal Atelier & Dressing',
      si: 'රාජකීය මනාලියන් හැඩගැන්වීම සහ ඇඳුම් සැකසුම',
    },
    category: 'bridal',
    categoryName: { en: 'Bridal & Party Makeup', si: 'මනාලියන් හා උත්සව හැඩගැන්වීම්' },
    priceLKR: 75000,
    durationMinutes: 240,
    gender: 'women',
    popular: true,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Complete wedding day luxury ensemble: high-definition airbrush makeup, couture updo, jewellery & saree/veil drapery in private suite.',
      si: 'විවාහ මංගල දිනය සඳහා පෞද්ගලික VIP කුටියකදී සිදුකරන එයාර්බ්‍රෂ් මේකප්, කොණ්ඩා විලාසිතා සහ සාරි හෝ ගවුම් සැකසුම.',
    },
    longDesc: {
      en: 'Crafted for the bride who envisions timeless regal beauty. Includes pre-wedding trial session, private bridal suite with personal butler, HD waterproof airbrush cosmetics, luxury hair extensions placement, fresh floral accents, and veil placement.',
      si: 'මනාලියකට අවශ්‍ය සියලුම පහසුකම් එක්තැන් කළ සත්කාරයකි. පෙර අත්හදා බැලීම් (trial), පෞද්ගලික කාමර පහසුකම් සහ දිගු වේලාවක් නොමැකී පවතින ජලයට ඔරොත්තු දෙන එයාර්බ්‍රෂ් මේකප් මෙයට ඇතුළත්ය.',
    },
    benefits: {
      en: ['18-hour sweatproof & tearproof HD makeup longevity', 'Flawless in 4K photography and cinematic video', 'Exclusive private suite with champagne service'],
      si: ['පැය 18ක් පුරා නොමැකී පවතින උසස් ප්‍රමිතියේ මේකප්', '4K ඡායාරූප සහ වීඩියෝ සඳහා විශිෂ්ට නිමාව', 'පෞද්ගලික කාමර පහසුකම් සහ ප්‍රණීත පාන සත්කාර'],
    },
    included: {
      en: ['Full pre-trial consultation', 'Airbrush HD makeup & contour', 'Architectural bridal updo', 'Luxury mink lash extensions', 'Saree / gown master draping'],
      si: ['සම්පූර්ණ පූර්ව උපදේශන සැසිය', 'එයාර්බ්‍රෂ් HD මේකප්', 'රාජකීය කොණ්ඩා විලාසිතාව', 'ඇසිපිය සත්කාරය', 'සාරි හෝ මංගල ගවුම් සැකසුම'],
    },
    prepTips: { en: ['Book at least 3-6 months in advance to reserve your preferred date.'], si: ['ඔබේ මංගල දිනය වෙන්කරවා ගැනීමට මාස 3-6කට පෙර සම්බන්ධ වන්න.'] },
    recommendedStylistIds: ['ananya-sharma', 'elena-rostova'],
  },

  // 7. Manicure & Pedicure
  {
    id: '24k-gold-spa-manicure-pedicure',
    name: {
      en: '24K Gold & Champagne Royal Mani-Pedi',
      si: '24K රන් හා ෂැම්පේන් මැනිකියෝර් සහ පෙඩිකියෝර්',
    },
    category: 'nails',
    categoryName: { en: 'Manicure & Pedicure', si: 'අත් හා පාද සත්කාර' },
    priceLKR: 16000,
    durationMinutes: 90,
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Dead Sea salt foot bath, gold sugar scrub exfoliation, warm paraffin wax bath, and precision Russian cuticle sculpting.',
      si: 'මළ මුහුදේ ලුණු ජල පාද ස්නානය, රන් සීනි ස්ක්‍රබ්, උණුසුම් පැරෆින් ඉටි සත්කාරය සහ අත් පා නියපොතු හැඩගැන්වීම.',
    },
    longDesc: {
      en: 'Total rejuvenation for hands and feet. Involves dead cuticle removal using dry Russian micro-tools, colloidal gold peel-off mask, hot basalt stone foot massage, collagen-soaked gloves, and high-shine non-toxic gel polish.',
      si: 'අත් සහ පාද සඳහා ඉහළම සත්කාරයකි. රුසියානු තාක්ෂණයෙන් නියපොතු පිරිසිදු කර, රන් ආවරණයක් සහ උණුසුම් පාෂාණ සම්බාහනයක් ලබාදෙයි.',
    },
    benefits: {
      en: ['Silky-soft heels and hydrated cuticles', 'Relieves tension from high heels and long standing', 'Long-lasting non-chip gel polish'],
      si: ['විලුඹ පැළීම් සුවවී මෘදු පාද යුගලක්', 'දිගු වේලාවක් සිටගෙන සිටීමෙන් ඇතිවන තෙහෙට්ටුව සමනය වීම', 'කල්පවතින උසස් නිය ආලේපන'],
    },
    included: {
      en: ['Rose petal champagne soak', 'Gold micro-scrub', 'Warm paraffin dipping', 'Basalt stone massage', 'Gel polish of choice'],
      si: ['රෝස පෙති හා ෂැම්පේන් පාද ස්නානය', 'රන් ස්ක්‍රබ් සත්කාරය', 'පැරෆින් ඉටි ආවරණය', 'උණුසුම් පාෂාණ සම්බාහනය', 'කැමති ජෙල් ආලේපනය'],
    },
    prepTips: { en: ['Open-toe footwear recommended if choosing regular nail lacquer.'], si: ['සාමාන්‍ය නිය ආලේපන තෝරාගන්නේ නම් විවෘත පාවහන් පළඳින්න.'] },
    recommendedStylistIds: ['ananya-sharma'],
  },

  // 8. Spa & Relaxation
  {
    id: 'japanese-head-spa-hydrotherapy',
    name: {
      en: 'Tokyo Scalp Hydrotherapy & Head Spa',
      si: 'ජපාන ක්‍රමයේ හිස්කබල හයිඩ්‍රොතෙරපි සහ හෙඩ් ස්පා',
    },
    category: 'spa',
    categoryName: { en: 'Spa & Relaxation', si: 'ස්පා සහ විවේකී සත්කාර' },
    priceLKR: 17500,
    durationMinutes: 75,
    gender: 'unisex',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    shortDesc: {
      en: 'Micro-mist cascading water halo, deep botanical scalp pore detox, and Shiatsu cervical neck & shoulder massage.',
      si: 'දිය ඇල්ලක් බඳු වෝටර් හැලෝ (water halo), හිස්කබල ඩිටොක්ස් සේදීම සහ ජපන් ෂියාට්සු බෙල්ල හා උරහිස් සම්බාහනය.',
    },
    longDesc: {
      en: 'Experience the viral sensory phenomenon that restores both mental tranquility and folicle vitality. Using our specialized Japanese ergonomic wash basin with circular rainfall ring, an artisan detoxifies congested sebaceous glands while applying rhythmic acupressure.',
      si: 'මානසික ආතතිය දුරුකර හිස්කබලේ රුධිර ගමනාගමනය ප්‍රශස්ත කරන විස්මිත සත්කාරයකි. අඛණ්ඩ උණුසුම් ජල ධාරාවකින් හා ඖෂධීය සම්බාහනයෙන් ඔබට නිස්කලංක සුවයක් ලබාදේ.',
    },
    benefits: {
      en: ['Deep mental tranquility and migraine alleviation', 'Clears scalp buildup and dandruff flakes', 'Stimulates new hair follicular growth'],
      si: ['මානසික ආතතිය සහ ඉරුවාරදය දුරුකිරීම', 'හිස්හොරි හා තෙල් සහිත බව සම්පූර්ණයෙන් පිරිසිදු කිරීම', 'නව හිසකෙස් වර්ධනය උත්තේජනය කිරීම'],
    },
    included: {
      en: ['Microscopic scalp camera diagnostics', 'Volcanic clay scalp scrub', 'Continuous rainfall water halo therapy', 'Shiatsu acupressure head massage', 'Blowdry finish'],
      si: ['ක්ෂුද්‍ර කැමරා මගින් හිස්කබල පරීක්ෂාව', 'ගිනිකඳු මැටි ස්ක්‍රබ් සත්කාරය', 'අඛණ්ඩ වෝටර් හැලෝ ජල ධාරා සත්කාරය', 'ෂියාට්සු හිස සම්බාහනය', 'බ්ලෝඩ්‍රයි නිමාව'],
    },
    prepTips: { en: ['Prepare to fully disconnect; phone silent mode requested.'], si: ['පූර්ණ මානසික සුවය සඳහා දුරකථන නිහඬ කර තබන්න.'] },
    recommendedStylistIds: ['marcus-vance', 'chloe-dupont'],
  },
];

export const sampleStylists: Stylist[] = [
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    title: { en: 'Creative Director & Master Colourist', si: 'ප්‍රධාන නිර්මාණ අධ්‍යක්ෂිකා සහ වර්ණ ශිල්පිනී' },
    experienceYears: 14,
    bio: {
      en: 'Trained at the Toni&Guy Academy in London and L’Oréal Professionnel Paris. Elena is celebrated across South Asia for her bespoke sun-kissed balayage and structural couture cuts.',
      si: 'ලන්ඩනයේ Toni&Guy සහ පැරිසියේ L’Oréal ආයතන වලින් පුහුණුව ලැබූ එලේනා, ආකර්ෂණීය බැලයාජ් සහ නිරවද්‍ය කොණ්ඩා මෝස්තර පිළිබඳ ප්‍රවීණ ශිල්පිනියකි.',
    },
    specialties: {
      en: ['French Balayage', 'Couture Precision Cutting', 'Keratin Restoration', 'High-Fashion Editorial'],
      si: ['ප්‍රංශ බැලයාජ්', 'නිරවද්‍ය කොණ්ඩා කැපුම්', 'කෙරටින් සත්කාර', 'විලාසිතා නිර්මාණ'],
    },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 342,
    portfolioImages: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    title: { en: 'Master Barber & Head Stylist', si: 'ප්‍රධාන බාබර් සහ ජ්‍යෙෂ්ඨ කොණ්ඩා ශිල්පී' },
    experienceYears: 12,
    bio: {
      en: 'Former senior barber at Mayfair London. Marcus specializes in razor-sharp fades, classic executive shear cuts, and restorative Japanese scalp therapies.',
      si: 'ලන්ඩනයේ ප්‍රමුඛ පෙළේ බාබර් ශාලාවල සේවය කර ඇති මාකස්, පිරිමි කොණ්ඩා කැපුම්, රැවුල් හැඩගැන්වීම් හා ජපන් හෙඩ් ස්පා පිළිබඳ හසල දැනුමක් ඇත්තෙකි.',
    },
    specialties: {
      en: ['Skin Fades & Tapers', 'Straight Razor Shaves', 'Beard Architecture', 'Head Spa Hydrotherapy'],
      si: ['ස්කින් ෆේඩ් සහ ටේපර්', 'සාම්ප්‍රදායික රේසර් රැවුල කැපීම', 'රැවුල හැඩගැන්වීම', 'හෙඩ් ස්පා සත්කාර'],
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 418,
    portfolioImages: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    title: { en: 'Lead Aesthetician & Bridal Director', si: 'ප්‍රධාන රූපලාවන්‍ය හා මනාලියන් අධ්‍යක්ෂිකා' },
    experienceYears: 11,
    bio: {
      en: 'Certified in advanced dermal therapies in Zurich. Ananya curates radiant bridal transformations and bespoke 24K cellular skin therapies with unmatched gentleness.',
      si: 'ස්විට්සර්ලන්තයේ සූරිච් නුවරින් සමේ සත්කාර පිළිබඳ උසස් පුහුණුව ලත් අනන්‍යා, මනාලියන් හැඩගැන්වීම් සහ 24K රන් මුහුණු සත්කාර සඳහා ඉතා ප්‍රසිද්ධය.',
    },
    specialties: {
      en: ['Haute Bridal Makeup', '24K Gold Cellular Facials', 'Russian Mani-Pedi', 'Vortex Hydrafacials'],
      si: ['රාජකීය මනාලියන් මේකප්', '24K රන් ෆේෂල්', 'රුසියානු මැනිකියෝර්', 'හයිඩ්‍රාෆේෂල් සත්කාර'],
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 289,
    portfolioImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'chloe-dupont',
    name: 'Chloé Dupont',
    title: { en: 'Senior Texture & Colour Alchemist', si: 'ජ්‍යෙෂ්ඨ කොණ්ඩා වර්ණ හා සත්කාර ශිල්පිනී' },
    experienceYears: 9,
    bio: {
      en: 'Parisian born, Chloe brings effortless French chic. Her mastery lies in custom blonde toning, caviar cellular botox, and humidity-proof nano-keratin rituals.',
      si: 'ප්‍රංශයේ උපත ලද ක්ලෝයි, ස්වභාවික ප්‍රංශ විලාසිතා සම්ප්‍රදාය පෙරදැරිව නවීන වර්ණ ගැන්වීම්, කෙරටින් හා කැවියර් සත්කාර සිදුකරයි.',
    },
    specialties: {
      en: ['Blonde Highlights', 'Caviar Hair Botox', 'Brazilian Nano-Keratin', 'Thermal Glossing'],
      si: ['බ්ලොන්ඩ් හයිලයිට්ස්', 'කැවියර් හෙයාර් බොටොක්ස්', 'බ්‍රසීලියානු කෙරටින්', 'තර්මල් ග්ලොසින්'],
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 215,
  },
  {
    id: 'tariq-al-mansoor',
    name: 'Tariq Al-Mansoor',
    title: { en: 'Executive Grooming Specialist', si: 'විධායක මට්ටමේ පිරිමි විලාසිතා ශිල්පී' },
    experienceYears: 10,
    bio: {
      en: 'Specializing in Middle Eastern and European classic beard sculpting, ceremonial grooming, and luxury hot towel straight-razor experiences.',
      si: 'මැදපෙරදිග හා යුරෝපීය සාම්ප්‍රදායික රැවුල් සැකසුම් සහ උණුසුම් තුවා රේසර් රැවුල කැපීම පිළිබඳ දශකයක පළපුරුද්දක් සහිතයි.',
    },
    specialties: {
      en: ['Ceremonial Grooming', 'Hot Towel Shave', 'Beard Re-pigmentation', 'Executive Cuts'],
      si: ['මංගල පිරිමි සත්කාර', 'උණුසුම් තුවා රැවුල කැපීම', 'රැවුල වර්ණ ගැන්වීම', 'විධායක කොණ්ඩා කැපුම්'],
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    reviewsCount: 198,
  },
];

export const samplePackages: PackageOffer[] = [
  {
    id: 'signature-gentlemans-grooming',
    name: {
      en: 'The Sovereign Grooming Ritual',
      si: 'රාජකීය පිරිමි සත්කාර පැකේජය',
    },
    tagline: {
      en: 'The definitive head-to-toe rejuvenation for the contemporary gentleman.',
      si: 'නූතන මහත්වරුන් සඳහාම වෙන්වූ සම්පූර්ණ සුවපහසු සත්කාරය.',
    },
    regularPriceLKR: 18500,
    promoPriceLKR: 14500,
    durationMinutes: 120,
    badge: { en: 'Gentlemen’s Choice', si: 'මහත්වරුන්ගේ තේරීම' },
    popular: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    includedServices: {
      en: [
        'Couture Gentleman’s Scissor Haircut & Fade',
        'Traditional 7-Step Hot Towel Straight-Razor Shave',
        'Express Charcoal Dermal Detox Facial',
        'Scalp Hydrotherapy Acupressure Rinse',
        'Complimentary single-malt or freshly brewed espresso',
      ],
      si: [
        'ප්‍රවීණ පිරිමි කොණ්ඩා කැපුම හා ෆේඩ් සැකසුම',
        'පියවර 7ක සාම්ප්‍රදායික උණුසුම් තුවා රැවුල කැපීම',
        'මුහුණේ කුණු දූවිලි ඉවත් කරන චාර්කෝල් ෆේෂල් සත්කාරය',
        'හිස්කබල හයිඩ්‍රොතෙරපි සේදීම සහ සම්බාහනය',
        'නොමිලේ ලබාදෙන ප්‍රණීත එස්ප්‍රෙසෝ කෝපි බඳුනක්',
      ],
    },
    terms: {
      en: [
        'Valid Monday through Thursday with advance booking.',
        'May not be combined with other promotional vouchers.',
        'Includes complimentary valet and private VIP grooming booth.',
      ],
      si: [
        'සඳුදා සිට බ්‍රහස්පතින්දා දක්වා පෙර වෙන්කිරීම් මත වලංගු වේ.',
        'වෙනත් වට්ටම් සමග එකවර භාවිත කළ නොහැක.',
        'නොමිලේ වාහන නැවැත්වීම සහ පෞද්ගලික VIP කුටිය හිමිවේ.',
      ],
    },
  },
  {
    id: 'hair-revival-luminescence',
    name: {
      en: 'The Caviar & Gold Luminescence Ritual',
      si: 'කැවියර් සහ රන් කොණ්ඩා පුනර්ජීවන පැකේජය',
    },
    tagline: {
      en: 'Complete cellular hair restoration and mirror glass luminescence.',
      si: 'හානිවූ හිසකෙස් අභ්‍යන්තරයෙන්ම සුවපත් කර වීදුරුවක් මෙන් දිදුලන නිමාවක් ලබාදෙයි.',
    },
    regularPriceLKR: 38000,
    promoPriceLKR: 29500,
    durationMinutes: 180,
    badge: { en: 'Most Requested', si: 'වඩාත් ඉල්ලුමක් ඇති' },
    popular: true,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    includedServices: {
      en: [
        'Caviar & Marine Collagen Hair Botox Treatment',
        'Diamond Gloss / Tone Balancing Glaze',
        'Microscopic Scalp Diagnostic Scan',
        'Signature Precision Haircut & Velvet Blowout',
        'Take-home post-treatment gold serum mini flask',
      ],
      si: [
        'කැවියර් හා කොලැජන් හෙයාර් බොටොක්ස් සත්කාරය',
        'ඩයමන්ඩ් ග්ලොස් වර්ණ සමබරතා සත්කාරය',
        'ක්ෂුද්‍ර කැමරා මගින් හිස්කබල පරීක්ෂාව',
        'නිරවද්‍ය කොණ්ඩා කැපුම සහ වෙල්වට් බ්ලෝඩ්‍රයි නිමාව',
        'නිවසේදී භාවිතයට විශේෂිත රන් සීරම් කුඩා බෝතලයක්',
      ],
    },
    terms: {
      en: ['Advance reservation recommended at least 48 hours prior.', 'Suitable for all chemically treated, bleached or frizzy hair types.'],
      si: ['පැය 48කට පෙර වෙන්කරවා ගැනීම සුදුසුය.', 'රසායනික සත්කාර කළ හෝ වියළි සියලුම කොණ්ඩ වර්ග සඳහා සුදුසුයි.'],
    },
  },
  {
    id: 'regal-bridal-beauty-sanctuary',
    name: {
      en: 'Regal Bridal Sanctuary Package',
      si: 'රාජකීය මංගල රූපලාවන්‍ය පැකේජය',
    },
    tagline: {
      en: 'The ultimate royal indulgence for the bride who demands absolute perfection.',
      si: 'මංගල දිනයේ පරිපූර්ණත්වයට පත්වීමට අපේක්ෂා කරන මනාලියන් වෙනුවෙන්මයි.',
    },
    regularPriceLKR: 110000,
    promoPriceLKR: 89000,
    durationMinutes: 360,
    badge: { en: 'Bridal Grand Luxe', si: 'මනාලියන්ගේ විශේෂිත' },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    includedServices: {
      en: [
        'Full HD Sweatproof Airbrush Bridal Makeup & Trial Session',
        'Haute Bridal Hair Styling with Fresh Florals & Veil Draping',
        '24K Imperial Gold Rejuvenation Facial (3 days prior)',
        '24K Gold & Champagne Royal Mani-Pedi with Paraffin',
        'Private Bridal Suite with Dedicated Butler & Champagne Bar',
      ],
      si: [
        'පූර්ණ HD එයාර්බ්‍රෂ් මංගල මේකප් සහ අත්හදා බැලීමේ සැසිය (Trial)',
        'රාජකීය මංගල කොණ්ඩා මෝස්තරය, මල් සහ වේල් සැකසුම',
        '24K රන් මුහුණු සත්කාරය (විවාහයට දින 3කට පෙර)',
        '24K රන් හා ෂැම්පේන් මැනිකියෝර් සහ පෙඩිකියෝර් සත්කාරය',
        'පෞද්ගලික කාමර පහසුකම්, පෞද්ගලික සේවකයෙකු සහ පාන සංග්‍රහය',
      ],
    },
    terms: {
      en: ['Requires 50% deposit upon booking confirmation.', 'Complimentary hospitality for up to 3 bridal party companions.'],
      si: ['වෙන්කිරීම තහවුරු කිරීමට 50%ක අත්තිකාරම් මුදලක් ගෙවිය යුතුය.', 'මනාලිය සමඟ පැමිණෙන තිදෙනෙකුට නොමිලේ ආගන්තුක සත්කාර හිමිවේ.'],
    },
  },
  {
    id: 'couples-private-salon-retreat',
    name: {
      en: 'Noir & Gold Duo Salon Retreat',
      si: 'යුවළක් සඳහා වූ සුවිශේෂී සැලෝන් සත්කාරය',
    },
    tagline: {
      en: 'A shared private sanctuary experience for couples celebrating distinction.',
      si: 'යුවළක් ලෙස එකට එක්ව ලබාගත හැකි අසමසම සුවපහසු සැලෝන් අත්දැකීමක්.',
    },
    regularPriceLKR: 44000,
    promoPriceLKR: 34500,
    durationMinutes: 150,
    badge: { en: 'For Two', si: 'දෙදෙනෙකු සඳහා' },
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    includedServices: {
      en: [
        'Private VIP Couple’s Suite with ambient gold lighting',
        'Dual Japanese Head Spa & Scalp Rainfall Therapy',
        'Bespoke Haircut & Styling for both guests',
        'Deluxe Foot Reflexology & Heated Basalt Stone Massage',
        'Artisanal charcuterie board and vintage champagne pairing',
      ],
      si: [
        'සුවපහසු රන්වන් ආලෝකය සහිත පෞද්ගලික VIP කාමරයක්',
        'දෙදෙනා සඳහාම ජපන් හෙඩ් ස්පා සහ රේන්ෆෝල් සත්කාරය',
        'දෙදෙනාටම ගැලපෙන පරිදි සිදුකරන කොණ්ඩා කැපුම් හා මෝස්තර',
        'උණුසුම් පාෂාණ පාද සම්බාහනය',
        'ප්‍රණීත ආහාර සහ ෂැම්පේන් පාන සංග්‍රහය',
      ],
    },
    terms: {
      en: ['Advance booking required 72 hours prior.', 'Available on weekends and special anniversary celebrations.'],
      si: ['පැය 72කට පෙර වෙන්කරවා ගත යුතුය.', 'සති අන්තයේ සහ සංවත්සර සැමරුම් සඳහා වඩාත් සුදුසුය.'],
    },
  },
];

export const sampleGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: { en: 'Architectural Bob with Honey Balayage', si: 'මීපැණි පැහැති බැලයාජ් බොබ් කොණ්ඩා මෝස්තරය' },
    category: 'haircuts',
    categoryLabel: { en: 'Haircuts', si: 'කොණ්ඩා මෝස්තර' },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Graduated dimensional bob cut by Elena Rostova using wet-dry shear techniques.', si: 'එලේනා රොස්ටෝවා විසින් නිර්මාණය කරන ලද නවීන බොබ් කොණ්ඩා කැපුම.' },
    stylistName: 'Elena Rostova',
  },
  {
    id: 'gal-2',
    title: { en: 'Classic Low Skin Fade & Sculpted Beard', si: 'ක්ලැසික් ලෝ ස්කින් ෆේඩ් සහ රැවුල් මෝස්තරය' },
    category: 'grooming',
    categoryLabel: { en: 'Men’s Grooming', si: 'පිරිමි විලාසිතා' },
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Seamless taper fade with hot towel razor lines by Marcus Vance.', si: 'මාකස් වැන්ස් විසින් සිදුකරන ලද නිරවද්‍ය ෆේඩ් සහ රැවුල් හැඩගැන්වීම.' },
    stylistName: 'Marcus Vance',
  },
  {
    id: 'gal-3',
    title: { en: 'Parisian Sunlit Balayage', si: 'ප්‍රංශ ක්‍රමයේ ස්වභාවික බැලයාජ් වර්ණ ගැන්වීම' },
    category: 'colour',
    categoryLabel: { en: 'Hair Colour', si: 'වර්ණ ගැන්වීම්' },
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Multi-dimensional golden blonde highlights painted with French clay lightener.', si: 'රන්වන් පැහැති ස්වභාවික බැලයාජ් වර්ණ ගැන්වීම.' },
    stylistName: 'Elena Rostova',
  },
  {
    id: 'gal-4',
    title: { en: 'Regal South Asian Bridal Ensemble', si: 'රාජකීය මනාලියන් හැඩගැන්වීම' },
    category: 'bridal',
    categoryLabel: { en: 'Bridal Couture', si: 'මනාලියන් හැඩගැන්වීම' },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Airbrush luminous complexion with architectural updo and fresh jasmine accents.', si: 'එයාර්බ්‍රෂ් තාක්ෂණයෙන් කරන ලද දෝෂ රහිත මනාලියන් මේකප් සහ කොණ්ඩා සැකසුම.' },
    stylistName: 'Ananya Sharma',
  },
  {
    id: 'gal-5',
    title: { en: 'Executive Hot Towel Ritual Suite', si: 'විධායක උණුසුම් තුවා සත්කාර කුටිය' },
    category: 'interior',
    categoryLabel: { en: 'Salon Interior', si: 'සැලෝන් අභ්‍යන්තරය' },
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Handcrafted vintage barber chairs upholstered in full-grain Italian leather.', si: 'ඉතාලි සම් වලින් නිමවූ සුවපහසු බාබර් ආසන සහිත පෞද්ගලික කුටිය.' },
    stylistName: 'Noir & Gold Interior Atelier',
  },
  {
    id: 'gal-6',
    title: { en: 'Tokyo Rainfall Head Spa Lounge', si: 'ජපන් රේන්ෆෝල් හෙඩ් ස්පා විවේකාගාරය' },
    category: 'interior',
    categoryLabel: { en: 'Salon Interior', si: 'සැලෝන් අභ්‍යන්තරය' },
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Acoustic-calibrated relaxation room featuring continuous water halo hydrotherapy basins.', si: 'නිහඬ, ශබ්ද විනිවිද නොයන පරිසරයක පිහිටි ජපන් හෙඩ් ස්පා විවේකාගාරය.' },
  },
  {
    id: 'gal-7',
    title: { en: '24K Liquid Gold Foil Dermal Application', si: '24K රන් පත්‍ර මුහුණු සත්කාරය' },
    category: 'styling',
    categoryLabel: { en: 'Aesthetic Styling', si: 'රූපලාවන්‍ය සත්කාර' },
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Bio-active pure gold leaf infusion during cellular renewal facial.', si: 'සම තරුණ බවින් තබන පිරිසිදු 24K රන් පත්‍ර සත්කාරය.' },
    stylistName: 'Ananya Sharma',
  },
  {
    id: 'gal-8',
    title: { en: 'Icy Platinum Gloss Transformation', si: 'ප්ලැටිනම් ග්ලොස් විලාසිතා පරිවර්තනය' },
    category: 'colour',
    categoryLabel: { en: 'Hair Colour', si: 'වර්ණ ගැන්වීම්' },
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
    description: { en: 'Bond-strengthened icy ash blonde gloss with glass-like light reflection.', si: 'වීදුරුවක් මෙන් ආලෝකය පරාවර්තනය වන ප්ලැටිනම් වර්ණ ගැන්වීම.' },
    stylistName: 'Chloe Dupont',
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: 'testi-1',
    clientName: 'Kavinda Jayasuriya',
    clientRole: { en: 'Managing Director, Colombo 07', si: 'කළමනාකාර අධ්‍යක්ෂ, කොළඹ 07' },
    review: {
      en: 'Noir & Gold has raised the bar for men’s luxury grooming in Sri Lanka. Marcus provides a level of precision and hospitality that rivals the finest barbers in London’s Mayfair.',
      si: 'ලංකාවේ පිරිමි රූපලාවන්‍ය ක්ෂේත්‍රයේ ඉහළම ප්‍රමිතිය නොයර් ඇන්ඩ් ගෝල්ඩ් විසින් සනිටුහන් කර ඇත. මාකස් මහතා ලබාදෙන සේවය ලන්ඩනයේ ප්‍රමුඛ පෙළේ ආයතනයකට නොදෙවෙනිය.',
    },
    serviceName: { en: 'Sovereign Hot Towel Shave & Cut', si: 'රාජකීය උණුසුම් තුවා රේසර් රැවුල කැපීම සහ කොණ්ඩා කැපුම' },
    rating: 5,
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'testi-2',
    clientName: 'Dr. Senuri Mendis',
    clientRole: { en: 'Consultant Dermatologist', si: 'චර්ම රෝග විශේෂඥ වෛද්‍යවරිය' },
    review: {
      en: 'As a dermatologist, I am exceedingly strict about ingredients. The ammonia-free French balayage and certified autoclave hygiene standards here are without peer. Elena is a true artist.',
      si: 'චර්ම රෝග වෛද්‍යවරියක් ලෙස මම භාවිත කරන ද්‍රව්‍ය ගැන දැඩි සැලකිල්ලක් දක්වමි. මෙහි ඇති පිරිසිදුකම හා උසස් ප්‍රමිතියේ නිෂ්පාදන සැබවින්ම විශිෂ්ටයි. එලේනා සැබෑ කලාකාරිනියකි.',
    },
    serviceName: { en: 'French Dimensional Balayage', si: 'ප්‍රංශ බැලයාජ් වර්ණ ගැන්වීම' },
    rating: 5,
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'testi-3',
    clientName: 'Nadeeka Wickramasinghe',
    clientRole: { en: 'Couture Fashion Bride', si: 'මංගල මනාලිය' },
    review: {
      en: 'My wedding morning at the private bridal suite was pure tranquility. Ananya and Elena perfected my look down to the millimeter. My makeup remained flawless through 14 hours of celebrations!',
      si: 'පෞද්ගලික VIP කුටියේදී මගේ මංගල දිනයේ උදෑසන ගතකිරීම ඉතා සුවපහසු විය. අනන්‍යා සහ එලේනා මගේ පෙනුම ඉතා ආකර්ෂණීය ලෙස සකස් කළ අතර පැය 14ක් පුරා මේකප් නොවෙනස්ව පැවතුණි.',
    },
    serviceName: { en: 'Haute Bridal Atelier Package', si: 'රාජකීය මනාලියන් හැඩගැන්වීමේ පැකේජය' },
    rating: 5,
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
];

export const sampleFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: {
      en: 'How do I book an appointment at NOIR & GOLD SALON?',
      si: 'නොයර් ඇන්ඩ් ගෝල්ඩ් හි වේලාවක් වෙන්කරවා ගන්නේ කෙසේද?',
    },
    answer: {
      en: 'You can reserve online directly through our website booking system by selecting your preferred ritual, master stylist, and time slot. Alternatively, you may contact our concierge desk directly via telephone (+94 11 268 8900) or WhatsApp (+94 77 123 4567).',
      si: 'අපගේ වෙබ් අඩවියේ ඇති පහසු පියවර මගින් ඔබට අවශ්‍ය සේවාව, ශිල්පියා සහ දිනය තෝරාගෙන ඔන්ලයින් වෙන්කරවා ගත හැක. එසේත් නැතිනම් අපගේ දුරකථන (+94 11 268 8900) හෝ වට්ස්ඇප් (+94 77 123 4567) මගින් සම්බන්ධ විය හැක.',
    },
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: {
      en: 'Can I request a specific Master Stylist or Director?',
      si: 'මට කැමති ප්‍රවීණ ශිල්පියෙකු හෝ අධ්‍යක්ෂවරයෙකු තෝරාගත හැකිද?',
    },
    answer: {
      en: 'Yes. During step 2 of our reservation flow, you can choose any specific stylist from our team, or select "Any Available Master Stylist" for maximum scheduling flexibility.',
      si: 'ඔව්, වෙන්කිරීමේ දෙවන පියවරේදී ඔබට කැමති ශිල්පියා තෝරාගත හැක. නැතහොත් වේලාවන් වල පහසුව අනුව "ඕනෑම ලබාගත හැකි ප්‍රවීණ ශිල්පියෙක්" තෝරාගත හැක.',
    },
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: {
      en: 'How can I reschedule or cancel my reserved appointment?',
      si: 'මගේ වෙන්කිරීම වෙනස් කිරීමට හෝ අවලංගු කිරීමට අවශ්‍ය නම් කුමක් කළ යුතුද?',
    },
    answer: {
      en: 'We kindly request at least 24 hours advance notice for standard appointments, and 72 hours for bridal suites and bespoke packages, to allow us to offer the slot to waitlisted guests.',
      si: 'සාමාන්‍ය සේවාවන් සඳහා අවම වශයෙන් පැය 24කට පෙරත්, මනාලියන් සහ විශේෂ පැකේජ සඳහා පැය 72කට පෙරත් අපගේ කාර්යාලය දැනුවත් කරන ලෙස කාරුණිකව ඉල්ලා සිටිමු.',
    },
  },
  {
    id: 'faq-4',
    category: 'services',
    question: {
      en: 'Are your salon hair colouring products ammonia-free and safe?',
      si: 'ඔබගේ කොණ්ඩා වර්ණ ගැන්වීමේ ආලේපන ඇමෝනියා රහිත හා ආරක්ෂිතද?',
    },
    answer: {
      en: 'Exclusively so. We formulate solely with premium ammonia-free oil delivery systems imported directly from France and Italy, fortified with natural argan oil and silk proteins.',
      si: 'පැහැදිලිවම ඔව්. අප භාවිත කරන්නේ ප්‍රංශයෙන් සහ ඉතාලියෙන් ආනයනය කරන ලද, ස්වභාවික ආර්ගන් තෙල් අඩංගු ඇමෝනියා රහිත ඉහළම ප්‍රමිතියේ වර්ණක පමණි.',
    },
  },
  {
    id: 'faq-5',
    category: 'etiquette',
    question: {
      en: 'How early should I arrive before my scheduled appointment?',
      si: 'මගේ වෙන්කළ වේලාවට කොපමණ වේලාවකට පෙර පැමිණිය යුතුද?',
    },
    answer: {
      en: 'We invite you to arrive 10 to 15 minutes before your treatment time. This allows you to check in with concierge, store your personal items in private lockers, and savor our complimentary espresso bar.',
      si: 'නියමිත වේලාවට මිනිත්තු 10-15කට පෙර පැමිණීම වඩාත් සුදුසුය. එවිට අපගේ ආගන්තුක විවේකාගාරයේ රැඳී සිටිමින් ප්‍රණීත කෝපි බඳුනක රස විඳිමින් සැහැල්ලු විය හැක.',
    },
  },
  {
    id: 'faq-6',
    category: 'payment',
    question: {
      en: 'What payment methods are accepted at the salon?',
      si: 'සැලෝන් එක තුළ පිළිගන්නා ගෙවීම් ක්‍රම මොනවාද?',
    },
    answer: {
      en: 'We accept all major international credit and debit cards (Visa, MasterCard, American Express), contactless NFC payments (Apple Pay, Google Pay), and local bank transfers. Cash is also accepted.',
      si: 'සියලුම ජාත්‍යන්තර ණය සහ හර කාඩ්පත් (Visa, MasterCard, Amex), Apple Pay, Google Pay සහ බැංකු මාරුකිරීම් පිළිගනු ලැබේ. මුදල් ගෙවීම්ද කළ හැක.',
    },
  },
];
