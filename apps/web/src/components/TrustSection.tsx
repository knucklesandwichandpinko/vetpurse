import { motion } from 'framer-motion'

const brands = ['Fujifilm', 'IDEXX', 'Heska', 'Zoetis', 'Scil', 'Eurolyser']

export default function TrustSection() {
  return (
    <section className="py-16 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[13px] text-sage uppercase tracking-wider block mb-5">
          Built for veterinary diagnostic teams
        </span>
        <p className="text-[13px] text-sage mb-5">Designed for workflows using equipment from:</p>
        <div className="flex flex-wrap gap-x-7 gap-y-2 justify-center text-[14px] font-semibold text-teal-deep opacity-75">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <p className="text-[11px] text-sage/70 mt-6 max-w-md mx-auto">
          VetPurse is an independent product. Brand names are used to describe
          compatibility only and do not imply partnership or endorsement.
        </p>
      </motion.div>
    </section>
  )
}
