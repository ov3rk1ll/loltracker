import mockAxios from "jest-mock-axios";

import { game, summoner } from "@/data/dummy-data";

import LolApi from "@/services/lol-api";

afterEach(() => {
  mockAxios.reset();
});

describe("Api.ts", () => {
  it("set baseURL to region", async () => {
    new LolApi("euw1");

    expect(mockAxios.create).toHaveBeenCalledWith({
      baseURL: `https://lol-tracker-spectator.herokuapp.com/euw1`,
    });
  });

  it("request Summoner", async () => {
    const api = new LolApi("euw1");

    const promise = api.getSummonerByName("test");

    mockAxios.mockResponse({
      data: { data: summoner },
    });

    const data = await promise;
    expect(data).toEqual(summoner);

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/summoner/v4/summoners/by-name/test"
    );
  });

  it("request Game", async () => {
    const api = new LolApi("euw1");

    const promise1 = api.getSummonerByName("test");
    mockAxios.mockResponse({
      data: { data: summoner },
    });

    const data = await promise1;

    const promise2 = api.getCurrentGameInfo(data.id);
    mockAxios.mockResponse({ data: { data: game } });

    const gameData = await promise2;

    expect(gameData).toEqual(game);

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/spectator/v4/active-games/by-summoner/XfcqTmj0bS9NE5AnlfAmi_CAwUP6WhSzYo7BGs6TIxv9eX8"
    );
    expect(mockAxios.get).toHaveBeenCalledWith(
      "/summoner/v4/summoners/by-name/test"
    );
  });

  it("load static data", async () => {
    const actualAxios = jest.requireActual("axios");
    const api = new LolApi("euw1");

    const promise = api.loadStaticData();

    const language = "en_US";
    const latestVersion = (
      await actualAxios.get(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      )
    ).data[0] as string;

    mockAxios.mockResponseFor(
      "https://ddragon.leagueoflegends.com/api/versions.json",
      {
        data: (
          await actualAxios.get(
            "https://ddragon.leagueoflegends.com/api/versions.json"
          )
        ).data,
      }
    );

    mockAxios.mockResponseFor(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${language}/champion.json`,
      {
        data: (
          await actualAxios.get(
            `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${language}/champion.json`
          )
        ).data,
      }
    );

    await promise;

    const champion1 = api.getChampionByKey(1);
    expect(champion1.name).toEqual("Annie");

    const ignite = api.getSummonerSpellByKey(14);
    expect(ignite.name).toEqual("Ignite");

    const cooldownNormal = api.getSummonerSpellCooldown(
      ignite,
      {
        perkIds: [],
        perkStyle: 0,
        perkSubStyle: 0,
      },
      []
    );
    expect(cooldownNormal).toEqual(210);

    const cooldownWithRune = api.getSummonerSpellCooldown(
      ignite,
      {
        perkIds: [8347],
        perkStyle: 0,
        perkSubStyle: 0,
      },
      []
    );
    expect(cooldownWithRune).toEqual(178);

    const cooldownWithItem = api.getSummonerSpellCooldown(
      ignite,
      {
        perkIds: [],
        perkStyle: 0,
        perkSubStyle: 0,
      },
      [
        {
          id: 3158,
          name: "Ionian Boots of Lucidity",
        },
      ]
    );
    expect(cooldownWithItem).toEqual(188);

    const cooldownWithRuneAndItem = api.getSummonerSpellCooldown(
      ignite,
      {
        perkIds: [8347],
        perkStyle: 0,
        perkSubStyle: 0,
      },
      [
        {
          id: 3158,
          name: "Ionian Boots of Lucidity",
        },
      ]
    );
    expect(cooldownWithRuneAndItem).toEqual(162);
  });
});
