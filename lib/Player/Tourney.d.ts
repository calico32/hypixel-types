export type Tourney = { [tournament: string]: TournamentStats } & {
  first_join_lobby?: number
  hide_purchased?: boolean
  playtime?: { [key: string]: number }
  shop_sort?: string
  total_tributes?: number
}

export interface TournamentStats {
  claimed_ranking_reward?: number
  first_game?: number
  first_win?: number
  games_played?: number
  playtime?: number
  tributes_earned?: number
  seenRPbook?: boolean
}
