import { useState } from 'react'
import { motion } from 'framer-motion'
import { PackageMinus, CalendarClock, Activity, PiggyBank, ArrowDownWideNarrow, AlertTriangle } from 'lucide-react'
import { inventory, recentActivity, type Manufacturer, type Category } from '../data/inventoryDemo'

const stats = [
  { icon: PackageMinus, label: 'Low-stock items', value: '5', tone: 'warn' },
  { icon: CalendarClock, label: 'Lots expiring soon', value: '12', tone: 'warn' },
  { icon: Activity, label: 'Monthly usage', value: '1,240 units', tone: 'neutral' },
  { icon: PiggyBank, label: 'Waste prevented', value: '$2,300', tone: 'good' },
]

const manufacturers: (Manufacturer | 'All')[] = ['All', 'Antech', 'IDEXX', 'Zoetis']
const categories: (Category | 'All')[] = ['All', 'Reagents', 'Consumables']

const statusStyles: Record<string, string> = {
  Critical: 'bg-red-400/15 text-red-300',
  Warning: 'bg-amber-400/15 text-amber-300',
  'Expiring soon': 'bg-amber-400/15 text-amber-300',
  Monitor: 'bg-mint/15 text-mint',
  Healthy: 'bg-emerald-400/15 text-emerald-300',
}

export default function DashboardPreview() {
  const [manufacturer, setManufacturer] = useState<Manufacturer | 'All'>('All')
  const [category, setCategory] = useState<Category | 'All'>('All')

  const filtered = inventory.filter(
    (i) => (manufacturer === 'All' || i.manufacturer === manufacturer) && (category === 'All' || i.category === category),
  )

  const sortedByExpiry = [...inventory].sort((a, b) => a.daysRemaining - b.daysRemaining)
  const criticalItems = inventory.filter((i) => i.status === 'Critical' || i.status === 'Warning')
  const maxDays = Math.max(...inventory.map((i) => i.daysRemaining))

  return (
    <section id="dashboard" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto mb-12"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">Product preview</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">See your whole lab at a glance</h2>
        <p className="text-sage text-[15px]">One dashboard for every reagent, consumable, lot, expiration date, and reorder.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto bg-teal-deep rounded-3xl p-6 md:p-9 text-cream"
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-teal-mid border border-teal-line rounded-xl p-4">
              <s.icon size={18} className="text-mint mb-3" />
              <p className="text-xl font-bold mb-0.5">{s.value}</p>
              <p className="text-[12px] text-sage">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            {manufacturers.map((m) => (
              <button
                key={m}
                onClick={() => setManufacturer(m)}
                className={`text-[11.5px] px-3 py-1.5 rounded-full border transition-colors ${
                  manufacturer === m
                    ? 'bg-mint text-ink border-mint font-semibold'
                    : 'border-teal-line text-sage hover:border-mint hover:text-mint'
                }`}
              >
                {m === 'All' ? 'All Manufacturers' : m}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-[11.5px] px-3 py-1.5 rounded-full border transition-colors ${
                  category === c
                    ? 'bg-mint text-ink border-mint font-semibold'
                    : 'border-teal-line text-sage hover:border-mint hover:text-mint'
                }`}
              >
                {c === 'All' ? 'All Categories' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory table */}
        <div className="bg-teal-mid border border-teal-line rounded-xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-[12.5px]">
              <thead>
                <tr className="text-sage text-left border-b border-teal-line">
                  <th className="px-4 py-2.5 font-medium">Product</th>
                  <th className="px-4 py-2.5 font-medium hidden sm:table-cell">Manufacturer</th>
                  <th className="px-4 py-2.5 font-medium">Lot</th>
                  <th className="px-4 py-2.5 font-medium hidden sm:table-cell">Qty</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.lot} className="border-b border-teal-line/60 last:border-0">
                    <td className="px-4 py-2.5">{item.name}</td>
                    <td className="px-4 py-2.5 text-sage hidden sm:table-cell">{item.manufacturer}</td>
                    <td className="px-4 py-2.5 text-sage">{item.lot}</td>
                    <td className="px-4 py-2.5 text-sage hidden sm:table-cell">{item.quantityRemaining}</td>
                    <td className="px-4 py-2.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${statusStyles[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-4 text-sage text-center">
                      No products match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Expiration timeline */}
          <div className="bg-teal-mid border border-teal-line rounded-xl p-4">
            <p className="text-[12.5px] font-semibold mb-3 flex items-center gap-1.5">
              <CalendarClock size={14} className="text-mint" /> Expiration timeline
            </p>
            <div className="space-y-2.5">
              {sortedByExpiry.slice(0, 4).map((item) => (
                <div key={item.lot}>
                  <div className="flex justify-between text-[11.5px] text-sage mb-1">
                    <span>{item.name} · {item.lot}</span>
                    <span>{item.daysRemaining}d</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-teal-line overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.daysRemaining <= 6 ? 'bg-red-400' : item.daysRemaining <= 12 ? 'bg-amber-400' : 'bg-mint'}`}
                      style={{ width: `${Math.max(8, (item.daysRemaining / maxDays) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEFO panel + reorder alerts */}
          <div className="bg-teal-mid border border-teal-line rounded-xl p-4">
            <p className="text-[12.5px] font-semibold mb-3 flex items-center gap-1.5">
              <ArrowDownWideNarrow size={14} className="text-mint" /> FEFO recommendations
            </p>
            <div className="space-y-2 mb-4">
              {inventory
                .filter((i) => i.status === 'Critical' || i.status === 'Expiring soon')
                .slice(0, 2)
                .map((item) => (
                  <p key={item.lot} className="text-[11.5px] text-sage leading-relaxed">
                    <span className="text-cream font-medium">{item.name} {item.lot}:</span> {item.recommendation}
                  </p>
                ))}
            </div>

            <p className="text-[12.5px] font-semibold mb-2 flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-mint" /> Reorder alerts
            </p>
            <div className="flex flex-wrap gap-1.5">
              {criticalItems.map((item) => (
                <span key={item.lot} className={`px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${statusStyles[item.status]}`}>
                  {item.name} {item.lot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-teal-mid border border-teal-line rounded-xl p-4 mt-4">
          <p className="text-[12.5px] font-semibold mb-3">Recent inventory activity</p>
          <div className="space-y-2">
            {recentActivity.map((a) => (
              <div key={a.text} className="flex justify-between gap-3 text-[11.5px]">
                <span className="text-sage">{a.text}</span>
                <span className="text-sage/60 shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
