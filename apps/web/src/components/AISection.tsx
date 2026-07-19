import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Target, Recycle, LineChart } from 'lucide-react'

const capabilities = [
  { icon: TrendingUp, text: 'Predict shortages before they happen' },
  { icon: Target, text: 'Recommend reorder quantities, not just reorder dates' },
  { icon: Recycle, text: 'Identify waste patterns across lots and shifts' },
  { icon: LineChart, text: 'Analyze consumption trends by analyzer and test type' },
]

export default function AISection() {
  return (
    <section id="ai" className="py-20 px-8 bg-teal-mid text-cream">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-[13px] text-mint uppercase tracking-wider font-bold mb-4">
            <Sparkles size={14} /> Coming to every plan
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Your AI inventory assistant</h2>
          <p className="text-sage text-[15px] leading-relaxed">
            VetPurse is built to get smarter with every lot you scan. As usage data
            accumulates, the assistant moves from reporting what happened to
            recommending what to do next \u2014 built for where veterinary diagnostics
            is headed, not just where it is today.
          </p>
        </motion.div>

        <div className="space-y-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3.5 bg-teal-deep border border-teal-line rounded-xl px-5 py-4"
            >
              <c.icon size={18} className="text-mint shrink-0" />
              <p className="text-[14px]">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
