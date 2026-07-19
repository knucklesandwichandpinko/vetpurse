import { motion } from 'framer-motion'
import { AlertTriangle, FileSpreadsheet, PackageX, Boxes, Fingerprint, Layers } from 'lucide-react'

const problems = [
  { icon: AlertTriangle, title: 'Expired reagents', sub: 'Written off before anyone noticed the date.' },
  { icon: PackageX, title: 'Emergency shortages', sub: 'Running out mid-test with no backup lot.' },
  { icon: FileSpreadsheet, title: 'Manual spreadsheets', sub: 'Updated when someone remembers to.' },
  { icon: Fingerprint, title: 'Lost lot tracking', sub: "No record of which lot produced which result." },
  { icon: Boxes, title: 'Overstocking', sub: 'Tying up cash in reagents you won\u2019t use in time.' },
  { icon: Layers, title: 'Multiple analyzer brands', sub: 'Every manufacturer wants its own system.' },
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
          Your reagents are expensive.<br />Your inventory shouldn't be guesswork.
        </h2>
        <p className="text-sage text-[15px]">Most labs are one missed expiration date away from a scramble.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-white border border-ink/8 rounded-2xl p-6 hover:border-mint hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(21,50,48,0.08)] transition-all"
          >
            <p.icon size={22} className="text-teal-deep mb-3.5" strokeWidth={1.8} />
            <p className="text-[15px] font-bold mb-1.5">{p.title}</p>
            <p className="text-[13.5px] text-sage">{p.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
