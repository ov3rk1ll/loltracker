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
import { Channel } from "pusher-js";
import { GameUpdate } from "./Game.vue";

@Component
export default class SummonerSpell extends Vue {
  @Prop() private index!: number;
  @Prop() private participant!: CurrentGameParticipant;
  @Prop() private api!: LolApi;
  @Prop() private config!: ChampionComponentConfig;
  @Prop() private gameId!: number;

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

  private pusherChannel: Channel | null = null;

  constructor() {
    super();
    this.interval = Interval.getInstance();
    this.spell = this.api.getSummonerSpellByKey(
      this.index === 1 ? this.participant.spell1Id : this.participant.spell2Id
    );
  }

  mounted(): void {
    this.pusherChannel = this.$pusher.subscribe("private-game-" + this.gameId);
    this.pusherChannel.bind(
      `client-cooldown-${this.participant.summonerId}-${this.index}`,
      (msg: { event: string; data: GameUpdate }) => {
        this.setCooldown(msg.data.cooldown);
      }
    );
  }

  unmounted(): void {
    if (this.pusherChannel) {
      this.$pusher.unbind(
        `client-cooldown-${this.participant.summonerId}-${this.index}`
      );
      this.pusherChannel = null;
    }
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
    const cooldown = this.api.getSummonerSpellCooldown(
      this.spell,
      this.participant.perks,
      this.participant.items
    );

    if (this.pusherChannel) {
      this.pusherChannel.trigger(
        `client-cooldown-${this.participant.summonerId}-${this.index}`,
        {
          event: "cooldown",
          data: {
            index: this.index,
            spellId:
              this.index === 1
                ? this.participant.spell1Id
                : this.participant.spell2Id,
            summonerId: this.participant.summonerId,
            cooldown: cooldown,
          } as GameUpdate,
        }
      );
    }

    this.setCooldown(cooldown);
  }

  public setCooldown(cooldown: number): void {
    this.cooldown = cooldown;
    if (this.cooldown > 0) {
      this.interval.add(this.cooldownCallback);
    }
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
