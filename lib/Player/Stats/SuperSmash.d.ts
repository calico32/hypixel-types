export interface SuperSmash {
  active_class?: string
  assists?: number
  assists_normal?: number
  class_stats?: ClassStats
  classes?: Classes
  coins?: number
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_3v3?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  damage_dealtteams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_3v3?: number
  deaths_normal?: number
  deaths_teams?: number
  deathsteams?: number
  expBooster_purchases_10_plays?: number
  expBooster_purchases_30_plays?: number
  expBooster_purchases_100_plays?: number
  expired_booster?: boolean
  friend_losses?: number
  friend_losses_normal?: number
  friend_wins?: number
  friend_wins_normal?: number
  FRIENDS_firstGame?: number
  FRIENDS_gamesDay?: number
  games?: number
  games_2v2?: number
  games_3v3?: number
  games_monthly_a?: number
  games_monthly_b?: number
  games_normal?: number
  games_teams?: number
  games_weekly_a?: number
  games_weekly_b?: number
  gamesteams?: number
  hero_level_booster_active?: HeroLevelBoosterActive
  kills?: number
  kills_2v2?: number
  kills_3v3?: number
  kills_monthly_a?: number
  kills_monthly_b?: number
  kills_normal?: number
  kills_teams?: number
  kills_weekly_a?: number
  kills_weekly_b?: number
  killsteams?: number
  lastLevel_BOTMUN?: number
  lastLevel_CAKE_MONSTER?: number
  lastLevel_DUSK_CRAWLER?: number
  lastLevel_FROSTY?: number
  lastLevel_GENERAL_CLUCK?: number
  lastLevel_GOKU?: number
  lastLevel_MARAUDER?: number
  lastLevel_PUG?: number
  lastLevel_SANIC?: number
  lastLevel_SHOOP_DA_WHOOP?: number
  lastLevel_SKULLFIRE?: number
  lastLevel_SPODERMAN?: number
  lastLevel_THE_BULK?: number
  lastLevel_TINMAN?: number
  losses?: number
  losses_2v2?: number
  losses_3v3?: number
  losses_monthly_a?: number
  losses_monthly_b?: number
  losses_normal?: number
  losses_teams?: number
  losses_weekly_a?: number
  losses_weekly_b?: number
  lossesteams?: number
  ONE_V_JUAN_firstGame?: number
  ONE_V_JUAN_gamesDay?: number
  one_v_one_losses?: number
  one_v_one_losses_normal?: number
  one_v_one_wins?: number
  one_v_one_wins_normal?: number
  pg_BOTMUN?: number
  pg_DUSK_CRAWLER?: number
  pg_THE_BULK?: number
  quits?: number
  smash_level_total?: number
  smashed?: number
  smashed_2v2?: number
  smashed_3v3?: number
  smashed_normal?: number
  smashed_teams?: number
  smashedteams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_3v3?: number
  smasher_normal?: number
  smasher_teams?: number
  smasherteams?: number
  smashLevel?: number
  votes_Blossom?: number
  votes_Cobalt?: number
  'votes_Color Clash'?: number
  votes_Courtyard?: number
  votes_Cubed?: number
  votes_Grave?: number
  votes_Grove?: number
  votes_Gunmetal?: number
  'votes_Strawberry Towers'?: number
  votes_Toybox?: number
  win_streak?: number
  wins?: number
  wins_2v2?: number
  wins_monthly_a?: number
  wins_monthly_b?: number
  wins_normal?: number
  wins_teams?: number
  wins_weekly_a?: number
  wins_weekly_b?: number
  winsteams?: number
  xp_BOTMUN?: number
  xp_CAKE_MONSTER?: number
  xp_DUSK_CRAWLER?: number
  xp_FROSTY?: number
  xp_GENERAL_CLUCK?: number
  xp_GOKU?: number
  xp_MARAUDER?: number
  xp_PUG?: number
  xp_SHOOP_DA_WHOOP?: number
  xp_SKULLFIRE?: number
  xp_SPODERMAN?: number
  xp_THE_BULK?: number
  xp_TINMAN?: number
}

export interface ClassStats {
  BOTMUN?: Botmun
  CAKE_MONSTER?: CakeMonster
  DUSK_CRAWLER?: DuskCrawler
  FROSTY?: Frosty
  GENERAL_CLUCK?: GeneralCluck
  GOKU?: Goku
  MARAUDER?: Marauder
  PUG?: Pug
  SANIC?: Sanic
  SHOOP_DA_WHOOP?: ShoopDaWhoop
  SKULLFIRE?: Skullfire
  SPODERMAN?: Spoderman
  THE_BULK?: TheBulk
  TINMAN?: Tinman
}

