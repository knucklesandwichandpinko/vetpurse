import { motion } from 'framer-motion'
import { ScanLine, ChartNoAxesCombined, CalendarClock, ArrowDownWideNarrow, Blocks, PackageCheck } from 'lucide-react'

const features = [
  {
    icon: ScanLine,
    title: 'Smart scan tracking',
    sub: 'Scan product barcodes or enter items manually. VetPurse tracks lot number, expiration date, quantity, manufacturer, category, and inventory status.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Burn-rate intelligence',
    sub: 'The system learns usage patterns and explains inventory in plain language: "Approximately 18 days of stock remain based on your current usage."',
  },
  {
    icon: CalendarClock,
    title: 'Expiration intelligence',
    sub: 'A live countdown on every lot, waste-prevention alerts, and recommendations before products expire.',
  },
  {
    icon: ArrowDownWideNarrow,
    title: 'FEFO guidance',
    sub: 'Automatically apply first-expire-first-out inventory guidance: "Use Lot CHM-8823 before Lot CHM-9011 because it expires sooner."',
  },
  {
    icon: Blocks,
    title: 'Multi-brand tracking',
    sub: 'Track veterinary diagnostic reagents and consumables from Antech, IDEXX, and Zoetis. Keep all products, manufacturers, lots, and expiration dates visible in one inventory system.',
  },
  {
    icon: PackageCheck,
    title: 'Consumable tracking',
    sub: 'Track cartridges, slides, reagent packs, controls, sample supplies, and other laboratory consumables alongside reagent inventory.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-3">Built for the lab, not just the shelf</h2>
        <p className="text-sage text-[15px]">
          Everything a general inventory tool misses. Reagents and diagnostic consumables
          behave differently from ordinary retail stock. VetPurse treats them that way.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-5 bg-teal-deep border border-teal-line rounded-2xl p-6 hover:border-mint transition-colors"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-teal-mid flex items-center justify-center">
              <f.icon size={20} className="text-mint" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[16px] font-bold mb-1 text-cream">{f.title}</p>
              <p className="text-[14px] text-sage leading-relaxed">{f.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
