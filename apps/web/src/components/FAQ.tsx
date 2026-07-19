import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Can VetPurse track products from different manufacturers?',
    a: 'Yes. VetPurse is designed to track reagents and consumables from Antech, IDEXX, and Zoetis in one place.',
  },
  {
    q: 'Can VetPurse track different reagent lots?',
    a: 'Yes. Each lot can have its own lot number, manufacturer, expiration date, quantity, usage history, product category, and inventory status.',
  },
  {
    q: 'What types of products can VetPurse track?',
    a: 'VetPurse can track reagents, cartridges, chemistry slides, controls, reagent packs, sample supplies, and other veterinary diagnostic consumables.',
  },
  {
    q: 'Does VetPurse replace our existing laboratory software?',
    a: 'No. VetPurse focuses on reagent and consumable inventory, lot tracking, expiration management, burn-rate forecasting, FEFO guidance, and reorder planning.',
  },
  {
    q: 'Can multiple staff members use it?',
    a: 'Yes. VetPurse is designed for laboratory teams so inventory activity can be recorded and reviewed across multiple users.',
  },
  {
    q: 'Does the AI Assistant use real laboratory data?',
    a: 'The marketing demo uses fictional sample data. In the planned product, recommendations would be based on inventory and usage information entered by the laboratory.',
  },
  {
    q: 'Is VetPurse affiliated with Antech, IDEXX, or Zoetis?',
    a: 'No. VetPurse is an independent product. Manufacturer names are used only to describe supported inventory tracking.',
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
        <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="bg-teal-deep border border-teal-line rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-[14.5px] font-semibold text-cream">{f.q}</span>
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
