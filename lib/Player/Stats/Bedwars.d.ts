import { IndexType } from '../../shared/util'

export type BedwarsModes =
  | 'castle'
  | `eight_one${'' | '_rush' | '_ultimate'}`
  | `${'eight_two' | 'four_four'}${
      | ''
      | '_armed'
      | '_lucky'
      | '_no_void'
      | '_rush'
      | '_ultimate'
      | '_voidless'}`
  | 'four_three'
  | 'two_four'
  | 'two_six'
  | 'two_one'
  | 'tourney_bedwars_two_four_0'
  | 'tourney_bedwars4s_0'
  | 'tourney_bedwars4s_1'

export type BedwarsModeStats =
  | 'games_played'
  | 'kills'
  | 'custom_kills'
  | 'deaths'
  | 'suffocation_deaths'
  | 'final_kills'
  | 'final_deaths'
  | 'wins'
  | 'losses'
  | `beds_${'broken' | 'lost'}`
  | `${'diamond' | 'emerald' | 'gold' | 'iron' | 'wrapped_present'}_resources_collected`
  | `${
      | `entity_${'attack' | 'explosion'}`
      | 'fall'
      | 'projectile'
      | 'void'
      | 'magic'
      | 'fire'
      | 'fire_tick'}_${'kills' | 'deaths' | 'final_kills' | 'final_deaths'}`
  // actual typo
  | '_items_purchased'
  | 'items_purchased'
  // another
  | 'permanent _items_purchased'
  | 'permanent_items_purchased'

export type Bedwars = IndexType & {
  [key in `${BedwarsModes}_${BedwarsModeStats}_bedwars`]?: number
} & { [key in `${BedwarsModeStats}_bedwars`]?: number } & {
  [key in `${BedwarsModes}_winstreak`]?: number
} & { [key in 'winstreak' | 'wins' | 'losses']?: number } & {
  activeBedDestroy?: string
  activeDeathCry?: string
  activeGlyph?: string
  activeIslandTopper?: string
  activeKillEffect?: string
  activeKillMessages?: string
  activeNPCSkin?: string
  activeProjectileTrail?: string
  activeSprays?: string
  activeVictoryDance?: string
  activeWoodType?: string
  bedwars_box?: number
  bedwars_box_commons?: number
  bedwars_box_epics?: number
  bedwars_box_legendaries?: number
  bedwars_box_rares?: number
  bedwars_boxes?: number
  bedwars_christmas_boxes?: number
  bedwars_easter_boxes?: number
  bedwars_golden_boxes?: number
  bedwars_halloween_boxes?: number
  bedwars_lunar_boxes?: number
  Bedwars_openedChests?: number
  Bedwars_openedCommons?: number
  Bedwars_openedEpics?: number
  Bedwars_openedLegendaries?: number
  Bedwars_openedRares?: number
  chest_history?: string
  chest_history_new?: string[]
  coins?: number
  Experience?: number
  Experience_new?: number
  fav_streak_slots?: string
  favorite_slots?: string
  favourites_1?: string
  favourites_2?: string
  first_join_7?: boolean
  free_event_key_bedwars_christmas_boxes_2017?: boolean
  free_event_key_bedwars_christmas_boxes_2018?: boolean
  free_event_key_bedwars_christmas_boxes_2019?: boolean
  free_event_key_bedwars_christmas_boxes_2020?: boolean
  free_event_key_bedwars_easter_boxes_2018?: boolean
  free_event_key_bedwars_easter_boxes_2019?: boolean
  free_event_key_bedwars_halloween_boxes_2017?: boolean
  free_event_key_bedwars_halloween_boxes_2018?: boolean
  free_event_key_bedwars_halloween_boxes_2019?: boolean
  free_event_key_bedwars_halloween_boxes_2020?: boolean
  free_event_key_bedwars_lunar_boxes_2018?: boolean
  free_event_key_bedwars_lunar_boxes_2019?: boolean
  free_event_key_bedwars_lunar_boxes_2020?: boolean
  games_played_bedwars_1?: number
  glyph_storage_new?: string
  lastHytaleAd?: number
  lastTourneyAd?: number
  packages?: string[]
  privategames?: PrivateGamesOptions
  seen_beta_menu?: number
  selected_ultimate?: string
  shop_sort?: string
  shop_sort_enable_owned_first?: boolean
  spooky_open_ach?: number
  spray_glyph_field?: string
  spray_storage_new?: string
  understands_resource_bank?: boolean
  understands_streaks?: boolean
  voted_fortress?: boolean
  voted_snowman?: boolean
}

export interface PrivateGamesOptions {
  bed_instabreak?: boolean
  disable_block_protection?: boolean
  event_time?: string
  health_buff?: string
  low_gravity?: boolean
  max_team_upgrades?: boolean
  no_emeralds?: boolean
  one_hit_one_kill?: boolean
  respawn_time?: string
  speed?: string
}
