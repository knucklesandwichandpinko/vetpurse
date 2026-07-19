import { motion } from 'framer-motion'

const brands = ['Antech', 'IDEXX', 'Zoetis']

export default function TrustSection() {
  return (
    <section className="py-16 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold tracking-tight mb-2.5">Built for veterinary diagnostic teams</h2>
        <p className="text-[14px] text-sage mb-8 max-w-md mx-auto">
          Track reagents and consumables from the manufacturers your laboratory already uses.
        </p>

        <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto mb-6">
          {brands.map((b) => (
            <div
              key={b}
              className="px-8 py-5 rounded-2xl bg-teal-deep border border-teal-line shadow-[0_8px_20px_rgba(0,0,0,0.3)] text-[16px] font-bold text-mint"
            >
              {b}
            </div>
          ))}
        </div>

        <p className="text-[13.5px] text-sage max-w-md mx-auto">
          VetPurse brings reagents and consumables from multiple manufacturers into one inventory workflow.
        </p>
        <p className="text-[11px] text-sage/70 mt-4 max-w-md mx-auto">
          VetPurse is an independent product. Manufacturer names are used only to describe
          supported inventory tracking and do not imply partnership, affiliation, certification, or endorsement.
        </p>
      </motion.div>
    </section>
  )
}
