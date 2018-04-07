import Vue from "vue"
import FontSize from "docs/components/tokens/FontSize.vue"

const Constructor = Vue.extend(FontSize)
const vm = new Constructor().$mount()

describe("FontSize.vue", () => {
  it("should render correct contents", () => {
    expect(vm.$el.querySelector(".font")).toBeDefined()
  })

  it("should render multiple sizes", () => {
    expect(vm.$el.querySelectorAll(".font").length).toBeGreaterThan(2)
  })

  it("should create px sizes for copy pasting", () => {
    expect(vm.$el.querySelector(".font span")).toBeDefined()
  })

  it("should create apply inline styles", () => {
    expect(vm.$el.querySelector(".font").style).toBeDefined()
  })
})
