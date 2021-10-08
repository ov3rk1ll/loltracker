<template>
  <div class="bg-gray-900 text-white m-4 p-2">
    <div class="w-max-96 w-full">
      <img
        src="../assets/logo.png"
        class="mb-4 block text-center w-max-96 mx-auto"
      />
    </div>
    <div
      v-if="error"
      class="
        relative
        flex
        items-center
        p-4
        border-l-4
        rounded
        shadow-sm
        bg-red-50
        border-red-500
        mb-4
      "
    >
      <div class="flex-grow text-red-700">Summoner no found!</div>
    </div>
    <form class="flex flex-wrap items-stretch">
      <select
        type="text"
        name="region"
        v-model="region"
        class="bg-gray-700 p-2 flex"
      >
        <option value="euw1">EUW</option>
        <option value="eun1">EUNE</option>
        <option value="na1">NA</option>
      </select>
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Enter summoner name..."
        class="bg-gray-800 p-2 mr-0 ml-0 flex-1 block w-full"
      />
      <button
        type="submit"
        @click.stop.prevent="submit()"
        class="bg-gray-700 p-2 flex"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "@/components/Game.vue"; // @ is an alias to /src

@Component({
  components: {
    Game,
  },
})
export default class Home extends Vue {
  private region = "euw1";
  private name = "";

  private error = "";

  mounted(): void {
    this.error = this.$route.query["error"] as string;
    this.region = (this.$route.query["region"] as string) ?? "euw1";
  }

  submit(): void {
    this.$router.push({
      path: "game",
      query: { region: this.region, name: this.name },
    });
  }
}
</script>
