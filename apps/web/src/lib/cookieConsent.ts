export type CookieCategory = 'necessary' | 'analytics' | 'personalization' | 'social'

export interface CookiePreferences {
  necessary: true
  analytics: boolean
  personalization: boolean
  social: boolean
}

export interface CookieConsentRecord {
  preferences: CookiePreferences
  decidedAt: string
}

export const CONSENT_STORAGE_KEY = 'vetpurse-cookie-consent'
export const OPEN_SETTINGS_EVENT = 'vetpurse:open-cookie-settings'

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  personalization: false,
  social: false,
}

export function getStoredConsent(): CookieConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CookieConsentRecord
    if (!parsed?.preferences) return null
    return parsed
  } catch {
    return null
  }
}

export function storeConsent(preferences: CookiePreferences): CookieConsentRecord {
  const record: CookieConsentRecord = {
    preferences: { ...preferences, necessary: true },
    decidedAt: new Date().toISOString(),
  }
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record))
  window.dispatchEvent(new CustomEvent('vetpurse:consent-updated', { detail: record }))
  return record
}

/**
 * Gate for future analytics/ads/social scripts: only load them once the
 * matching category has been opted into. No such scripts exist yet — this
 * is the hook point for when they're added.
 */
export function hasConsent(category: CookieCategory): boolean {
  if (category === 'necessary') return true
  return getStoredConsent()?.preferences[category] === true
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
