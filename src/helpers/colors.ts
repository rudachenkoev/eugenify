function isHexColor(str: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(str)
}

function isRGBColor(str: string): boolean {
  return /^rgb\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*\)$/i.test(str)
}

function isRGBAColor(str: string): boolean {
  return /^rgba\((\s*\d{1,3}\s*,){3}\s*[\d.]+\s*\)$/i.test(str)
}

export function isColorSet (str: string): boolean {
  if (!str) return false
  return isHexColor(str) || isRGBColor(str) || isRGBAColor(str)
}
