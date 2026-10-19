# NOIR & GOLD SALON — Luxury Unisex Salon Website UI/UX

A luxury, multi-page, responsive unisex salon website prototype crafted with a Black & Gold luxury aesthetic, Cormorant Garamond editorial typography, and full Sinhala & English bilingual support.

---

## ✨ Features

- **Luxury Design System**: Black & Gold aesthetic (`#101010` Noir, `#C9A45C` Tuscan Gold, `#E5C982` Champagne Highlight).
- **Bilingual Experience**: Instant toggle between **English** and **සිංහල** (Sinhala Unicode with *Noto Sans Sinhala*).
- **12 Dedicated Pages & Views**:
  1. **Home**: Cinematic Hero, Philosophy, Featured Services, Why Us, Atmosphere, Interactive Before-and-After Slider, Stylists, Testimonials, Packages, Map & Hours.
  2. **Services**: 8 Categories, keyword search, price & duration sorting, empty states.
  3. **Service Details**: Full overview, included rituals, benefits, prep tips, recommended master stylists.
  4. **Appointment Booking**: 7-Step Interactive Reservation Wizard with live summary card, 14-day calendar, and confirmation preview.
  5. **Our Story**: Heritage, core pillars, medical autoclave hygiene standards, and salon statistics.
  6. **Gallery**: Filterable categories and responsive grid with fullscreen Lightbox modal preview.
  7. **Our Team**: Senior stylist directory with profile modals and quick booking.
  8. **Offers & Packages**: Curated luxury rituals with regular vs. promo pricing and included benefits.
  9. **Contact & Location**: Concierge telephone, WhatsApp direct button, consultation form, and Colombo 07 map.
  10. **Customer FAQ**: Expandable accordion FAQs with category filters and search.
  11. **Booking Confirmation**: Summary card, printable receipt, and simulated calendar export.
  12. **404 State**: Luxury error screen with recovery links.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 Free Hosting Guide (GitHub Pages / Vercel / Netlify)

### Option 1: GitHub Pages (Automatic via GitHub Actions)
1. Create a new repository on GitHub (e.g. `noir-and-gold-salon`).
2. Run in terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The site will automatically build and publish!

### Option 2: Vercel (1-Click)
- Import your GitHub repo on [Vercel](https://vercel.com).
- Click **Deploy** (`vercel.json` is already included).

### Option 3: Netlify (1-Click)
- Import your GitHub repo on [Netlify](https://netlify.com).
- Click **Deploy** (`netlify.toml` is already included).
