import { Entity } from '~/model/entity'

export interface User extends Entity {
  readonly name: string
}
