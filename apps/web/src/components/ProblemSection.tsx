import { motion } from 'framer-motion'
import { AlertTriangle, FileSpreadsheet, PackageX, Boxes, Fingerprint, Layers } from 'lucide-react'

const problems = [
  { icon: AlertTriangle, title: 'Expired reagents', sub: 'Written off before anyone noticed the date.' },
  { icon: PackageX, title: 'Emergency shortages', sub: 'Running out during testing with no replacement stock available.' },
  { icon: FileSpreadsheet, title: 'Manual spreadsheets', sub: 'Updated only when someone remembers.' },
  { icon: Fingerprint, title: 'Lost lot tracking', sub: 'No reliable record of which lots were received, opened, used, or discarded.' },
  { icon: Boxes, title: 'Overstocking', sub: 'Tying up money in products that may not be used before expiration.' },
  { icon: Layers, title: 'Disconnected supplier inventory', sub: 'Reagents and consumables from different manufacturers are tracked in separate places.' },
]

export default function ProblemSection() {
  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-12"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">The problem</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          Your reagents are expensive.<br />Your inventory should not be guesswork.
        </h2>
        <p className="text-sage text-[15px]">Most labs are one missed expiration date away from a scramble.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-teal-deep border border-teal-line rounded-2xl p-6 hover:border-mint hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.35)] transition-all"
          >
            <p.icon size={22} className="text-mint mb-3.5" strokeWidth={1.8} />
            <p className="text-[15px] font-bold mb-1.5 text-cream">{p.title}</p>
            <p className="text-[13.5px] text-sage">{p.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
