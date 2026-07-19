import { Podcast } from 'lucide-react'
import logoWhite from '../assets/logo-white.png'
import { openCookieSettings } from '../lib/cookieConsent'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './icons/SocialIcons'

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Demo', href: '#demo' },
      { label: 'AI Assistant', href: '#ai' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Cookie Policy', href: '/cookie-policy.html', newTab: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact Support', href: 'mailto:support@vetpurse.com' },
      { label: 'Contact Sales', href: 'mailto:sales@vetpurse.com' },
      { label: 'About', href: '#' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Ad Choices', href: '#' },
  { label: 'Your Privacy Choices', href: '#' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'Podcasts', href: '#', Icon: Podcast },
]

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-sage px-8 py-14">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src={logoWhite} alt="VetPurse" className="h-5 w-auto mb-2.5" />
          <p className="text-[13px]">Never lose track of a reagent again.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-cream text-[13px] font-semibold mb-3">{c.title}</p>
            <div className="space-y-2">
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={'newTab' in l && l.newTab ? '_blank' : undefined}
                  rel={'newTab' in l && l.newTab ? 'noopener noreferrer' : undefined}
                  className="block text-[13px] hover:text-mint transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-teal-line mt-10 pt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px]">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-mint transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-sage hover:text-mint transition-colors"
              >
                <s.Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[12px] text-sage/70 mb-5">
          <p>
            VetPurse is an independent product and is not affiliated with Antech, IDEXX, Zoetis, or any
            other veterinary diagnostic manufacturer.
          </p>
          <button onClick={openCookieSettings} className="shrink-0 underline hover:text-mint transition-colors">
            Cookie settings
          </button>
        </div>

        <p className="text-[11.5px] text-sage/60">
          © 2026 VetPurse, Inc (An affiliate of Vibe, Incorporated). All rights reserved.
        </p>
      </div>
    </footer>
  )
}
