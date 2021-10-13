import { shallowMount } from "@vue/test-utils";
import axios from "axios";

import Game from "@/components/Game.vue";

jest.unmock("axios");

describe("Game.vue", () => {
  it("requests API when mounted", async () => {
    const spyCreate = jest.spyOn(axios, "create");

    shallowMount(Game, {
      propsData: { summonerName: "test", region: "euw1" },
    });

    expect(spyCreate).toHaveBeenCalledWith({
      baseURL: `https://lol-tracker-spectator.herokuapp.com/euw1`,
    });
  });

  /* eslint-disable @typescript-eslint/no-explicit-any */
  it("more", async () => {
    const wrapper = shallowMount(Game, {
      propsData: { summonerName: "test", region: "euw1", demoMode: true },
    });

    expect((wrapper.vm as any).loading).toEqual(true);

    await (wrapper.vm as any).api.loadStaticData();

    expect((wrapper.vm as any).loading).toEqual(false);
  });
});
