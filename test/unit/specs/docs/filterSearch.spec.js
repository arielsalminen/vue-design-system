import { createLocalVue, mount } from "@vue/test-utils"
import filterSearch from "docs/utils/filterSearch.js"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.mixin(filterSearch)

const MockComponent = {
  name: "example",
  status: "prototype",
  template: "<div id='example-container'><label class='status original'>undefined</label></div>",
}

const wrapper = mount(MockComponent, {
  attachToDocument: true,
  localVue,
})

describe("filterSearch.js", () => {
  it("should render status labels", () => {
    expect(wrapper.contains("FOO BAR")).toBe(true)
  })
})
