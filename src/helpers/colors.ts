export function getRgbValues(color: string): string {
  if (!color) return ''
  // Check if the color is a HEX format
  if (color.startsWith('#')) {
    // Extract red, green and blue values from HEX
    const r: number = parseInt(color.substring(1, 3), 16)
    const g: number = parseInt(color.substring(3, 5), 16)
    const b: number = parseInt(color.substring(5, 7), 16)
    return `${r}, ${g}, ${b}`
  }
  // Check if the color is in RGB format
  else if (color.startsWith('rgb(')) {
    // Extract red, green and blue values from RGB
    const rgbValues: number[] = color.substring(4, color.length - 1).split(',').map(val => parseInt(val.trim()))
    // Check that three values have been extracted
    if (rgbValues.length === 3) return `${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}`
  }
  // If the color does not correspond to either HEX or RGB format, return an empty string
  return ''
}

export function isHexOrRgb (color: string): boolean {
  if (!color) return false
  const hexPattern: RegExp = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  const rgbPattern: RegExp = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
  return hexPattern.test(color) || rgbPattern.test(color)
}
