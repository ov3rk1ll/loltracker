import { shallowMount } from "@vue/test-utils";
import mockAxios from "jest-mock-axios";

import Game from "@/components/Game.vue";

jest.mock("axios", () => mockAxios);

describe("Game.vue", () => {
  it("requests API when mounted", () => {
    shallowMount(Game, {
      propsData: { summonerName: "test", region: "euw1" },
    });

    expect(mockAxios.create).toHaveBeenCalledWith({
      baseURL: `https://lol-tracker-spectator.herokuapp.com/euw1`,
    });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/summoner/v4/summoners/by-name/test"
    );
  });
});
