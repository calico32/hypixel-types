import { IndexType } from '../shared/util';

export type HousingMeta = IndexType & {
  allowedBlocks?: string[];
  firstHouseJoinMs?: number;
  packages?: string[];
  playerSettings?: HousingPlayerSettings;
  playlist?: string;
  plotSize?: string;
  purchasedSlots?: number;
  selectedChannels_v3?: string[];
  toggle_BORDER?: boolean;
  tutorialStep?: string;
  visibilityDisabled?: boolean;
};

export interface HousingPlayerSettings {
  BORDER?: string;
  TIPS?: string;
  VISIBILITY?: string;
  YT_REPULSOR?: string;
}
