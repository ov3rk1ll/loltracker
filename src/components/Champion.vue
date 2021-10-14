<template>
  <div class="flex relative mb-1 w-max" style="height: min(8rem, 16vh)">
    <div class="flex-shrink-0 w-auto">
      <img
        class="h-full"
        :src="api.getChampionByKey(participant.championId).image"
      />

      <div class="absolute bottom-0 pb-1 pl-1 flex w-full pr-16">
        <img
          v-if="participant.perks.perkIds.includes(8326)"
          class="w-9 rounded-full bg-black inline-block cursor-pointer"
          src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
        />
        <img
          v-if="participant.perks.perkIds.includes(8347)"
          class="w-9 rounded-full bg-black inline-block"
          src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
        />
        <div class="flex-grow"></div>
        <img
          v-on:click="toggleBoots()"
          class="w-9 rounded-full bg-black inline-block cursor-pointer"
          v-bind:class="{
            'opacity-60': !participant.items.find((x) => (x.id = 3158)),
          }"
          src="https://ddragon.leagueoflegends.com/cdn/11.19.1/img/item/3158.png"
        />
      </div>
    </div>
    <div class="flex-shrink-0">
      <SummonerSpell
        :api="api"
        :participant="participant"
        :index="1"
        :config="config"
        :gameId="gameId"
      />
      <SummonerSpell
        :api="api"
        :participant="participant"
        :index="2"
        :config="config"
        :gameId="gameId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import LolApi, { CurrentGameParticipant, Item } from "@/services/lol-api";
import { Channel } from "pusher-js";
import { Component, Prop, Vue } from "vue-property-decorator";
import SummonerSpell from "./SummonerSpell.vue";

export interface ChampionComponentConfig {
  timeShowMinutes: boolean;
  keepScreenOn: boolean;
}

@Component({
  components: {
    SummonerSpell,
  },
})
export default class Champion extends Vue {
  @Prop() private participant!: CurrentGameParticipant;
  @Prop() private api!: LolApi;
  @Prop() private config!: ChampionComponentConfig;
  @Prop() private gameId!: number;

  private pusherChannel: Channel | null = null;

  // TODO Make Unsealed Spellbook open a dialog to change both spells

  mounted(): void {
    this.pusherChannel = this.$pusher.subscribe("private-game-" + this.gameId);

    this.pusherChannel.bind(
      `client-item-${this.participant.summonerId}`,
      (items: Item[]) => {
        this.participant.items = items;
      }
    );
  }

  private toggleBoots(): void {
    if (this.participant.items.find((x) => (x.id = 3158))) {
      this.participant.items = [];
    } else {
      this.participant.items.push({
        id: 3158,
        name: "Ionian Boots of Lucidity",
      });
    }

    this.pusherChannel?.trigger(
      `client-item-${this.participant.summonerId}`,
      this.participant.items
    );
  }
}
</script>
