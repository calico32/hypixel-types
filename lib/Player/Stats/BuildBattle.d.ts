import { IndexType } from '../../shared/util'

export type BuildBattle = IndexType & {
  active_movement_trail?: string
  buildbattle_loadout?: string[]
  coins?: number
  correct_guesses?: number
  games_played?: number
  last_purchased_song?: string
  monthly_coins_a?: number
  monthly_coins_b?: number
  music?: boolean
  new_selected_hat?: string
  new_suit?: string
  new_victory_dance?: string
  packages?: string[]
  score?: number
  selected_backdrop?: string
  shop_sort?: string
  solo_most_points?: number
  super_votes?: number
  teams_most_points?: number
  total_votes?: number
  votes_Archer?: number
  votes_Bridge?: number
  votes_Cave?: number
  votes_Earth?: number
  votes_Feather?: number
  votes_Toys?: number
  votes_World?: number
  weekly_coins_a?: number
  weekly_coins_b?: number
  wins?: number
  wins_guess_the_build?: number
  wins_solo_normal?: number
  wins_solo_normal_latest?: number
  wins_solo_pro?: number
  wins_teams_normal?: number
}
