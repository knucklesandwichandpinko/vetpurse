# VetPurse marketing site

React + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react.

## Setup

```
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```
npm run build
```

Output goes to `dist/` — deploy that folder to Netlify, Vercel, or any static host.

## Structure

```
src/
  App.tsx                  composes every section in order
  index.css                Tailwind import + teal theme tokens (@theme block)
  components/
    Nav.tsx
    Hero.tsx                large headline, floating dashboard cards, animated intro
    ProblemSection.tsx      six pain-point cards
    Features.tsx            five detailed feature rows
    AISection.tsx           "Your AI inventory assistant"
    HowItWorks.tsx          scan / track / predict animated timeline
    DashboardPreview.tsx    inventory health score + stat cards
    Pricing.tsx             Free / Professional / Enterprise
    TrustSection.tsx        analyzer brand compatibility (Antech intentionally omitted, see below)
    FAQ.tsx                 accordion
    Footer.tsx
```

## Notes and open decisions

- Theme tokens live in src/index.css under an @theme block (Tailwind v4 syntax,
  no tailwind.config.js needed). Change --color-mint, --color-teal-deep, etc there.
- Font is set to Calibri with a Carlito/Segoe UI fallback stack, per an earlier
  explicit request. This is a different direction than the Linear/Vercel/Stripe-style
  typography implied by the design brief. Worth a deliberate call on which wins.
- Pricing was previously deferred and has been re-added here per the latest brief.
  Flagging the reversal so it is a conscious choice.
- Trust section intentionally does not list Antech, even though the original brief
  did. Publicly naming an employer on a competing product's marketing page is a
  real conflict-of-interest risk. Add it back only if that has been explicitly
  cleared internally.
- All copy, stats (92% optimized, $2,300 waste prevented, etc) and dashboard
  numbers are placeholder marketing content, not real product data.
- Buttons do not yet connect to a real signup flow.
