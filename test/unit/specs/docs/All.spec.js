import Vue from "vue"
import All from "§/components/tokens/All"

describe("All.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(All)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(".token")).toBeDefined()
  })
})
