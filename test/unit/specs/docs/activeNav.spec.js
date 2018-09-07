import { createLocalVue, mount } from "@vue/test-utils"
import activeNav from "docs/utils/activeNav.js"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.mixin(activeNav)

const MockComponent = {
  template:
    "<div class='rsg--sidebar-4'><div><div class='rsg--root-26'><nav><ul class='rsg--list-29'><li class='rsg--item-30 vueds-active'><a class='rsg--link-24 rsg--heading-32' href='/#/Getting Started'>Getting Started</a></li><li class='rsg--item-30 rsg--isChild-31'><a class='rsg--link-24' href='/#/Design Principles'>Design Principles</a></li><li class='rsg--item-30 rsg--isChild-31'><a class='rsg--link-24' href='/#/Tone of Voice'>Tone of Voice</a></li><li class='rsg--item-30 parent'><a class='rsg--link-24 rsg--heading-32 child' href='/example/'>Design Tokens</a><ul class='rsg--list-29'><li class='rsg--item-30 rsg--isChild-31'><a class='rsg--link-24 deep-child' href='/#/Design Tokens?id=color'>Color</a></li><li class='rsg--item-30 rsg--isChild-31'><a class='rsg--link-24' href='/#/Design Tokens?id=fontsize'>FontSize</a></li><li class='rsg--item-30 rsg--isChild-31'><a class='rsg--link-24' href='/#/Design Tokens?id=spacing'>Spacing</a></li></ul></li></ul></nav></div></div></div>",
}

const wrapper = mount(MockComponent, {
  attachToDocument: true,
  localVue,
})

describe("activeNav.js", () => {
  it("contains a list", () => {
    expect(wrapper.contains("ul")).toBe(true)
  })

  it("should add an active class to the current nav item", () => {
    expect(wrapper.contains(".vueds-active")).toBe(true)
  })

  it("should add an active class to its parentNode on click", () => {
    const child = wrapper.find(".child")
    const parent = wrapper.find(".parent")
    child.trigger("click")
    expect(parent.classes()).toContain("vueds-active")
  })

  it("should change the active class on top level when a sub item is clicked", () => {
    const deepChild = wrapper.find(".deep-child")
    const parent = wrapper.find(".parent")
    deepChild.trigger("click")
    expect(parent.classes()).toContain("vueds-active")
  })
})
