import { motion } from 'framer-motion'
import { PackageMinus, CalendarClock, Activity, PiggyBank } from 'lucide-react'

const stats = [
  { icon: PackageMinus, label: 'Low stock', value: '5 items', tone: 'warn' },
  { icon: CalendarClock, label: 'Expiring soon', value: '12 lots', tone: 'warn' },
  { icon: Activity, label: 'Monthly usage', value: '1,240 tests', tone: 'neutral' },
  { icon: PiggyBank, label: 'Waste prevented', value: '$2,300', tone: 'good' },
]

export default function DashboardPreview() {
  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto mb-12"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">Product preview</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">See your whole lab, at a glance</h2>
        <p className="text-sage text-[15px]">One dashboard for every analyzer, every lot, every reorder.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-teal-deep rounded-3xl p-7 md:p-9 text-cream"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[13px] text-sage mb-1">Inventory health score</p>
            <p className="text-4xl font-bold text-mint">92<span className="text-xl">%</span> <span className="text-base font-normal text-sage">optimized</span></p>
          </div>
          <div className="hidden sm:block w-20 h-20 rounded-full border-4 border-mint/25 relative">
            <div className="absolute inset-0 rounded-full border-4 border-mint" style={{ clipPath: 'inset(0 0 8% 0)' }} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-teal-mid border border-teal-line rounded-xl p-4">
              <s.icon size={18} className="text-mint mb-3" />
              <p className="text-xl font-bold mb-0.5">{s.value}</p>
              <p className="text-[12px] text-sage">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
