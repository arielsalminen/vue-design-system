import Vue from "vue"
import Spacing from "§/components/tokens/Spacing"

describe("Spacing.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Spacing)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(".space")).toBeDefined()
  })
})
