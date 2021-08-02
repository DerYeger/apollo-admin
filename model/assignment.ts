import { Entity } from '~/model/entity'

export interface Assignment extends Entity {
  readonly title: string
  readonly formula: string
  readonly description?: string
}
