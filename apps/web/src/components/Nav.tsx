import { Stethoscope } from 'lucide-react'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-cream/90 backdrop-blur-md border-b border-ink/8">
      <div className="flex items-center gap-2 text-[19px] font-bold tracking-tight text-ink">
        <Stethoscope size={24} className="text-teal-deep" strokeWidth={2} />
        VetPurse
      </div>
      <div className="hidden md:flex gap-8 text-[15px] text-sage">
        <a href="#features" className="hover:text-teal-deep transition-colors">Product</a>
        <a href="#ai" className="hover:text-teal-deep transition-colors">AI assistant</a>
        <a href="#pricing" className="hover:text-teal-deep transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-teal-deep transition-colors">FAQ</a>
      </div>
      <a href="#pricing" className="px-5 py-2 rounded-full bg-teal-deep text-cream text-sm font-semibold hover:bg-mint-dim transition-all hover:-translate-y-0.5">
        Start free
      </a>
    </nav>
  )
}
