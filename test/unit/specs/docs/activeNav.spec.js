import { createLocalVue, mount } from "@vue/test-utils"
import activeNav from "docs/utils/activeNav.js"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.mixin(activeNav)

const MockComponent = {
  template:
    "<div class='rsg--sidebar-4'><div><div class='rsg--root-68'><ul class='rsg--list-71'><li class='rsg--item-72'><a class='rsg--link-24 rsg--heading-74' href='/example/#!/Getting Started'>Getting Started</a><li class='rsg--item-72 rsg--isChild-73'><a class='rsg--link-24' href='/example/#!/Getting Started?id=components'>Components</a></li></li><li class='rsg--item-72 parent'><a class='child rsg--link-24 rsg--heading-74' href='/example/#!/Design Principles'>Design Principles</a><ul><li class='deep-parent'><a class='deep-child rsg--link-24 rsg--heading-74' href='/example/#!/Design Principles'>Design Principles</a></li></ul></li><li class='rsg--item-72'><a class='rsg--link-24 rsg--heading-74' href='/example/'>Design Tokens</a><li class='rsg--item-72 rsg--isChild-73'><a class='rsg--link-24' href='/example/#!/Design Tokens?id=color'>Color</a></li></ul></div></div></div>",
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
