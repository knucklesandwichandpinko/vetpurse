import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    sub: 'per clinic / month',
    features: ['Scan-in, scan-out tracking', 'Up to 25 active lots', 'Expiration alerts'],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$49',
    sub: 'per location / month',
    features: ['Everything in Free', 'Burn rate forecasting', 'Reorder suggestions', 'FEFO pick guidance'],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    sub: 'multi-site pricing',
    features: ['Everything in Professional', 'Multi-location dashboard', 'Role-based access', 'AI inventory assistant'],
    cta: 'Talk to sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto mb-12"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">Pricing</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">Start free. Upgrade when your inventory grows.</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl p-7 bg-white ${t.featured ? 'border-2 border-mint-dim shadow-[0_20px_40px_rgba(21,50,48,0.1)]' : 'border border-ink/8'}`}
          >
            {t.featured && (
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-mint/20 text-mint-dim mb-3">Most popular</span>
            )}
            <p className="text-sage text-sm mb-1">{t.name}</p>
            <p className="text-3xl font-bold mb-0.5">{t.price}</p>
            <p className="text-[12px] text-sage mb-5">{t.sub}</p>
            <div className="space-y-2.5 mb-6">
              {t.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[13.5px]">
                  <Check size={15} className="text-mint-dim shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <a
              href="#"
              className={`block text-center rounded-full py-2.5 text-[14px] font-semibold transition-all hover:-translate-y-0.5 ${
                t.featured ? 'bg-teal-deep text-cream hover:bg-mint-dim' : 'border border-ink/15 text-ink hover:border-teal-deep'
              }`}
            >
              {t.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
