import { motion } from 'framer-motion'
import { Home, LayoutGrid, ScanLine, Bell, Settings2, Search, SignalHigh, Wifi, BatteryFull, ScanBarcode, MapPin, Sparkles, Apple } from 'lucide-react'
import { inventory } from '../data/inventoryDemo'
import { PlayStoreIcon } from './icons/SocialIcons'

const statusDot: Record<string, string> = {
  Critical: 'bg-red-400',
  Warning: 'bg-amber-400',
  'Expiring soon': 'bg-amber-400',
  Monitor: 'bg-mint',
  Healthy: 'bg-emerald-400',
}

const perks = [
  { icon: ScanBarcode, text: 'Scan a lot barcode the moment it comes off the shelf' },
  { icon: Bell, text: 'Get expiration and low-stock alerts wherever you are' },
  { icon: MapPin, text: 'Log usage right at the bench, no workstation needed' },
]

function StoreBadge({
  href,
  Icon,
  eyebrow,
  title,
}: {
  href: string
  Icon: React.ComponentType<{ size?: number; className?: string }>
  eyebrow: string
  title: string
}) {
  return (
    <a
      href={href}
      className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-teal-deep border border-teal-line hover:border-mint transition-colors"
    >
      <Icon size={22} className="text-cream shrink-0" />
      <div className="leading-tight text-left">
        <p className="text-[9px] text-sage uppercase tracking-wide">{eyebrow}</p>
        <p className="text-[13.5px] font-semibold text-cream -mt-0.5">{title}</p>
      </div>
      <span className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-mint text-ink">
        Soon
      </span>
    </a>
  )
}

export default function MobileAppPreview() {
  const preview = inventory.slice(0, 4)

  return (
    <section className="py-20 px-8 bg-teal-mid">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-[13px] text-mint uppercase tracking-wider font-bold mb-4">
            <Sparkles size={14} /> In your pocket
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Scan, track, and get alerts from the floor</h2>
          <p className="text-sage text-[15px] leading-relaxed mb-7">
            The VetPurse mobile app puts the same lot tracking, expiration alerts, and FEFO guidance
            in your techs' pockets — so inventory gets logged the moment it happens, not at the end
            of the shift.
          </p>

          <div className="space-y-3 mb-7">
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-3.5 bg-teal-deep border border-teal-line rounded-xl px-5 py-3.5">
                <p.icon size={17} className="text-mint shrink-0" />
                <p className="text-[13.5px]">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreBadge href="#" Icon={Apple} eyebrow="Download on the" title="App Store" />
            <StoreBadge href="#" Icon={PlayStoreIcon} eyebrow="Get it on" title="Google Play" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-[272px] h-[560px] rounded-[2.6rem] border-[10px] border-teal-line bg-ink shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-teal-line rounded-b-2xl z-20" />

            {/* status bar */}
            <div className="relative z-10 pt-3.5 px-6 flex items-center justify-between text-cream">
              <span className="text-[11px] font-semibold">9:41</span>
              <div className="flex items-center gap-1 text-cream">
                <SignalHigh size={12} />
                <Wifi size={12} />
                <BatteryFull size={14} />
              </div>
            </div>

            {/* app header */}
            <div className="px-5 pt-4 pb-3 flex items-center justify-between">
              <p className="text-[15px] font-bold text-cream">VetPurse</p>
              <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
                <ScanLine size={15} className="text-ink" />
              </div>
            </div>

            {/* search */}
            <div className="mx-5 mb-3 flex items-center gap-2 bg-teal-mid border border-teal-line rounded-full px-3.5 py-2">
              <Search size={13} className="text-sage" />
              <span className="text-[11.5px] text-sage">Search inventory</span>
            </div>

            {/* inventory list */}
            <div className="px-5 space-y-2.5">
              {preview.map((item) => (
                <div
                  key={item.lot}
                  className="bg-teal-mid border border-teal-line rounded-xl px-3.5 py-2.5 flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-cream truncate">{item.name}</p>
                    <p className="text-[10.5px] text-sage">{item.manufacturer} &middot; Lot {item.lot}</p>
                  </div>
                  <span className={`w-2 h-2 rounded-full shrink-0 ml-2 ${statusDot[item.status]}`} />
                </div>
              ))}
            </div>

            {/* bottom tab bar */}
            <div className="absolute bottom-0 inset-x-0 border-t border-teal-line bg-teal-deep px-6 pt-3 pb-6 flex items-center justify-between">
              <Home size={18} className="text-sage" />
              <LayoutGrid size={18} className="text-mint" />
              <div className="w-9 h-9 -mt-6 rounded-full bg-mint flex items-center justify-center shadow-[0_4px_12px_rgba(69,196,255,0.4)]">
                <ScanLine size={16} className="text-ink" />
              </div>
              <div className="relative">
                <Bell size={18} className="text-sage" />
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-mint text-ink text-[8px] font-bold flex items-center justify-center">
                  3
                </span>
              </div>
              <Settings2 size={18} className="text-sage" />
            </div>

            {/* home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-sage/40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
