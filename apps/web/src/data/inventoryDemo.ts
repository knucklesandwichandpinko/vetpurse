export type Manufacturer = 'Antech' | 'IDEXX' | 'Zoetis'
export type Status = 'Critical' | 'Warning' | 'Expiring soon' | 'Monitor' | 'Healthy'
export type Category = 'Reagents' | 'Consumables'

export interface InventoryItem {
  name: string
  manufacturer: Manufacturer
  category: Category
  lot: string
  quantityRemaining: number
  expiration: string
  daysRemaining: number
  status: Status
  recommendation: string
}

export const inventory: InventoryItem[] = [
  {
    name: 'Chemistry Reagent Pack',
    manufacturer: 'Antech',
    category: 'Reagents',
    lot: 'CHM-8823',
    quantityRemaining: 6,
    expiration: 'July 28, 2026',
    daysRemaining: 4,
    status: 'Critical',
    recommendation: 'Reorder now and use this lot before CHM-9011',
  },
  {
    name: 'Chemistry Reagent Pack',
    manufacturer: 'Antech',
    category: 'Reagents',
    lot: 'CHM-9011',
    quantityRemaining: 18,
    expiration: 'September 15, 2026',
    daysRemaining: 13,
    status: 'Monitor',
    recommendation: 'Hold until CHM-8823 is used',
  },
  {
    name: 'Chemistry Slides',
    manufacturer: 'IDEXX',
    category: 'Consumables',
    lot: 'CAT-4412',
    quantityRemaining: 72,
    expiration: 'August 18, 2026',
    daysRemaining: 18,
    status: 'Healthy',
    recommendation: 'Continue monitoring',
  },
  {
    name: 'Electrolyte Cartridges',
    manufacturer: 'Antech',
    category: 'Consumables',
    lot: 'LYT-61002',
    quantityRemaining: 14,
    expiration: 'July 30, 2026',
    daysRemaining: 6,
    status: 'Critical',
    recommendation: 'Reorder immediately',
  },
  {
    name: 'Immunoassay Cartridges',
    manufacturer: 'Antech',
    category: 'Consumables',
    lot: 'TT-09116',
    quantityRemaining: 24,
    expiration: 'October 20, 2026',
    daysRemaining: 27,
    status: 'Healthy',
    recommendation: 'No immediate action',
  },
  {
    name: 'Blood Analysis Cards',
    manufacturer: 'Zoetis',
    category: 'Consumables',
    lot: 'HS-08154',
    quantityRemaining: 20,
    expiration: 'August 2, 2026',
    daysRemaining: 10,
    status: 'Warning',
    recommendation: 'Place a reorder today',
  },
  {
    name: 'Diagnostic Test Cartridges',
    manufacturer: 'Antech',
    category: 'Consumables',
    lot: 'HN-08518',
    quantityRemaining: 11,
    expiration: 'July 26, 2026',
    daysRemaining: 18,
    status: 'Expiring soon',
    recommendation: 'Prioritize this lot',
  },
]

export const recentActivity = [
  { text: 'Chemistry Reagent Pack Lot CHM-8823 scanned out — 2 units used', time: '2 hours ago' },
  { text: 'Electrolyte Cartridge Lot LYT-61002 flagged critical', time: '5 hours ago' },
  { text: 'Chemistry Slide Lot CAT-4412 received — 72 units added', time: '1 day ago' },
  { text: 'Blood Analysis Card Lot HS-08154 marked for reorder', time: '2 days ago' },
]

export const suggestedPrompts = [
  'What should I reorder?',
  'Which lots expire soon?',
  'What should we use first?',
  'How long will our current stock last?',
  'Show critical inventory',
  'Which products have the highest inventory risk?',
]

const FALLBACK =
  'I can help with sample questions about low stock, expiration dates, FEFO priorities, manufacturer inventory, consumables, and reorder recommendations.'

