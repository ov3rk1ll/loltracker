import { shallowMount } from "@vue/test-utils";

import IconToggle from "@/components/IconToggle.vue";

describe("IconToggle.vue", () => {
  it("init with false", async () => {
    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: false,
        icon: "sun",
      },
    });

    expect(wrapper.props("checked")).toEqual(false);
    expect(wrapper.classes("opacity-60")).toBeTruthy();
  });

  it("init with true", async () => {
    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: true,
        icon: "sun",
      },
    });

    expect(wrapper.props("checked")).toEqual(true);
    expect(wrapper.classes("opacity-60")).toBeFalsy();
  });

  it("init with false overwritten by localStorage to be true", async () => {
    localStorage.setItem("key-always-1", "1");

    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: false,
        icon: "sun",
        settingsKey: "key-always-1",
      },
    });

    expect(wrapper.emitted("update:checked")?.length).toEqual(1);
    const emitted = wrapper.emitted("update:checked");
    if (emitted) {
      expect(emitted[0][0]).toEqual(true);
    }
  });

  it("init with true overwritten by localStorage to be false", async () => {
    localStorage.setItem("key-always-0", "0");

    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: true,
        icon: "sun",
        settingsKey: "key-always-0",
      },
    });

    expect(wrapper.emitted("update:checked")?.length).toEqual(1);
    const emitted = wrapper.emitted("update:checked");
    if (emitted) {
      expect(emitted[0][0]).toEqual(false);
    }
  });

  it("init with true overwritten by localStorage with invalid value", async () => {
    localStorage.setItem("key-always-NaN", "NaN");

    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: true,
        icon: "sun",
        settingsKey: "key-always-NaN",
      },
    });

    expect(wrapper.emitted("update:checked")).toBeFalsy();
  });

  it("click should toggle value", async () => {
    localStorage.setItem("key-toggle", "1");

    const wrapper = shallowMount(IconToggle, {
      propsData: {
        checked: true,
        icon: "sun",
        settingsKey: "key-toggle",
      },
    });

    expect(wrapper.emitted("update:checked")?.length).toEqual(1);

    await wrapper.setProps({ checked: false });
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:checked")?.length).toEqual(2);

    expect(localStorage.getItem("key-toggle")).toEqual("0");

    await wrapper.setProps({ checked: true });
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:checked")?.length).toEqual(3);

    expect(localStorage.getItem("key-toggle")).toEqual("1");
  });
});
