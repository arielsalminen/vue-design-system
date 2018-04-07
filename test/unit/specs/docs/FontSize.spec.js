import Vue from "vue"
import FontSize from "docs/components/tokens/FontSize.vue"

describe("FontSize.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(FontSize)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(".font")).toBeDefined()
  })
})
