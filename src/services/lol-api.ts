import { game, summoner } from "@/data/dummy-data";
import axios, { AxiosInstance } from "axios";
import spells from "../data/spells";

export interface SummonerDto {
  /** Encrypted summoner ID. Max length 63 characters. */
  id: string;

  /** Encrypted account ID. Max length 56 characters. */
  accountId: string;

  /** Encrypted PUUID. Exact length of 78 characters. */
  puuid: string;

  /** Summoner name. */
  name: string;

  /** ID of the summoner icon associated with the summoner. */
  profileIconId: number;

  /** Date summoner was last modified specified as epoch milliseconds. */
  revisionDate: number;

  /** Summoner level associated with the summoner. */
  summonerLevel: number;
}

export interface CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: string;
  gameMode: string;
  bannedChampions: Array<BannedChampion>;
  gameQueueConfigId: number;
  observers: Observer;
  participants: Array<CurrentGameParticipant>;
}

export interface BannedChampion {
  pickTurn: number;
  championId: number;
  teamId: number;
}

export interface Observer {
  encryptionKey: string;
}

export interface CurrentGameParticipant {
  championId: number;
  perks: Perks;
  profileIconId: number;
  bot: boolean;
  teamId: number;
  summonerName: string;
  summonerId: string;
  spell1Id: number;
  spell2Id: number;
  items: Item[];
}

export interface Perks {
  perkIds: Array<number>;
  perkStyle: number;
  perkSubStyle: number;
}

export interface ChampionDto {
  key: string;
  name: string;
  image: { full: string };
}

export interface Champion {
  name: string;
  image: string;
}

export interface SummonerSpell {
  name: string;
  image: string;
  cooldown: number;
}

export interface Item {
  name: string;
  id: number;
}

export default class LolApi {
  private client: AxiosInstance;

  private champions: { [key: number]: Champion } = {};
  private summonerSpells: { [key: number]: SummonerSpell } = {};

  constructor(region: string, private useDemoData: boolean = false) {
    this.client = axios.create({
      baseURL: `https://lol-tracker-spectator.herokuapp.com/${region}`,
      //baseURL: `http://localhost:5000/${region}`,
    });
  }

  public async loadStaticData(): Promise<void> {
    const language = "en_US";
    const latestVersion = (
      await axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
    ).data[0] as string;

    this.champions = {};

    const championData = (
      await axios.get<{ data: { [key: string]: ChampionDto } }>(
        `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${language}/champion.json`
      )
    ).data;

    for (const key in championData.data) {
      const e = championData.data[key];
      this.champions[parseInt(e.key)] = {
        name: e.name,
        image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${e.image.full}`,
      };
    }

    this.summonerSpells = {};

    for (const e of spells) {
      this.summonerSpells[e.id] = {
        name: e.name,
        image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/spell/${e.image.full}`,
        cooldown: parseInt(e.cooldownBurn),
      };
    }
  }

  public getChampionByKey(key: number): Champion {
    return this.champions[key];
  }

  public getSummonerSpellByKey(key: number): SummonerSpell {
    return this.summonerSpells[key];
  }

  public getSummonerSpellCooldown(
    spell: SummonerSpell,
    perks: Perks,
    items: Array<Item>
  ): number {
    let abilityHaste = 0;
    if (perks.perkIds.includes(8347)) {
      abilityHaste += 18;
    }
    if (items.find((x) => (x.id = 3158))) {
      abilityHaste += 12;
    }

    return Math.ceil(spell.cooldown * (100 / (abilityHaste + 100)));
  }

  public async getSummonerByName(summonerName: string): Promise<SummonerDto> {
    if (this.useDemoData) {
      return summoner;
    }
    const resp = await this.client.get<{ data: SummonerDto }>(
      `/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`
    );
    return resp.data?.data;
  }

  public async getCurrentGameInfo(
    encryptedSummonerId: string
  ): Promise<CurrentGameInfo> {
    if (this.useDemoData) {
      return game;
    }
    const resp = await this.client.get<{ data: CurrentGameInfo }>(
      `/spectator/v4/active-games/by-summoner/${encodeURIComponent(
        encryptedSummonerId
      )}`
    );
    const data = resp.data?.data as CurrentGameInfo;
    data.participants = data.participants.map((x) => {
      x.items = [];
      return x;
    });
    return data;
  }
}
