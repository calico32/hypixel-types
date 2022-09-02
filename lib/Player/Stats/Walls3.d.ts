export interface Walls3Class {
  enderman?: Enderman
  herobrine?: Herobrine
  skeleton?: Enderman
  zombie?: Enderman
  '0'?: string
  '2'?: string
  '3'?: string
  '4'?: string
  '5'?: string
  '7'?: string
  '8'?: string
  '9'?: string
  '1'?: string
  '6'?: string
}

export interface Enderman {
  checked4?: boolean
  skill_level_a?: number
  skill_level_aChecked5?: boolean
  skill_level_d?: number
  skill_level_dChecked5?: boolean
  unlocked?: boolean
}

export interface Herobrine {
  checked4?: boolean
  enderchest_rows?: number
  prestige?: number
  skill_level_a?: number
  skill_level_aChecked5?: boolean
  skill_level_b?: number
  skill_level_bChecked5?: boolean
  skill_level_c?: number
  skill_level_cChecked5?: boolean
  skill_level_d?: number
  skill_level_dChecked5?: boolean
  skill_level_g?: number
  skill_level_gChecked5?: boolean
  unlocked?: boolean
}
