import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PhoneDetails from "../PhoneDetails.vue";

describe("Phone details", () => {
  const wrapper = mount(PhoneDetails);
  // test props
  it("should receive and return a phone id", async () => {
    await wrapper.setProps({ phone_id: "iPhone-XS" });
    expect(wrapper.vm.phone_id).toBe("iPhone-XS");
  });
  // test that the checkmark function returns the correct value
  it("checkmark should be a tick icon if true and an x if false", async () => {
    expect(wrapper.vm.checkmark(true)).toBe("\u2713");
    expect(wrapper.vm.checkmark(false)).toBe("\u2718");
  });
});
