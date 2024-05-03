export function getDuplicates<T>(arr: T[], key: string = 'id'): T[] {
  const seen = new Set<any>()
  const duplicates: T[] = []

  for (const item of arr) {
    let value: any
    if (typeof item === 'object' && item !== null && key && (item as any)[key]) value = (item as any)[key]
    else value = item

    if (seen.has(value)) duplicates.push(item)
    else seen.add(value)
  }

  return duplicates
}

export function generateRandomIdentifier(): string {
  return Math.random().toString(36).substring(2, 11)
}
