import { IndexType } from '../../shared/util'

export type DuelsLayout = { [slot: number]: string }

// incomplete list - every kit from every game?
export type DuelsKits =
  | 'archer'
  | 'armorer'
  | 'baker'
  | 'baseball player'
  | 'blacksmith'
  | 'blaze'
  | 'bowman'
  | 'champion'
  | 'energix'
  | 'frog'
  | 'golem'
  | 'herobrine'
  | 'knight'
  | 'jockey'
  | 'necromancer'
  | 'phoenix'
  | 'pigman'
  | 'pyromancer'
  | 'ranger'
  | 'reddragon'
  | 'rouge'
  | 'scout'
  | 'skeleton'
  | 'speleologist'
  | 'warlock'

export type DuelsCategories =
  | `blitz`
  | `bow`
  | `bridge`
  | `classic`
  | `combo`
  | `mega_walls`
  | `no_debuff`
  | `op`
  | `skywars`
  | `sumo`
  | `tnt_games`
  | `uhc`

export type DuelsModes =
  | `blitz_duel`
  | `bow_duel`
  | `bowspleef_duel`
  | `bridge_${'duel' | 'doubles' | '2v2v2v2' | '3v3v3v3' | 'four'}`
  | `classic_duel`
  | `combo_duel`
  | `mw_${'duel' | 'doubles'}`
  | `op_${'duel' | 'doubles'}`
  | `potion_duel`
  | `sumo_duel`
  | `sw_${'duel' | 'doubles'}`
  | `uhc_${'duel' | 'doubles' | 'four'}`
  | 'tournament'
  | 'sw_tournament'
  | 'uhc_meetup'
  | 'uhc_tournament'

export type DuelsTitles =
  | 'rookie'
  | 'iron'
  | 'gold'
  | 'diamond'
  | 'master'
  | 'grandmaster'
  | 'legend'
  | 'godlike'

// probably legacy keys
type DuelsWinstreak = { [key in `duels_winstreak_best_${DuelsModes | 'null'}`]?: number }
type DuelsWinstreakBest = { [key in `duels_winstreak_${DuelsModes}`]?: number }

type BestWinstreaks = { [key in `best_${DuelsCategories}_winstreak`]?: number }
type BestWinstreakModes = { [key in `best_winstreak_mode_${DuelsModes}`]?: number }

type CurrentWinstreaks = { [key in `current_${DuelsCategories}_winstreak`]?: number }
type CurrentWinstreakModes = { [key in `current_winstreak_mode_${DuelsModes}`]?: number }

type ModeKills = { [key in `${DuelsModes | 'bridge'}_kills`]?: number }
type ModeDeaths = { [key in `${DuelsModes | 'bridge'}_deaths`]?: number }
type ModeWins = { [key in `${DuelsModes}_wins`]?: number }
type ModeLosses = { [key in `${DuelsModes}_losses`]?: number }
type ModeBowHits = { [key in `${DuelsModes}_bow_hits`]?: number }
type ModeBowShots = { [key in `${DuelsModes}_bow_shots`]?: number }
type ModeDamageDealt = { [key in `${DuelsModes}_damage_dealt`]?: number }
type ModeHealthRegenerated = { [key in `${DuelsModes}_health_regenerated`]?: number }
type ModeMeleeHits = { [key in `${DuelsModes}_melee_hits`]?: number }
type ModeMeleeSwings = { [key in `${DuelsModes}_melee_swings`]?: number }
type ModeRoundsPlayed = { [key in `${DuelsModes}_rounds_played`]?: number }
type ModeBlocksPlaced = { [key in `${DuelsModes}_blocks_placed`]?: number }

type ModeTitlePrestige = {
  [key in `${DuelsModes | 'all_modes'}_${DuelsTitles}_title_prestige`]?: number
}

type KitWins = { [key in `${DuelsKits}_wins`]?: number }

