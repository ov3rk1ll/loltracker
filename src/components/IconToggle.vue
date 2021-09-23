<template>
  <div
    class="w-6 h-6 cursor-pointer text-center"
    v-on:click="toggle()"
    v-bind:class="{ 'opacity-60': !syncedChecked }"
  >
    <font-awesome-icon :icon="icon" size="lg" />
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Prop, Vue } from "vue-property-decorator";

@Component
export default class IconToggle extends Vue {
  @PropSync("checked", { type: Boolean }) syncedChecked!: boolean;
  @Prop() private icon!: string;
  @Prop() private settingsKey?: string;

  mounted(): void {
    if (this.settingsKey != null) {
      const value = localStorage.getItem(this.settingsKey);
      if (value === "1" || value === "0") {
        this.syncedChecked = value === "1";
      }
    }
  }

  private toggle(): void {
    this.syncedChecked = !this.syncedChecked;
    this.$nextTick(() => {
      if (this.settingsKey != null) {
        localStorage.setItem(this.settingsKey, this.syncedChecked ? "1" : "0");
      }
    });
  }
}
</script>
