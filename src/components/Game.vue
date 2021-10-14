<template>
  <div>
    <div class="bg-gray-800 flex p-3 mb-2 text-white">
      <router-link to="/" class="w-6 h-6"
        ><font-awesome-icon icon="chevron-left"
      /></router-link>
      <h3 class="ml-0 font-semibold tracking-tight text-md p-0">
        <img
          class="h-6 inline-block mr-1 self-center"
          v-if="summonerInGame"
          :src="api.getChampionByKey(summonerInGame.championId).image"
        />
        <div v-if="summoner" class="inline-block">{{ summoner.name }}</div>
      </h3>
      <div class="flex-grow"></div>
      <IconToggle
        v-if="game"
        :icon="'sort'"
        :checked.sync="enableDraggable"
        class="mr-4"
      />
      <IconToggle
        v-if="game"
        :icon="'clock'"
        :checked.sync="config.timeShowMinutes"
        settingsKey="loltracker_config_time-show-minutes"
      />
      <IconToggle
        v-if="game && isWakelockSupported()"
        :icon="'sun'"
        :checked.sync="config.keepScreenOn"
        settingsKey="loltracker_config_keep-screen-on"
        class="ml-4"
      />
    </div>
    <div v-if="loading" class="text-4xl text-white text-center m-10">
      LOADING...
    </div>
    <div v-if="!game && !loading">
      <div class="text-4xl text-white text-center m-10">
        <b>{{ summoner.name }}</b> is currently not in a game!
      </div>
      <div class="text-center">
        <button class="button inline-block mr-2" v-on:click="load()">
          Reload
        </button>
        <button class="button inline-block ml-2" v-on:click="goHome()">
          Search
        </button>
      </div>
    </div>
    <div class="lg:ml-4 lg:mt-4" v-if="game && !loading">
      <draggable
        :disabled="!enableDraggable"
        v-model="enemyTeam"
        group="people"
        @start="drag = true"
        @end="drag = false"
      >
        <div v-for="p in enemyTeam" v-bind:key="p.summonerId">
          <Champion
            :api="api"
            :participant="p"
            :config="config"
            :gameId="game.gameId"
          />
        </div>
      </draggable>

      <footer class="text-xs mt-8">
        Tips:<br />
        <ul class="list-disc list-inside">
          <li>
            Click on <font-awesome-icon icon="sort" /> to enable drag&amp;drop
            reordering
          </li>
          <li>
            Click on <font-awesome-icon icon="clock" /> show minutes or only
            seconds
          </li>
          <li>
            Click on
            <img
              class="w-4 rounded-full bg-black inline-block"
              src="https://ddragon.leagueoflegends.com/cdn/11.19.1/img/item/3158.png"
            />
            if a champion bought <i>Ionian Boots of Lucidity</i>
          </li>
          <!--<li>
            Click on
            <img
              class="w-4 rounded-full bg-black inline-block"
              src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
            />
            to change summoner spells from <i>Unsealed Spellbook</i>
          </li>-->
        </ul>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import draggable from "vuedraggable";
import LolApi, {
  CurrentGameInfo,
  CurrentGameParticipant,
  SummonerDto,
} from "../services/lol-api";
import Champion, { ChampionComponentConfig } from "./Champion.vue";
import IconToggle from "./IconToggle.vue";

export interface GameUpdate {
  index: number;
  spellId: number;
  summonerId: string;
  cooldown: number;
}

@Component({
  components: {
    Champion,
    draggable,
    IconToggle,
  },
})
export default class Game extends Vue {
  @Prop() private summonerName!: string;
  @Prop() private region!: string;
  @Prop() private demoMode!: boolean;

  public api: LolApi = new LolApi(this.region, this.demoMode);

  private loading = true;

  private summoner: SummonerDto | null = null;
  private summonerInGame: CurrentGameParticipant | null = null;
  private game: CurrentGameInfo | null = null;

  private enemyTeam: Array<CurrentGameParticipant> = [];

  private enableDraggable = false;

  // eslint-disable-next-line no-undef
  private wakeLock: WakeLockSentinel | null = null;

  private config: ChampionComponentConfig = {
    timeShowMinutes: true,
    keepScreenOn: "wakeLock" in navigator,
  };

  mounted(): void {
    this.load();
  }

  async load(): Promise<void> {
    this.loading = true;
    try {
      this.summoner = await this.api.getSummonerByName(this.summonerName);
    } catch (e) {
      this.$router.push({
        path: "/",
        query: { error: "404", region: this.region },
      });
      return;
    }

    if (this.isWakelockSupported()) {
      this.onWakeLockChanged(this.config.keepScreenOn);
    }

    try {
      this.game = await this.api.getCurrentGameInfo(this.summoner.id);
    } catch (e) {
      this.loading = false;
      return;
    }

    await this.api.loadStaticData();

    const summoner = this.game.participants.find(
      (x) => x.summonerId === this.summoner?.id
    );
    if (summoner) {
      this.summonerInGame = summoner;
    }

    const playerTeamId = this.summonerInGame?.teamId;

    // Try to sort players into lanes depending on the summoner spells
    const players = this.game.participants.filter(
      (x) => x.teamId !== playerTeamId
    );
    this.enemyTeam = this.sortPlayers(players);
    if (this.enemyTeam.length === 0) {
      this.game = null;
    }

    this.loading = false;
  }

  public goHome(): void {
    this.$router.push({ path: "/", query: { region: this.region } });
  }

  private sortPlayers(
    players: CurrentGameParticipant[]
  ): CurrentGameParticipant[] {
    const enemyTeam = new Array(players.length);

    // Set first player with teleport as top
    let pos = this.findPlayerIndexForSpell(players, 12);
    if (pos !== -1) {
      enemyTeam[0] = players[pos];
      players.splice(pos, 1);
    }

    // Set 2nd player with teleport as mid
    pos = this.findPlayerIndexForSpell(players, 12);
    if (pos !== -1) {
      enemyTeam[2] = players[pos];
      players.splice(pos, 1);
    }

    // Set first player with smite as jungle
    pos = this.findPlayerIndexForSpell(players, 11);
    if (pos !== -1) {
      enemyTeam[1] = players[pos];
      players.splice(pos, 1);
    }

    // Set first player with heal as adc
    pos = this.findPlayerIndexForSpell(players, 7);
    if (pos !== -1) {
      enemyTeam[3] = players[pos];
      players.splice(pos, 1);
    }

    // Fill the rest of the team
    let j = 0;
    for (let i = 0; i < enemyTeam.length; i++) {
      if (enemyTeam[i]) {
        continue;
      }
      enemyTeam[i] = players[j];
      j++;
    }

    return enemyTeam;
  }

  private findPlayerIndexForSpell(
    players: CurrentGameParticipant[],
    spell: number
  ): number {
    return players.findIndex(
      (x) => x.spell1Id === spell || x.spell2Id === spell
    );
  }

  private isWakelockSupported(): boolean {
    return "wakeLock" in navigator;
  }

  @Watch("config.keepScreenOn")
  private async onWakeLockChanged(to: boolean) {
    if (to) {
      try {
        this.wakeLock = await navigator.wakeLock.request("screen");
      } catch (err) {
        // The Wake Lock request has failed - usually system related, such as battery.
      }
    } else {
      if (this.wakeLock) {
        this.wakeLock.release().then(() => {
          this.wakeLock = null;
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  @apply px-4
          py-2
          duration-100
          bg-gray-700
          shadow-sm
          rounded
          hover:bg-gray-600
          focus:ring-2
          text-white;
}
</style>
