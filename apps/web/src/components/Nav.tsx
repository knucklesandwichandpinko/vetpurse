import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '../assets/logo-white.png'

const links = [
  { href: '#features', label: 'Product' },
  { href: '#ai', label: 'AI Assistant' },
  { href: '#demo', label: 'Demo' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-teal-line">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-7xl mx-auto">
        <img src={logoWhite} alt="VetPurse" className="h-6 w-auto" />
        <div className="hidden md:flex gap-8 text-[15px] text-sage">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-mint transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#demo"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-mint text-ink text-sm font-semibold hover:bg-mint-dim hover:text-cream transition-all hover:-translate-y-0.5"
        >
          Try Demo
        </a>
        <button
          className="md:hidden text-cream"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 text-[15px] text-sage">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-mint transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-5 py-2 rounded-full bg-mint text-ink text-sm font-semibold"
          >
            Try Demo
          </a>
        </div>
      )}
    </nav>
  )
}
