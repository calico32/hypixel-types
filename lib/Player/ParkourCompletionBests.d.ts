export type ParkourCheckpointBests = {
  [key in
    | 'ArcadeGames'
    | 'Bedwars'
    | 'BlitzLobby'
    | 'BuildBattle'
    | 'CopsnCrims'
    | 'Duels'
    | 'Housing'
    | 'mainLobby2017'
    | 'MegaWalls'
    | 'MurderMystery'
    | 'Prototype'
    | 'SkywarsAug2017'
    | 'SpeedUHC'
    | 'TNT'
    | 'Tourney'
    | 'uhc'
    | 'Warlords']?: {
    /** Key is a number like string, e.g. `"0"` or `"2". */
    [key: string]: number
  }
}
