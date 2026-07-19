import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="demo" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto"
      >
        <span className="text-[13px] text-mint-dim uppercase tracking-wider font-bold block mb-2.5">Get started</span>
        <h2 className="text-3xl font-bold tracking-tight mb-3">Try the demo. Talk pricing when you are ready.</h2>
        <p className="text-sage mb-8">
          We are in early access. See VetPurse in action with no commitment.
          For pricing tailored to your laboratory, contact our sales team.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#ai"
            className="px-7 py-3.5 rounded-full bg-mint text-ink font-bold text-[15px] hover:bg-mint-dim hover:text-cream hover:-translate-y-0.5 transition-all"
          >
            Try the Demo
          </a>
          <a
            href="mailto:sales@vetpurse.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/20 text-cream font-semibold text-[15px] hover:border-mint hover:text-mint transition-colors"
          >
            <Mail size={16} /> Contact Sales
          </a>
        </div>
      </motion.div>
    </section>
  )
}
