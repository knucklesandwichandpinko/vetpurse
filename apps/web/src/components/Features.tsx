import { motion } from 'framer-motion'
import { ScanLine, ChartNoAxesCombined, CalendarClock, ArrowDownWideNarrow, Blocks } from 'lucide-react'

const features = [
  {
    icon: ScanLine,
    title: 'Smart scan tracking',
    sub: 'Scan reagent barcodes or enter lots manually. VetPurse tracks lot number, expiration date, quantity, manufacturer, and which analyzer each item works with.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Burn rate intelligence',
    sub: 'The system learns your testing volume and tells you what that means in plain terms: "18 days of Catalyst slides remaining based on your current pace."',
  },
  {
    icon: CalendarClock,
    title: 'Expiration intelligence',
    sub: 'A live countdown on every lot, waste prevention flags before it\u2019s too late, and priority recommendations on what to use next.',
  },
  {
    icon: ArrowDownWideNarrow,
    title: 'FEFO guidance',
    sub: 'First-expire-first-out, enforced automatically. "Use Lot A before Lot B \u2014 it expires sooner." No more guessing which box to grab.',
  },
  {
    icon: Blocks,
    title: 'Multi-analyzer support',
    sub: 'One system across Fujifilm NX Series, Element i+, HT5, DCX, DC5x, Heska, EPOC, Eurolyser, and Nu.Q.',
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
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">Built for the lab, not just the shelf</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">Everything a general inventory tool misses</h2>
        <p className="text-sage text-[15px]">Reagents behave differently from retail stock. VetPurse treats them that way.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-5 bg-white border border-ink/8 rounded-2xl p-6 hover:border-mint transition-colors"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-teal-deep flex items-center justify-center">
              <f.icon size={20} className="text-mint" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-[16px] font-bold mb-1">{f.title}</p>
              <p className="text-[14px] text-sage leading-relaxed">{f.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
