<template>
  <div
    v-if="spell"
    class="h-1/2 w-full relative cursor-pointer"
    v-on:click="startCountdown()"
  >
    <img
      :src="spell.image"
      class="h-full"
      v-bind:class="[cooldown > 0 ? 'filter grayscale' : '']"
    />
    <div
      v-if="cooldown > 0"
      class="
        transform
        text-shadow text-3xl
        absolute
        top-1/2
        -translate-y-1/2
        w-full
        text-center
      "
      v-bind:class="[cooldown <= 10 ? 'text-red-600' : 'text-white']"
    >
      {{ getCooldown() }}
    </div>
  </div>
</template>

<script lang="ts">
import LolApi, {
  CurrentGameParticipant,
  SummonerSpell as SummonerSpellType,
} from "@/services/lol-api";
import Interval from "@/services/interval";

import { Component, Prop, Vue } from "vue-property-decorator";
import { ChampionComponentConfig } from "./Champion.vue";

@Component
export default class SummonerSpell extends Vue {
  @Prop() private index!: number;
  @Prop() private participant!: CurrentGameParticipant;
  @Prop() private api!: LolApi;
  @Prop() private config!: ChampionComponentConfig;

  private spell: SummonerSpellType;

  private spells = [
    this.api.getSummonerSpellByKey(21),
    this.api.getSummonerSpellByKey(1),
    this.api.getSummonerSpellByKey(3),
    this.api.getSummonerSpellByKey(4),
    this.api.getSummonerSpellByKey(6),
    this.api.getSummonerSpellByKey(7),
    this.api.getSummonerSpellByKey(14),
    this.api.getSummonerSpellByKey(11),
    this.api.getSummonerSpellByKey(12),
  ];

  private pickerOpen = false;
  private cooldown = 0;
  private handle = -1;

  private interval: Interval;

  constructor() {
    super();
    this.interval = Interval.getInstance();
    this.spell = this.api.getSummonerSpellByKey(
      this.index === 1 ? this.participant.spell1Id : this.participant.spell2Id
    );
  }

  private getCooldown(): string {
    if (this.config.timeShowMinutes) {
      const min = Math.floor(this.cooldown / 60);
      if (min > 0) {
        const sec = this.cooldown - min * 60;
        if (sec < 10) {
          return `${min}:0${sec}`;
        } else {
          return `${min}:${sec}`;
        }
      }
    }
    return `${this.cooldown}`;
  }

  public startCountdown(): void {
    this.cooldown = this.api.getSummonerSpellCooldown(
      this.spell,
      this.participant.perks,
      this.participant.items
    );

    this.interval.add(this.cooldownCallback);
  }

  private cooldownCallback() {
    this.cooldown--;

    if (this.cooldown <= 0) {
      this.interval.remove(this.cooldownCallback);
    }
  }

  public setSpell(spell: SummonerSpellType): void {
    this.spell = spell;
  }
}
</script>

<style scoped lang="scss">
.text-shadow {
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
</style>
