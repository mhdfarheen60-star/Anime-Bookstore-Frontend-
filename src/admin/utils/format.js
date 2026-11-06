// Admin-side formatting helpers. Kept separate from src/utils/format.js so the
// storefront and the panel can diverge without touching each other.

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

export const formatMoney = (value) => usd.format(Number(value) || 0)

export const formatNumber = (value) => new Intl.NumberFormat('en-US').format(Number(value) || 0)

export const formatDate = (value) => {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

/** "2026-04" -> "Apr", "2026-04-09" -> "9 Apr" — for chart axis labels. */
export const shortLabel = (key) => {
  const parts = String(key).split('-')
  const monthIdx = Number(parts[1]) - 1
  if (Number.isNaN(monthIdx) || monthIdx < 0) return key
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthIdx]
  if (parts.length > 2) return `${Number(parts[2])} ${month}`
  return month
}

export default formatMoney
