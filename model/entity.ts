export interface Entity {
  readonly id: string
}

export type EntityRecord<T extends Entity> = Record<string, T>
