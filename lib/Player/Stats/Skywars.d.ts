export interface SkyWarClass {
  prestigious?: Prestigious[]
  recent?: Prestigious[]
  'GOLD_BOOTS:0'?: string
  'GOLD_CHESTPLATE:0'?: string
  'GOLD_LEGGINGS:0'?: string
  'ENDER_PEARL:0'?: string
  'EGG:0'?: string
  'GOLDEN_APPLE:0'?: string
  'IRON_LEGGINGS:0'?: string
  'POTION:1'?: string
  'WOOD_SWORD:0'?: string
  'FLINT_AND_STEEL:0'?: string
  'IRON_CHESTPLATE:0'?: string
  'LAVA_BUCKET:0'?: string
  'POTION:3'?: string
  'DIAMOND_BOOTS:0'?: string
  'WATER_BUCKET:0'?: string
  'POTION:2'?: string
  'STONE_SWORD:0'?: string
  'ANVIL:0'?: string
  'DIAMOND_HELMET:0'?: string
  'ENCHANTED_BOOK:0'?: string
  'EXP_BOTTLE:0'?: string
  'POTION:9'?: string
  'LEATHER_BOOTS:0'?: string
  'LEATHER_CHESTPLATE:0'?: string
  'LEATHER_LEGGINGS:0'?: string
  'SKULL_ITEM:3'?: string
  'ARROW:0'?: string
  'BOW:114'?: string
  'GOLD_HELMET:0'?: string
  'IRON_AXE:0'?: string
  'IRON_BOOTS:0'?: string
  'IRON_HELMET:0'?: string
  'IRON_PICKAXE:0'?: string
  'IRON_SWORD:0'?: string
  'LEATHER_HELMET:0'?: string
  'MONSTER_EGG:65'?: string
  'POTION:12'?: string
  'DIAMOND_LEGGINGS:0'?: string
  'DIAMOND_PICKAXE:0'?: string
  'STONE:0'?: string
  'DIAMOND_SWORD:0'?: string
  'DIAMOND_CHESTPLATE:0'?: string
  'MILK_BUCKET:0'?: string
  'POTION:8'?: string
  'DIAMOND_AXE:0'?: string
  'BEACON:0'?: string
  'DIAMOND_BLOCK:0'?: string
  'EMERALD_BLOCK:0'?: string
  'GOLD_BLOCK:0'?: string
  chest_armour?: string
  chest_bows?: string
  chest_swords?: string
  dragons?: string
  enable_legacy_items?: boolean
  enable_max_kits_and_perks?: boolean
  enable_night_time?: boolean
  enable_teleport_mayhem?: boolean
  health_buff?: string
  low_gravity?: boolean
  no_kits?: boolean
  one_hit_one_kill?: boolean
  speed?: string
}

export interface Prestigious {
  mode?: Mode
  sacrifice?: Sacrifice
  timestamp?: number
  uuid?: string
}

export enum Mode {
  SoloInsane = 'solo_insane',
  SoloNormal = 'solo_normal',
  TeamsInsane = 'teams_insane',
  TeamsNormal = 'teams_normal',
}

export enum Sacrifice {
  Decent = 'DECENT',
  Divine = 'DIVINE',
  Eww = 'EWW',
  Heavenly = 'HEAVENLY',
  Meh = 'MEH',
  Salty = 'SALTY',
  Succulent = 'SUCCULENT',
  Tasty = 'TASTY',
  Yucky = 'YUCKY',
}