export interface Botmun {
  batarang?: { [key: string]: number }
  bazooka?: ChiangMaiGoose
  botmubile?: { [key: string]: number }
  boulder?: ChiangMaiGoose
  cake_storm?: CakeStorm
  charged_beam?: CakeStorm
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  defecake?: CakeStorm
  desert_eagle?: ChiangMaiGoose
  egg_bazooka?: ChiangMaiGoose
  flaming_desert_eagle?: EsbjergCougar
  force_lightning?: ChiangMaiGoose
  force_pull?: ChiangMaiGoose
  freezing_breath?: ChiangMaiGoose
  friend_losses?: number
  friend_losses_normal?: number
  friend_wins?: number
  friend_wins_normal?: number
  frostbolt?: ChiangMaiGoose
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  grappling_hook?: { [key: string]: number }
  homing_missiles?: ChiangMaiGoose
  ki_blast?: ChiangMaiGoose
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  losses_teams?: number
  melee?: { [key: string]: number }
  monster_charge?: ChiangMaiGoose
  notched_bow?: CakeStorm
  onion_cannon?: EsbjergCougar
  overload?: Overload
  reinforcements?: EsbjergCougar
  rocket_punch?: Overload
  seismic_slam?: ChiangMaiGoose
  shield_bash?: CakeStorm
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  smasher_teams?: number
  spider_kick?: ChiangMaiGoose
  spooder_buddies?: ChiangMaiGoose
  swing_pin?: Overload
  throw_cake?: ChiangMaiGoose
  wall_climber?: CakeStorm
  web_shot?: Overload
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  wins_teams?: number
}

export interface ChiangMaiGoose {
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
}

export interface CakeStorm {
  smashed?: number
  smashed_2v2?: number
}

export interface EsbjergCougar {
  smashed?: number
  smashed_normal?: number
}

export interface Overload {
  smashed?: number
  smashed_teams?: number
}

export interface CakeMonster {
  cake_storm?: { [key: string]: number }
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  defecake?: Defecake
  force_lightning?: EsbjergCougar
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  ki_blast?: Overload
  kills?: number
  kills_normal?: number
  laser_cannon?: EsbjergCougar
  losses?: number
  losses_2v2?: number
  losses_teams?: number
  melee?: { [key: string]: number }
  monster_charge?: EsbjergCougar
  onion_cannon?: CakeStorm
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_normal?: number
  spider_kick?: EsbjergCougar
  swing_pin?: { [key: string]: number }
  throw_cake?: { [key: string]: number }
  win_streak?: number
  win_streak_normal?: number
  wins?: number
  wins_normal?: number
}

export interface Defecake {
  damage_dealt?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
}

export interface DuskCrawler {
  batarang?: ChiangMaiGoose
  bazooka?: EsbjergCougar
  botmubile?: EsbjergCougar
  boulder?: ChiangMaiGoose
  cake_storm?: EsbjergCougar
  charged_beam?: EsbjergCougar
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_3v3?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_3v3?: number
  deaths_normal?: number
  deaths_teams?: number
  desert_eagle?: EsbjergCougar
  force_lightning?: ChiangMaiGoose
  force_pull?: EsbjergCougar
  frostbolt?: EsbjergCougar
  games?: number
  games_2v2?: number
  games_3v3?: number
  games_normal?: number
  games_teams?: number
  homing_missiles?: CakeStorm
  kame_beam?: EsbjergCougar
  ki_blast?: EsbjergCougar
  kills?: number
  kills_2v2?: number
  kills_3v3?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_2v2?: number
  losses_3v3?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  monster_charge?: CakeStorm
  reinforcements?: EsbjergCougar
  rocket_punch?: RocketPunch
  seismic_slam?: ChiangMaiGoose
  smashed?: number
  smashed_2v2?: number
  smashed_3v3?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_3v3?: number
  smasher_normal?: number
  smasher_teams?: number
  spooder_buddies?: SpooderBuddies
  swing_pin?: CakeStorm
  teleboom?: { [key: string]: number }
  telepunch?: { [key: string]: number }
  throw_cake?: ChiangMaiGoose
  void_slash?: { [key: string]: number }
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  wins_teams?: number
}

export interface RocketPunch {
  smashed?: number
}

export interface SpooderBuddies {
  smashed?: number
  smashed_2v2?: number
  smashed_3v3?: number
}

