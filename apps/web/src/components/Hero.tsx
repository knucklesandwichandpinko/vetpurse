import { motion } from 'framer-motion'
import { FlaskConical, TrendingDown, Clock, ScanLine, Sparkles } from 'lucide-react'

const floatCard = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: [0, -10, 0],
  },
  transition: {
    opacity: { duration: 0.6, delay },
    y: { duration: 4, delay: delay + 0.6, repeat: Infinity, ease: 'easeInOut' as const },
  },
})

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-teal-deep text-cream pt-24 pb-28 px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 78% 15%, rgba(111,224,197,0.16), transparent 55%)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[13px] text-mint uppercase tracking-wider px-3.5 py-1.5 border border-mint/35 rounded-full mb-6"
        >
          <FlaskConical size={14} /> Built for the diagnostic lab
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
        >
          Reagent inventory that thinks ahead
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-sage max-w-xl mx-auto mb-9"
        >
          VetPurse tracks every lot, predicts when you'll run out, and tells you which one
          to use first — across every analyzer brand in your lab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-3 justify-center mb-20"
        >
          <a href="#pricing" className="px-7 py-3.5 rounded-full bg-mint text-ink font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(111,224,197,0.3)] transition-all">
            Try it free
          </a>
          <a href="#how" className="px-7 py-3.5 rounded-full border border-cream/25 text-cream text-[15px] hover:bg-cream/8 transition-colors">
            See how it works
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto hidden md:flex justify-between items-start gap-4 px-4">
        <motion.div {...floatCard(0.5)} className="bg-teal-mid border border-teal-line rounded-2xl p-4 w-52">
          <ScanLine size={18} className="text-mint mb-2" />
          <p className="text-[13px] font-semibold">HT5 Chemistry Pack</p>
          <p className="text-[12px] text-sage">Lot CHM-8823 · 6 left</p>
        </motion.div>

        <motion.div {...floatCard(0.8)} className="bg-teal-mid border border-teal-line rounded-2xl p-4 w-52 mt-10">
          <Clock size={18} className="text-mint mb-2" />
          <p className="text-[13px] font-semibold">3 lots expiring</p>
          <p className="text-[12px] text-sage">Within the next 14 days</p>
        </motion.div>

        <motion.div {...floatCard(0.65)} className="bg-teal-mid border border-teal-line rounded-2xl p-4 w-52">
          <TrendingDown size={18} className="text-mint mb-2" />
          <p className="text-[13px] font-semibold">18 days remaining</p>
          <p className="text-[12px] text-sage">Catalyst slides, current usage</p>
        </motion.div>

        <motion.div {...floatCard(0.95)} className="bg-teal-mid border border-teal-line rounded-2xl p-4 w-52 mt-10">
          <Sparkles size={18} className="text-mint mb-2" />
          <p className="text-[13px] font-semibold">Reorder suggested</p>
          <p className="text-[12px] text-sage">Element i+ Lyte Cartridge</p>
        </motion.div>
      </div>
    </header>
  )
}
