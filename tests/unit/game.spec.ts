import { shallowMount } from "@vue/test-utils";
import mockAxios from "jest-mock-axios";

import { summoner } from "@/data/dummy-data";

import Game from "@/components/Game.vue";

jest.mock("axios", () => mockAxios);

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("Game.vue", () => {
  it("requests API when mounted", async () => {
    shallowMount(Game, {
      propsData: { summonerName: "test", region: "euw1" },
    });

    expect(mockAxios.create).toHaveBeenCalledWith({
      baseURL: `https://lol-tracker-spectator.herokuapp.com/euw1`,
    });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/summoner/v4/summoners/by-name/test"
    );

    mockAxios.mockResponse({ data: { data: summoner } });

    await Promise.resolve();
  });
});
