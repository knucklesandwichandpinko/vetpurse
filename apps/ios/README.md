# VetPurse — iOS app (Expo / React Native)

A five-tab reagent inventory app: Home, Scan, Inventory, Alerts, Settings.

## Run it (fastest way to see it on a real iPhone)

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npx expo start
   ```
3. Install the free "Expo Go" app from the App Store on your iPhone, then scan
   the QR code that appears in the terminal. The app opens live on your phone —
   no Mac, no Xcode, no Apple Developer account needed for this step.

## Building an actual installable / App Store app

Expo Go is great for development but isn't what you'd hand to a clinic.
To get a real standalone .ipa:

1. Create a free Expo (EAS) account at expo.dev.
2. `npm install -g eas-cli`
3. `eas build --platform ios`

This builds in Expo's cloud, so you still don't need a Mac. You will need:

- An Apple Developer Program account ($99/year) to install on real devices
  outside of Expo Go, or to submit to the App Store.
- `eas submit` to push the build to App Store Connect once you have that
  account.

## Structure

```
App.tsx                        tab navigator, wires all 5 screens
src/
  theme/colors.ts               VetPurse teal palette
  data/mockData.ts               lots + alerts mock data
  data/InventoryContext.tsx      shared state: scan-to-log, register lot, settings toggles
  components/StatusBadge.tsx     reusable in-stock / reorder / expiring pill
  screens/
    HomeScreen.tsx               dashboard: low stock + expiring counts, recent activity
    ScanScreen.tsx                scan simulate flow, FEFO nudge, new-lot registration
    InventoryScreen.tsx          searchable lot list
    AlertsScreen.tsx             reorder / expiration / FEFO notifications
    SettingsScreen.tsx           push alerts, FEFO enforcement, auto-reorder,
                                  team access, connected analyzers, CSV export, units
```

## What's real vs. placeholder

- All data lives in React state (InventoryContext) and resets on app reload.
  There's no backend yet — see the earlier Supabase discussion for the
  intended real data layer.
- Scan simulation buttons stand in for the camera/barcode reader, since a
  real scanner needs a device camera and the `expo-camera` + barcode
  scanning module, which needs to be tested on a physical phone, not this
  build environment.
- Settings toggles work and persist for the session, but don't yet connect
  to any backend or actually change automation behavior.
