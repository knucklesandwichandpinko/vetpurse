import { Stethoscope } from 'lucide-react'

const cols = [
  { title: 'Product', links: ['Features', 'Pricing', 'AI assistant'] },
  { title: 'Resources', links: ['Documentation', 'Security', 'FAQ'] },
  { title: 'Company', links: ['Contact', 'About'] },
]

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-sage px-8 py-14">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-cream text-[16px] font-bold mb-2.5">
            <Stethoscope size={20} className="text-mint" />
            VetPurse
          </div>
          <p className="text-[13px]">Never lose track of a reagent again.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-cream text-[13px] font-semibold mb-3">{c.title}</p>
            <div className="space-y-2">
              {c.links.map((l) => (
                <a key={l} href="#" className="block text-[13px] hover:text-mint transition-colors">{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto border-t border-teal-line mt-10 pt-6 text-[12px] text-sage/70">
        VetPurse is an independent product and is not affiliated with any analyzer manufacturer.
      </div>
    </footer>
  )
}