const label = (item: InventoryItem) => `${item.name} Lot ${item.lot}`
const byManufacturer = (m: Manufacturer) => inventory.filter((i) => i.manufacturer === m)
const critical = () => inventory.filter((i) => i.status === 'Critical')

const riskOrder: Record<Status, number> = {
  Critical: 0,
  'Expiring soon': 1,
  Warning: 2,
  Monitor: 3,
  Healthy: 4,
}

export function getAssistantResponse(rawInput: string): string {
  const input = rawInput.trim().toLowerCase()

  if (!input) return FALLBACK

  if (input === 'what should i reorder?' || (input.includes('reorder') && !input.includes('quantit'))) {
    return 'Two products need immediate attention. The electrolyte cartridges have approximately six days of stock remaining, and Chemistry Reagent Pack Lot CHM-8823 has only six units remaining. I recommend placing both orders today.'
  }

  if (input === 'what should we use first?' || input.includes('use first') || input.includes('fefo')) {
    return 'Prioritize Diagnostic Test Cartridge Lot HN-08518 because it expires on July 26. For the Chemistry Reagent Packs, use Lot CHM-8823 before Lot CHM-9011 because it expires sooner.'
  }

  if (input.includes('chemistry slide') || input.includes('slides')) {
    return 'Based on the current sample usage rate, Chemistry Slide Lot CAT-4412 has approximately 18 days of stock remaining.'
  }

  if (input.includes('expir') && (input.includes('soon') || input.includes('lot'))) {
    const soon = [...inventory].sort((a, b) => a.daysRemaining - b.daysRemaining).slice(0, 3)
    const parts = soon.map((i) => `${label(i)} (expires ${i.expiration})`)
    return `Three lots need attention soon: ${parts.join(', ')}.`
  }

  if (input === 'show critical inventory' || input.includes('critical')) {
    const items = critical()
    const parts = items.map(
      (i) => `${label(i)} (${i.quantityRemaining} units, about ${i.daysRemaining} days remaining)`,
    )
    return `${items.length} products are marked Critical: ${parts.join(' and ')}. Both should be reordered as soon as possible.`
  }

  if (input.includes('inventory risk') || input.includes('highest risk')) {
    const ranked = [...inventory].sort((a, b) => riskOrder[a.status] - riskOrder[b.status]).slice(0, 4)
    const parts = ranked.map((i) => `${label(i)} (${i.status})`)
    return `The highest-risk products right now are ${parts.join(', ')}.`
  }

  if (input.includes('low stock') || input.includes('days remaining') || input.includes('current stock')) {
    const sorted = [...inventory].sort((a, b) => a.daysRemaining - b.daysRemaining)
    const lowest = sorted.slice(0, 2)
    const healthiest = sorted.slice(-2)
    const lowParts = lowest.map((i) => `${label(i)} (about ${i.daysRemaining} days)`)
    const healthyParts = healthiest.map((i) => `${label(i)}`)
    return `Estimated days remaining varies by product. The lowest are ${lowParts.join(' and ')}. Healthier stock includes ${healthyParts.join(' and ')}, both with well over two weeks remaining.`
  }

  if (input.includes('consumable') || input.includes('cartridge')) {
    const cartridges = inventory.filter((i) => i.name.toLowerCase().includes('cartridge'))
    const parts = cartridges.map((i) => `${label(i)} (${i.status})`)
    return `Current cartridge inventory: ${parts.join(', ')}.`
  }

  for (const m of ['antech', 'idexx', 'zoetis'] as const) {
    if (input.includes(m)) {
      const manufacturer = (m.charAt(0).toUpperCase() + m.slice(1)) as Manufacturer
      const items = byManufacturer(manufacturer)
      const parts = items.map((i) => `${label(i)} (${i.status})`)
      return `${manufacturer} products in stock: ${parts.join(', ')}.`
    }
  }

  return FALLBACK
}