export interface Frosty {
  batarang?: ChiangMaiGoose
  bazooka?: Overload
  botmubile?: CakeStorm
  boulder?: ChiangMaiGoose
  cake_storm?: CakeStorm
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  damage_dealtteams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  deathsteams?: number
  desert_eagle?: CakeStorm
  egg_bazooka?: Overload
  flaming_desert_eagle?: CakeStorm
  force_lightning?: CakeStorm
  force_pull?: Overload
  freezing_breath?: { [key: string]: number }
  frostbolt?: { [key: string]: number }
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  gamesteams?: number
  homing_missiles?: ChiangMaiGoose
  ki_blast?: Overload
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  kills_teams?: number
  killsteams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  losses_teams?: number
  lossesteams?: number
  melee?: { [key: string]: number }
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smashedteams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  smasher_teams?: number
  smasherteams?: number
  throw_cake?: CakeStorm
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streakteams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  winsteams?: number
}

export interface GeneralCluck {
  batarang?: EsbjergCougar
  bazooka?: { [key: string]: number }
  boulder?: EsbjergCougar
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  egg_bazooka?: { [key: string]: number }
  friend_losses?: number
  friend_losses_normal?: number
  friend_wins?: number
  friend_wins_normal?: number
  games?: number
  games_2v2?: number
  games_normal?: number
  grappling_hook?: EsbjergCougar
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  reinforcements?: { [key: string]: number }
  seismic_slam?: EsbjergCougar
  smashed?: number
  smashed_normal?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  win_streak?: number
  win_streak_normal?: number
  wins?: number
  wins_normal?: number
}

export interface Goku {
  batarang?: EsbjergCougar
  bazooka?: EsbjergCougar
  botmubile?: EsbjergCougar
  cake_storm?: Overload
  damage_dealt?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_normal?: number
  deaths_teams?: number
  games?: number
  games_normal?: number
  games_teams?: number
  kame_beam?: { [key: string]: number }
  ki_blast?: { [key: string]: number }
  kills?: number
  kills_normal?: number
  kills_teams?: number
  melee?: { [key: string]: number }
  reinforcements?: EsbjergCougar
  smashed?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_normal?: number
  smasher_teams?: number
  spooder_buddies?: EsbjergCougar
  win_streak?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_normal?: number
  wins_teams?: number
}

export interface Marauder {
  batarang?: ChiangMaiGoose
  botmubile?: ChiangMaiGoose
  boulder?: EsbjergCougar
  cake_storm?: Overload
  damage_dealt?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_normal?: number
  deaths_teams?: number
  force_lightning?: { [key: string]: number }
  force_pull?: { [key: string]: number }
  frostbolt?: Overload
  games?: number
  games_normal?: number
  games_teams?: number
  homing_missiles?: EsbjergCougar
  kills?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: EsbjergCougar
  losses?: number
  losses_normal?: number
  losses_teams?: number
  melee?: { [key: string]: number }
  monster_mash?: EsbjergCougar
  smashed?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_normal?: number
  smasher_teams?: number
  swing_pin?: EsbjergCougar
  win_streak?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_normal?: number
  wins_teams?: number
}

export interface Pug {
  batarang?: EsbjergCougar
  bite?: { [key: string]: number }
  damage_dealt?: number
  damage_dealt_normal?: number
  deaths?: number
  deaths_normal?: number
  desert_eagle?: EsbjergCougar
  flaming_desert_eagle?: EsbjergCougar
  force_lightning?: EsbjergCougar
  games?: number
  games_normal?: number
  homing_missiles?: EsbjergCougar
  kills?: number
  kills_normal?: number
  losses?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  monster_mash?: EsbjergCougar
  smashed?: number
  smashed_normal?: number
  smasher?: number
  smasher_normal?: number
  supersonic_bark?: SupersonicBark
  werepug?: { [key: string]: number }
  win_streak?: number
  win_streak_normal?: number
  wins?: number
  wins_normal?: number
}

export interface SupersonicBark {
  damage_dealt?: number
  damage_dealt_normal?: number
}

export interface Sanic {
  boom?: Boom
  damage_dealt?: number
  damage_dealt_normal?: number
  dash?: { [key: string]: number }
  deaths?: number
  deaths_normal?: number
  desert_eagle?: EsbjergCougar
  games?: number
  games_normal?: number
  kills?: number
  kills_normal?: number
  losses?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  onion_cannon?: SupersonicBark
  smashed?: number
  smashed_normal?: number
  smasher?: number
  smasher_normal?: number
}

export interface Boom {
  damage_dealt?: number
  damage_dealt_normal?: number
  kills?: number
  kills_normal?: number
}

export interface ShoopDaWhoop {
  charged_beam?: Boom
  damage_dealt?: number
  damage_dealt_normal?: number
  deaths?: number
  deaths_normal?: number
  fir_ma_lazer?: Boom
  games?: number
  games_normal?: number
  kills?: number
  kills_normal?: number
  melee?: SupersonicBark
  smasher?: number
  smasher_normal?: number
  static_laser?: { [key: string]: number }
  win_streak?: number
  win_streak_normal?: number
  wins?: number
  wins_normal?: number
}

