import { createLocalVue, shallowMount } from "@vue/test-utils";

import Champion from "@/components/Champion.vue";
import LolApi from "@/services/lol-api";
import { PusherPlugin } from "@/services/pusher";

jest.unmock("axios");

const localVue = createLocalVue();
localVue.use(PusherPlugin, { appKey: "test-key" });

describe("Champion.vue", () => {
  it("toggleBoots changes icon", async () => {
    const api = new LolApi("euw", true);
    const game = await api.getCurrentGameInfo("");
    await api.loadStaticData();

    const config = {
      timeShowMinutes: true,
      keepScreenOn: false,
    };

    const wrapper = shallowMount(Champion, {
      localVue,
      propsData: {
        participant: game.participants[0],
        api: api,
        config: config,
      },
    });

    const bootsIcon = wrapper.find('img[src*="3158"]');

    // Off by default
    expect(bootsIcon.classes("opacity-60")).toEqual(true);
    expect(wrapper.vm.$props["participant"].items.length).toEqual(0);

    await bootsIcon.trigger("click");

    // On after click
    expect(bootsIcon.classes("opacity-60")).toEqual(false);
    expect(wrapper.vm.$props["participant"].items.length).toEqual(1);

    await bootsIcon.trigger("click");

    // Off after 2nd click
    expect(bootsIcon.classes("opacity-60")).toEqual(true);
    expect(wrapper.vm.$props["participant"].items.length).toEqual(0);
  });
});
