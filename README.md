# VetPurse

Veterinary diagnostic reagent inventory management. Tracks lots, expiration
dates, and burn rate across every analyzer brand in a clinic's lab, so
nothing expires unnoticed and nothing runs out mid-test.

## Structure

This is a monorepo with two apps:

```
apps/
  web/    marketing site (React + TypeScript + Tailwind v4 + Framer Motion)
  ios/    mobile app (Expo / React Native + TypeScript)
```

Each app has its own README with setup instructions.

## Status

Early prototype stage. No backend yet — all data in both apps is local
mock/demo state and does not persist. See each app's README for what's
real vs. placeholder.

## Stack

- **Web:** React, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react
- **iOS:** Expo, React Native, TypeScript, React Navigation
- **Planned backend:** Supabase (Postgres + Auth + Realtime)
