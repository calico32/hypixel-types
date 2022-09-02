import { Arcade } from './Stats/Arcade'
import { Arena } from './Stats/Arena'
import { Battleground } from './Stats/Battleground'
import { Bedwars } from './Stats/Bedwars'
import { BuildBattle } from './Stats/BuildBattle'
import { Duels } from './Stats/Duels'
import { GingerBread } from './Stats/Gingerbread'
import { Housing } from './Stats/Housing'
import { Legacy } from './Stats/Legacy'
import { Mcgo } from './Stats/Mcgo'
import { Paintball } from './Stats/Paintball'
import { Pit } from './Stats/Pit'
import { Quake } from './Stats/Quake'
import { SkyClash } from './Stats/SkyClash'
import { SkyWarClass } from './Stats/Skywars'
import { SpeedUHC } from './Stats/SpeedUHC'
import { SuperSmash } from './Stats/SuperSmash'
import { TNTGames } from './Stats/TNTGames'
import { TrueCombat } from './Stats/TrueCombat'
import { UHCClass } from './Stats/UHC'
import { VampireZ } from './Stats/VampireZ'
import { Walls } from './Stats/Walls'
import { Walls3Class } from './Stats/Walls3'

export interface Stats {
  Arcade: Arcade
  Arena: Arena
  Battleground: Battleground
  Bedwars: Bedwars
  BuildBattle: BuildBattle
  Duels: Duels
  GingerBread: GingerBread
  Housing: Housing
  HungerGames: { [key: string]: string[] | boolean | number | { [key: string]: string } | string }
  Legacy: Legacy
  MCGO: Mcgo
  MurderMystery: { [key: string]: string[] | boolean | number | string }
  Paintball: Paintball
  Pit: Pit
  Quake: Quake
  SkyBlock: { profiles: { [key: string]: { cute_name: string; profile_id: string } } }
  SkyClash: SkyClash
  SkyWars: { [key: string]: string[] | boolean | SkyWarClass | number | string }
  SpeedUHC: SpeedUHC
  SuperSmash: SuperSmash
  TNTGames: TNTGames
  TrueCombat: TrueCombat
  UHC: UHCClass
  VampireZ: VampireZ
  Walls: Walls
  Walls3: { [key: string]: string[] | boolean | Walls3Class | number | string }
}
