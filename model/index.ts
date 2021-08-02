export function toArray<T>(record: Record<any, T>): T[] {
  return Object.values(record)
}

export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null
}
