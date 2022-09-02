import { AchievementTotem } from './Player/AchievementTotem'
import { FireworkStorage } from './Player/FireworkStorage'
import { GiftingMeta } from './Player/GiftingMeta'
import { HousingMeta } from './Player/HousingMeta'
import { ParkourCheckpointBests } from './Player/ParkourCompletionBests'
import { PetStats } from './Player/PetStats'
import { SocialMedia } from './Player/SocialMedia'
import { Stats } from './Player/Stats'
import { Tourney } from './Player/Tourney'
import { IndexType } from './shared/util'

type Nonzero = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type LevelingRewards = {
  [key in `levelingReward_${
    | `${Nonzero}`
    | `${Nonzero}${Nonzero | 0}`
    | `1${Nonzero | 0}${Nonzero | 0}`
    | `2${0 | 1 | 2 | 3 | 4}${Nonzero | 0}`
    | `250`}`]?: boolean
}

export type Player = LevelingRewards &
  IndexType & {
    _id: string
    achievementPoints?: number
    achievementRewardsNew?: { [key: string]: number }
    achievements?: { [key: string]: number }
    achievementsOneTime?: string[]
    achievementSync?: IndexType
    achievementTotem?: AchievementTotem
    achievementTracking?: string[]
    adsense_tokens?: number
    adventRewards_v2_2018?: { [key: string]: number }
    adventRewards2017?: { [key: string]: number }
    adventRewards2019?: { [key: string]: number }
    adventRewards2020?: { [key: string]: number }
    anniversaryNPCProgress2020?: number
    anniversaryNPCVisited2020?: number[]
    'aprilFoolsPlayerClicked_-1': string[]
    aprilFoolsStaffClicked_0?: string[]
    auto_spawn_pet?: boolean
    battlePassGlowStatus?: boolean
    buildTeam?: boolean
    challenges?: IndexType & {
      all_time?: { [key: string]: number }
      day_g?: IndexType
      day_i?: IndexType
    }
    channel: string
    chat: boolean
    christmas2019Cooldowns?: { [key: string]: boolean }
    christmas2020Cooldowns?: { [key: string]: boolean }
    christmas2020Cooldowns2?: { [key: string]: boolean }
    claim_potato_war_crown?: number
    claimed_potato_basket?: number
    claimed_potato_talisman?: number
    clock?: boolean
    compassStats?: {
      compass?: {
        arcade?: number
        battleground?: number
        prototype?: number
        skywars?: number
        tntgames?: number
      }
    }
    completed_christmas_quests_2017?: number
    completed_christmas_quests_2018?: number
    completed_christmas_quests_2019?: number
    completed_christmas_quests_2020?: number
    completed_christmas_quests_2021?: number
    cooldowns?: {
      fun?: {
        dirtshack?: number
        event_quickmaths?: number
        event_scrambled?: number
        events?: number
        santaclaus?: number
        whatsmyface?: number
      }
    }
    currentClickEffect?: string
    currentCloak?: string
    currentGadget?: string
    currentPet?: string
    customFilter?: string
    disableTipMessages?: boolean
    disguise?: string
    displayname: string
    easter2020Cooldowns2?: { [key: string]: boolean }
    eugene?: { dailyTwoKExp?: number; weekly_booster?: number }
    eulaCoins?: boolean
    fireworkStorage?: FireworkStorage[]
    firstLogin?: number
    flashingSaleClicks?: number
    flashingSaleOpens?: number
    flashingSalePoppedUp?: number
    flashingSalePopup?: number
    fortuneBuff?: number
    friendRequests?: any[]
    friendRequestsUuid?: any[]
    gadget?: string
    giftingMeta?: GiftingMeta
    gifts_grinch?: number
    halloween2016Cooldowns?: { [key: string]: boolean }
    halloween2019Cooldowns?: { [key: string]: boolean }
    halloween2020Cooldowns?: { [key: string]: boolean }
    holiday2016Cooldowns?: { [key: string]: boolean }
    housingMeta?: HousingMeta
    karma?: number
    knownAliases?: string[]
    knownAliasesLower?: string[]
    lastAdsenseGenerateTime?: number
    lastClaimedReward?: number
    lastLogin?: number
    lastLogout?: number
    lastMapVote?: number
    levelUp_MVP?: number
    levelUp_MVP_PLUS?: number
    levelUp_VIP?: number
    levelUp_VIP_PLUS?: number
    main2017Tutorial?: boolean
    mcVersionRp: string
    monthlycrates?: {
      [key: string]: {
        MVP?: boolean
        MVP_PLUS?: boolean
        REGULAR?: boolean
        VIP?: boolean
        VIP_PLUS?: boolean
      }
    }
    monthlyPackageRank?: string
    monthlyRankColor?: string
    mostRecentGameType?: string
    mostRecentlyThanked?: string
    mostRecentlyThankedUuid?: string
    mostRecentlyTipped?: string
    mostRecentlyTippedUuid?: string
    mostRecentMinecraftVersion?: number
    mostRecentMonthlyPackageRank?: string
    multiTunnel?: any[]
    network_update_book?: string
    networkExp: number
    newPackageRank?: string
    notifications?: boolean
    onetime_achievement_menu_sort?: string
    packageRank?: string
    parkourCheckpointBests?: ParkourCheckpointBests
    parkourCompletions?: { [key: string]: { timeStart?: number; timeTook?: number }[] }
    particlePack?: string
    petConsumables?: { [key: string]: number }
    petJourneyTimestamp?: number
    petStats?: PetStats
    playername: string
    pp?: string
    prefix: string
    quests?: { [category: string]: { [key: string]: any } }
    questSettings?: { autoActivate?: boolean }
    quickjoin_timestamp?: number
    quickjoin_uses?: number
    rank?: string
    rankPlusColor?: string
    rewardConsumed?: boolean
    rewardHighScore?: number
    rewardScore?: number
    rewardStreak?: number
    SANTA_QUEST_STARTED?: boolean
    seeRequests?: boolean
    skyblock_free_cookie?: number
    snowball_fight_intro_2019?: boolean
    socialMedia?: SocialMedia
    specialtyCooldowns?: { [key: string]: boolean }
    spectators_invisible?: boolean
    stats: Stats
    summer2020Cooldowns?: { [key: string]: boolean }
    testPass?: boolean
    thanksReceived?: number
    thanksSent?: number
    timePlaying?: number
    totalDailyRewards?: number
    totalRewards?: number
    tournamentTokens?: number
    tourney?: Tourney
    transformation?: string
    userLanguage?: string
    uuid: string
    vanityConvertedBoxToday?: number
    vanityFavorites?: string
    vanityFirstConvertedBox?: number
    vanityMeta?: IndexType & { packages?: string[] }
    voting?: { [key: string]: number }
    wardrobe?: string
  }
