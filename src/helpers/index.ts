export function isURL(value: string): boolean {
  if (!value) return false
  try {
    new URL(value)
    return true
  } catch (error) {
    return false
  }
}
