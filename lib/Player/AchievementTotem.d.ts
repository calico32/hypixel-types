export interface AchievementTotem {
  allowed_max_height?: number
  canCustomize?: boolean
  selectedColors?: { [key: string]: string }
  selectedParts?: { [key: string]: string }
  unlockedColors?: string[]
  unlockedParts?: string[]
}
