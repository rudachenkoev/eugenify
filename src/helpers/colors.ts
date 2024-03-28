export function isHex (color: string): boolean {
  if (!color) return false
  const hexPattern: RegExp = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexPattern.test(color)
}
