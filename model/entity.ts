export interface Entity {
  id: string
}

export type EntityRecord<T extends Entity> = Record<string, T>
