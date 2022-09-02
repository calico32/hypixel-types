export interface Pit {
  pit_stats_ptl?: { [key: string]: number }
  profile?: PitProfile
  stats_move_1?: number
}

export interface PitProfile {
  bounties?: any[]
  cash?: number
  cash_during_prestige_0?: number
  cash_during_prestige_1?: number
  cash_during_prestige_2?: number
  cash_during_prestige_3?: number
  cash_during_prestige_4?: number
  cash_during_prestige_5?: number
  cash_during_prestige_6?: number
  cash_during_prestige_7?: number
  cash_during_prestige_14?: number
  chat_option_bounties?: boolean
  chat_option_misc?: boolean
  chat_option_prestige_announcements?: boolean
  chat_option_streaks?: boolean
  cheap_milk?: boolean
  contract_choices?: null
  contract_offers?: ContractOffers
  death_recaps?: DeathRecaps
  ended_contracts?: EndedContract[]
  genesis_allegiance?: string
  genesis_allegiance_time?: number
  genesis_points?: number
  genesis_spawn_in_base?: boolean
  gold_transactions?: GoldTransaction[]
  hat_color?: number
  hotbar_favorites?: number[]
  inv_armor?: DeathRecaps
  inv_contents?: DeathRecaps
  inv_enderchest?: DeathRecaps
  item_stash?: DeathRecaps
  items_last_buy?: ItemsLastBuy
  king_quest?: KingQuest
  last_contract?: number
  last_midfight_disconnect?: number
  last_save?: number
  leaderboard_stats?: { [key: string]: number }
  login_messages?: any[]
  moved_achievements_1?: boolean
  moved_achievements_2?: boolean
  outgoing_offers?: any[]
  prestiges?: Prestige[]
  renown?: number
  renown_unlocks?: RenownUnlock[]
  selected_killstreak_1?: string
  selected_killstreak_2?: string
  selected_perk_0?: string
  selected_perk_1?: string
  selected_perk_2?: string
  selected_perk_3?: null
  spire_stash_armor?: DeathRecaps
  spire_stash_inv?: DeathRecaps
  trade_timestamps?: any[]
  unlocks?: RenownUnlock[]
  unlocks_1?: RenownUnlock[]
  unlocks_2?: RenownUnlock[]
  unlocks_3?: RenownUnlock[]
  unlocks_4?: RenownUnlock[]
  unlocks_5?: RenownUnlock[]
  unlocks_6?: RenownUnlock[]
  unlocks_7?: RenownUnlock[]
  unlocks_14?: RenownUnlock[]
  xp?: number
  zero_point_three_gold_transfer?: boolean
}

export interface ContractOffers {
  contracts?: Contract[]
  timestamp?: number
}

export interface Contract {
  key?: string
  meta?: Meta
}

export interface Meta {
  kills?: number
  reward?: number
}

export interface DeathRecaps {
  data?: number[]
  type?: number
}

export interface EndedContract {
  chunk_of_viles_reward?: number
  completion_date?: number
  difficulty?: string
  gold_reward?: number
  key?: string
  progress?: Progress
  remaining_ticks?: number
  requirements?: Progress
}

export interface Progress {
  ingots?: number
  kills?: number
  streak?: number
}

export interface GoldTransaction {
  amount?: number
  timestamp?: number
}

export interface ItemsLastBuy {
  diamond_boots?: number
  diamond_chestplate?: number
  diamond_sword?: number
}

export interface KingQuest {
  kills?: number
  last_accepted?: number
  renown?: number
}

export interface Prestige {
  index?: number
  timestamp?: number
  xp_on_prestige?: number
}

export interface RenownUnlock {
  acquireDate?: number
  key?: string
  tier?: number
}
