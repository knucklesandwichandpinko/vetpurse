import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import {
  DEFAULT_PREFERENCES,
  OPEN_SETTINGS_EVENT,
  getStoredConsent,
  storeConsent,
  type CookiePreferences,
} from '../lib/cookieConsent'

const categories: { key: keyof Omit<CookiePreferences, 'necessary'>; title: string; sub: string }[] = [
  {
    key: 'analytics',
    title: 'Analytics',
    sub: 'Helps us understand how visitors use the site so we can improve it.',
  },
  {
    key: 'personalization',
    title: 'Personalization & ads',
    sub: 'Used to tailor content and ads to your interests.',
  },
  {
    key: 'social',
    title: 'Social media',
    sub: 'Enables sharing features and content from social platforms.',
  },
]

export default function CookieConsent() {
  const [bannerVisible, setBannerVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    const existing = getStoredConsent()
    if (existing) {
      setPrefs(existing.preferences)
    } else {
      setBannerVisible(true)
    }

    const openHandler = () => {
      const current = getStoredConsent()
      if (current) setPrefs(current.preferences)
      setSettingsOpen(true)
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, openHandler)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openHandler)
  }, [])

  function acceptAll() {
    storeConsent({ necessary: true, analytics: true, personalization: true, social: true })
    setPrefs({ necessary: true, analytics: true, personalization: true, social: true })
    setBannerVisible(false)
    setSettingsOpen(false)
  }

  function rejectNonEssential() {
    storeConsent(DEFAULT_PREFERENCES)
    setPrefs(DEFAULT_PREFERENCES)
    setBannerVisible(false)
    setSettingsOpen(false)
  }

  function savePreferences() {
    storeConsent(prefs)
    setBannerVisible(false)
    setSettingsOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {bannerVisible && !settingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 inset-x-0 z-[100] bg-teal-deep border-t border-teal-line px-6 py-5"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
              <Cookie size={22} className="text-mint shrink-0 hidden sm:block" />
              <p className="text-[13.5px] text-sage leading-relaxed flex-1">
                We use cookies to personalize content and ads, to provide social media features and to
                analyze our traffic.{' '}
                <a
                  href="/cookie-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint underline hover:text-cream transition-colors"
                >
                  See our cookie policy (opens in a new tab)
                </a>
                . You can use cookie settings to change your preferences.
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="px-4 py-2 rounded-full border border-teal-line text-cream text-[13px] font-semibold hover:border-mint hover:text-mint transition-colors"
                >
                  Cookie settings
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="px-4 py-2 rounded-full border border-teal-line text-cream text-[13px] font-semibold hover:border-mint hover:text-mint transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 rounded-full bg-mint text-ink text-[13px] font-semibold hover:bg-mint-dim hover:text-cream transition-colors"
                >
                  Accept all
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-ink/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSettingsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-teal-deep border border-teal-line rounded-2xl p-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[17px] font-bold text-cream">Cookie settings</h3>
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="text-sage hover:text-cream transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-[12.5px] text-sage mb-5">
                Choose which cookies you're comfortable with. You can change this anytime.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between gap-4 opacity-70">
                  <div>
                    <p className="text-[13.5px] font-semibold text-cream">Strictly necessary</p>
                    <p className="text-[12px] text-sage">Required for the site to function. Always on.</p>
                  </div>
                  <div className="w-10 h-6 rounded-full bg-mint/40 flex items-center px-0.5 shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-mint ml-auto" />
                  </div>
                </div>

                {categories.map((c) => (
                  <div key={c.key} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[13.5px] font-semibold text-cream">{c.title}</p>
                      <p className="text-[12px] text-sage">{c.sub}</p>
                    </div>
                    <button
                      onClick={() => setPrefs((p) => ({ ...p, [c.key]: !p[c.key] }))}
                      className={`w-10 h-6 rounded-full flex items-center px-0.5 shrink-0 mt-0.5 transition-colors ${
                        prefs[c.key] ? 'bg-mint/40' : 'bg-teal-mid border border-teal-line'
                      }`}
                      aria-pressed={prefs[c.key]}
                      aria-label={`Toggle ${c.title}`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full transition-transform ${
                          prefs[c.key] ? 'bg-mint translate-x-4' : 'bg-sage translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <p className="text-[11.5px] text-sage/70 mb-4">
                See our{' '}
                <a
                  href="/cookie-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint underline hover:text-cream transition-colors"
                >
                  cookie policy (opens in a new tab)
                </a>{' '}
                for details on each category.
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={rejectNonEssential}
                  className="px-4 py-2 rounded-full border border-teal-line text-cream text-[13px] font-semibold hover:border-mint hover:text-mint transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 rounded-full bg-mint text-ink text-[13px] font-semibold hover:bg-mint-dim hover:text-cream transition-colors"
                >
                  Save preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