export type Duels = { [key: string]: DuelsLayout } & IndexType &
  DuelsWinstreak &
  DuelsWinstreakBest &
  BestWinstreaks &
  BestWinstreakModes &
  CurrentWinstreaks &
  CurrentWinstreakModes &
  ModeKills &
  ModeDeaths &
  ModeWins &
  ModeLosses &
  ModeBowHits &
  ModeBowShots &
  ModeDamageDealt &
  ModeHealthRegenerated &
  ModeMeleeHits &
  ModeMeleeSwings &
  ModeRoundsPlayed &
  ModeBlocksPlaced &
  ModeTitlePrestige &
  KitWins & {
    active_auras?: string
    active_cage?: string
    active_cosmetictitle?: string
    active_emblem?: string
    active_goal?: string
    active_hat?: string
    active_kill_effect?: string
    active_killmessages?: string
    active_projectile_trail?: string
    active_victory_dance?: string
    active_weaponpacks?: string
    amount_healed?: number
    amount_healed_standard?: number
    arrows_from_rend?: number
    arrows_from_rend_standard?: number
    assassin_master_alechmy_hearts?: number
    assassin_master_alechmy_hearts_standard?: number
    assassin_strikes_from_cloak?: number
    assassin_strikes_from_cloak_standard?: number
    // TODO investigate blaze and blaze_g
    blaze_amount_healed?: number
    blaze_amount_healed_standard?: number
    blaze_g_amount_healed?: number
    blaze_g_amount_healed_standard?: number
    blizzard_seconds_slow?: number
    blizzard_seconds_slow_standard?: number
    blocks_placed?: number
    bow_hits?: number
    bow_shots?: number
    bridgeMapWins?: string[]
    bucket_barriers_broken?: number
    bucket_barriers_broken_standard?: number
    challenges_enabled?: boolean
    chat_enabled?: string
    coins?: number
    // what
    cow_bucket_barriers_broken?: number
    cow_bucket_barriers_broken_standard?: number
    custom_titles?: string[]
    damage_dealt?: number
    deaths?: number
    duels_chest_history?: string[]
    duels_chests?: number
    Duels_openedChests?: number
    Duels_openedCommons?: number
    Duels_openedEpics?: number
    Duels_openedLegendaries?: number
    Duels_openedRares?: number
    duels_recently_played?: string
    duels_recently_played2?: string
    duels_showqueuebook?: boolean
    enderman_a_meters_travelled?: number
    enderman_a_meters_travelled_standard?: number
    enderman_meters_travelled?: number
    enderman_meters_travelled_standard?: number
    energy_from_grappling_hook?: number
    energy_from_grappling_hook_standard?: number
    favoriteGlyph?: string
    games_played_duels?: number
    goals?: number
    golden_apples_eaten?: number
    heal_pots_used?: number
    health_regenerated?: number
    kills?: number
    kit_menu_option?: string
    kit_wins?: number
    leaderboardPage_goals?: number
    leaderboardPage_win_streak?: number
    leaderboardPage_wins?: number
    losses?: number
    maps_won_on?: string[]
    master_alechmy_hearts?: number
    master_alechmy_hearts_standard?: number
    melee_hits?: number
    melee_swings?: number
    meters_travelled?: number
    meters_travelled_standard?: number
    mw_duels_class?: string
    new_titles_applied?: boolean
    packages?: string[]
    pingPreference?: number
    progress_mode?: string
    rematch_option_1?: string
    renegade_arrows_from_rend?: number
    renegade_arrows_from_rend_standard?: number
    renegade_energy_from_grappling_hook?: number
    renegade_energy_from_grappling_hook_standard?: number
    rounds_played?: number
    season_1_reward_fixes?: boolean
    selected_1?: string
    selected_1_new?: string
    selected_2?: string
    selected_2_new?: string
    shop_sort?: string
    shop_sort_enable_owned_first?: boolean
    show_lb_option?: string
    snowman_blizzard_seconds_slow?: number
    snowman_blizzard_seconds_slow_standard?: number
    status_field?: string
    strikes_from_cloak?: number
    strikes_from_cloak_standard?: number
    wins?: number
  }
