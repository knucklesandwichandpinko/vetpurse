import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What happens if we have multiple analyzers?',
    a: 'VetPurse tracks reagents across every analyzer brand in one place, so a mixed fleet works the same as a single-vendor lab.',
  },
  {
    q: 'Can VetPurse track different reagent lots?',
    a: 'Yes. Every lot is tracked individually, with its own expiration date and quantity, even when multiple lots of the same product are in stock at once.',
  },
  {
    q: 'Does it replace our analyzer software?',
    a: 'No. VetPurse runs alongside your existing analyzer software and practice management system \u2014 it focuses specifically on reagent and consumable inventory.',
  },
  {
    q: 'Can multiple staff members use it?',
    a: 'Yes. Any tech can scan reagents in or out, and activity is logged so you can see who did what and when.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto mb-12"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">FAQ</span>
        <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="bg-white border border-ink/8 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-[14.5px] font-semibold">{f.q}</span>
              <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={18} className="text-sage shrink-0" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-[13.5px] text-sage leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
