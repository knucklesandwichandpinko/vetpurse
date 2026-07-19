import { motion } from 'framer-motion'
import { ScanBarcode, Activity, Sparkles } from 'lucide-react'

const steps = [
  { icon: ScanBarcode, title: 'Scan', sub: 'Every new product lot is registered once with its manufacturer, expiration date, and quantity.' },
  { icon: Activity, title: 'Track', sub: 'Stock levels update as reagents and consumables are received, opened, used, adjusted, or discarded.' },
  { icon: Sparkles, title: 'Predict', sub: 'Reorder and expiration alerts appear before the situation becomes urgent.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-8 bg-teal-deep text-cream">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto mb-16"
      >
        <span className="text-[13px] text-mint uppercase tracking-wider font-bold block mb-2.5">The loop</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">How it works</h2>
        <p className="text-sage text-[15px]">Three steps, repeated every time a reagent or consumable moves.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
        <div className="hidden sm:block absolute top-[26px] left-[16.6%] right-[16.6%] h-px bg-teal-line">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-mint"
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
            className="relative z-10 text-center px-4"
          >
            <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-mint text-ink flex items-center justify-center mx-auto mb-4">
              <s.icon size={20} />
            </div>
            <h3 className="text-[15.5px] font-bold mb-1.5">{s.title}</h3>
            <p className="text-[13.5px] text-sage max-w-[220px] mx-auto">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
