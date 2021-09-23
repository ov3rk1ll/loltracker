<template>
  <div class="home">
    <GameComponent
      :summonerName="summonerName"
      :region="region"
      v-if="region"
    />
    <div v-else>Region not set!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import GameComponent from "@/components/Game.vue"; // @ is an alias to /src
import { Route } from "vue-router";

@Component({
  components: {
    GameComponent,
  },
})
export default class Game extends Vue {
  private region = "";
  private summonerName = "";

  mounted(): void {
    this.onRouteChange(this.$route);
  }

  @Watch("$route")
  onRouteChange(to: Route): void {
    this.region = to.query["region"] as string;
    this.summonerName = to.query["name"] as string;
  }
}
</script>
