import { shallowMount } from "@vue/test-utils";

import SummonerSpell from "@/components/SummonerSpell.vue";
import LolApi, { CurrentGameInfo } from "@/services/lol-api";

jest.unmock("axios");

describe("SummonerSpell.vue", () => {
  let api: LolApi;
  let game: CurrentGameInfo;
  const config = {
    timeShowMinutes: false,
    keepScreenOn: false,
  };

  beforeAll(async () => {
    api = new LolApi("euw", true);
    game = await api.getCurrentGameInfo("");
    await api.loadStaticData();
  });

  it("correct icon index 1", async () => {
    const wrapper = shallowMount(SummonerSpell, {
      propsData: {
        index: 1,
        participant: game.participants[0],
        api: api,
        config: config,
      },
    });

    const spellIcon = wrapper.find("img");

    expect(spellIcon.attributes("src")).toMatch("/SummonerFlash.png");
  });

  it("correct icon index 2", async () => {
    const wrapper = shallowMount(SummonerSpell, {
      propsData: {
        index: 2,
        participant: game.participants[0],
        api: api,
        config: config,
      },
    });

    const spellIcon = wrapper.find("img");

    expect(spellIcon.attributes("src")).toMatch("/SummonerHeal.png");
  });

  it("cooldown in seconds", async () => {
    jest.useFakeTimers();

    const wrapper = shallowMount(SummonerSpell, {
      propsData: {
        index: 1,
        participant: game.participants[0],
        api: api,
        config: {
          timeShowMinutes: false,
          keepScreenOn: false,
        },
      },
    });

    expect(wrapper.vm.$data["cooldown"]).toEqual(0);

    await wrapper.trigger("click");

    expect(wrapper.vm.$data["cooldown"]).not.toEqual(0);

    const text = wrapper.find("div.text-center");
    expect(text.text()).toEqual("300");
    expect(text.classes("text-white")).toEqual(true);
    expect(text.classes("text-red-600")).toEqual(false);

    jest.advanceTimersByTime(1000 * 100);

    await wrapper.vm.$nextTick();
    expect(text.text()).toEqual("200");

    jest.advanceTimersByTime(1000 * 195);

    await wrapper.vm.$nextTick();
    expect(text.text()).toEqual("5");
    expect(text.classes("text-white")).toEqual(false);
    expect(text.classes("text-red-600")).toEqual(true);

    jest.advanceTimersByTime(1000 * 6);

    await wrapper.vm.$nextTick();
    expect(wrapper.find("div.text-center").exists()).toEqual(false);
  });

  it("cooldown in minutes", async () => {
    jest.useFakeTimers();

    const wrapper = shallowMount(SummonerSpell, {
      propsData: {
        index: 1,
        participant: game.participants[0],
        api: api,
        config: {
          timeShowMinutes: true,
          keepScreenOn: false,
        },
      },
    });

    expect(wrapper.vm.$data["cooldown"]).toEqual(0);

    await wrapper.trigger("click");

    expect(wrapper.vm.$data["cooldown"]).not.toEqual(0);

    const text = wrapper.find("div.text-center");
    expect(text.text()).toEqual("5:00");
    expect(text.classes("text-white")).toEqual(true);
    expect(text.classes("text-red-600")).toEqual(false);

    jest.advanceTimersByTime(1000 * 100);

    await wrapper.vm.$nextTick();
    expect(text.text()).toEqual("3:20");

    jest.advanceTimersByTime(1000 * 195);

    await wrapper.vm.$nextTick();
    expect(text.text()).toEqual("5");
    expect(text.classes("text-white")).toEqual(false);
    expect(text.classes("text-red-600")).toEqual(true);

    jest.advanceTimersByTime(1000 * 6);

    await wrapper.vm.$nextTick();
    expect(wrapper.find("div.text-center").exists()).toEqual(false);
  });
});
