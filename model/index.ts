export function toArray<T>(record: Record<any, T>): T[] {
  return Object.values(record)
}
