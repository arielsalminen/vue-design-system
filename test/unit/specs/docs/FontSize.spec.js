import Vue from "vue"
import FontSize from "§/components/tokens/Fontsize"

describe("FontSize.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(FontSize)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(".font")).toBeDefined()
  })
})