export interface Skullfire {
  batarang?: EsbjergCougar
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  desert_eagle?: { [key: string]: number }
  flaming_desert_eagle?: { [key: string]: number }
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  grenade?: { [key: string]: number }
  ki_blast?: EsbjergCougar
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  smasher_teams?: number
  swing_pin?: EsbjergCougar
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  wins_teams?: number
}

export interface Spoderman {
  batarang?: ChiangMaiGoose
  bazooka?: Overload
  botmubile?: EsbjergCougar
  boulder?: EsbjergCougar
  damage_dealt?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_normal?: number
  deaths_teams?: number
  force_lightning?: ChiangMaiGoose
  force_pull?: EsbjergCougar
  freezing_breath?: EsbjergCougar
  games?: number
  games_normal?: number
  games_teams?: number
  ki_blast?: EsbjergCougar
  kills?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_normal?: number
  melee?: { [key: string]: number }
  smashed?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_normal?: number
  smasher_teams?: number
  spider_kick?: { [key: string]: number }
  spooder_buddies?: { [key: string]: number }
  wall_climber?: Defecake
  web_shot?: { [key: string]: number }
  win_streak?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_normal?: number
  wins_teams?: number
}

export interface TheBulk {
  batarang?: ChiangMaiGoose
  bazooka?: ChiangMaiGoose
  botmubile?: EsbjergCougar
  boulder?: { [key: string]: number }
  cake_storm?: Overload
  charged_beam?: ChiangMaiGoose
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  defecake?: CakeStorm
  desert_eagle?: ChiangMaiGoose
  egg_bazooka?: ChiangMaiGoose
  flaming_desert_eagle?: ChiangMaiGoose
  force_lightning?: ChiangMaiGoose
  force_pull?: ChiangMaiGoose
  friend_losses?: number
  friend_losses_normal?: number
  friend_wins?: number
  friend_wins_normal?: number
  frostbolt?: ChiangMaiGoose
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  grappling_hook?: CakeStorm
  homing_missiles?: ChiangMaiGoose
  ki_blast?: EsbjergCougar
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: ChiangMaiGoose
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  losses_teams?: number
  melee?: { [key: string]: number }
  monster_charge?: { [key: string]: number }
  monster_mash?: { [key: string]: number }
  notched_bow?: Overload
  one_v_one_losses?: number
  one_v_one_losses_normal?: number
  one_v_one_wins?: number
  one_v_one_wins_normal?: number
  overload?: ChiangMaiGoose
  reinforcements?: ChiangMaiGoose
  seismic_slam?: { [key: string]: number }
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  smasher_teams?: number
  spider_kick?: ChiangMaiGoose
  spooder_buddies?: ChiangMaiGoose
  static_laser?: EsbjergCougar
  swing_pin?: EsbjergCougar
  throw_cake?: ChiangMaiGoose
  web_shot?: CakeStorm
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  wins_teams?: number
}

export interface Tinman {
  batarang?: CakeStorm
  cake_storm?: CakeStorm
  damage_dealt?: number
  damage_dealt_2v2?: number
  damage_dealt_normal?: number
  damage_dealt_teams?: number
  deaths?: number
  deaths_2v2?: number
  deaths_normal?: number
  deaths_teams?: number
  egg_bazooka?: EsbjergCougar
  force_lightning?: EsbjergCougar
  games?: number
  games_2v2?: number
  games_normal?: number
  games_teams?: number
  homing_missiles?: { [key: string]: number }
  kills?: number
  kills_2v2?: number
  kills_normal?: number
  kills_teams?: number
  laser_cannon?: { [key: string]: number }
  losses?: number
  losses_2v2?: number
  losses_normal?: number
  losses_teams?: number
  melee?: { [key: string]: number }
  overload?: { [key: string]: number }
  rocket_punch?: { [key: string]: number }
  seismic_slam?: EsbjergCougar
  smashed?: number
  smashed_2v2?: number
  smashed_normal?: number
  smashed_teams?: number
  smasher?: number
  smasher_2v2?: number
  smasher_normal?: number
  smasher_teams?: number
  telepunch?: EsbjergCougar
  throw_cake?: Overload
  win_streak?: number
  win_streak_2v2?: number
  win_streak_normal?: number
  win_streak_teams?: number
  wins?: number
  wins_2v2?: number
  wins_normal?: number
  wins_teams?: number
}

export interface Classes {
  FROSTY?: boolean
}

export interface HeroLevelBoosterActive {
  key?: string
  multiplier?: number
  plays?: number
  value?: number
}
