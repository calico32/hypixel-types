import { IndexType } from '../../shared/util'

export type Housing = IndexType & {
  activeKillMessages?: string
  coins?: number
  layout_items?: IndexType
  packages?: string[]
}
