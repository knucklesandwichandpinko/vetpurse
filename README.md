# VetPurse

Veterinary diagnostic reagent inventory management. Tracks lots, expiration
dates, and burn rate across every analyzer brand in a clinic's lab, so
nothing expires unnoticed and nothing runs out mid-test.

## Structure

```
apps/
  web/    marketing site (React + TypeScript + Tailwind v4 + Framer Motion)
```

See [apps/web/README.md](apps/web/README.md) for setup instructions.

The iOS product app has moved to its own repo:
[vetpurse-app](https://github.com/knucklesandwichandpinko/vetpurse-app).

## Status

Early prototype stage. No backend yet — all data is local mock/demo state
and does not persist. See the app's README for what's real vs. placeholder.

## Stack

- **Web:** React, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react
- **Planned backend:** Supabase (Postgres + Auth + Realtime)
