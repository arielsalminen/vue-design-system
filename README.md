# Vue.js Design System

This is a [Vue.js](https://vuejs.org) boilerplate to kick start your [design system](http://carbondesignsystem.com). It’s aimed for designers/front-end developers who have at least the basic knowledge of HTML, SCSS & JS. It’s a work-in-progress, but can already be used for serious design work.

The structure is based on my previous experience working on design systems and aims to simplify certain aspects of the workflow. Compared to [Atomic Design](http://atomicdesign.bradfrost.com) for example, this boilerplate doesn’t include molecule level at all. It’s omitted to help reduce the complexity of the system for its end-users.

**Side note:** Automatic creation of documentation isn’t included right now, but is a part of [the future plans](https://github.com/viljamis/vue-design-system#to-do-list).


## System Hierarchy

The following hierarchy is used throughout the system, so it’s useful to get yourself familiar with these concepts before diving deeper.

* `Tokens` are the visual design atoms of the design system. Specifically, they are named entities that store visual design attributes. SalesForce’s system has [a great example](https://www.lightningdesignsystem.com/design-tokens/).
* `Elements` are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize *Tokens* mentioned above.
* `Components` are UI patterns that fall on the more complex side of the spectrum. Components consist of both *Elements* and *Tokens*.
* `Templates` exist to document the layout and structure of a section or the entirety of an interface. Templates consist of all three things mentioned above: *Components*, *Elements* and *Tokens*.

##### Visualized, the hierarchy looks about this:

```bash
Template
 ├─ Component
 │   ├─ Element
 │   │   ├─ Token
 │   │   └─ Token
 │   └─ Element
 │       └─ Token
 └─ Component
     └─ Element
         ├─ Token
         └─ Token
```


## Naming of Things

The names are used to communicate about `Tokens`, `Elements`, `Components` and `Templates`. They must be short, meaningful and pronounceable. Each name must be:

* **Multiword:** names should always be multi-word, except for root App components: This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.
* **Meaningful:** not over specific, not overly abstract.
* **Short:** 2 or 3 words.
* **Pronounceable:** we want to be able talk about them.
* **Custom element spec compliant:** don't use reserved names. Reserved names include:

```bash
annotation-xml
color-profile
font-face
font-face-src
font-face-uri
font-face-format
font-face-name
missing-glyph
```


## Directory Structure

Below is the design system’s basic structure. The system’s pieces are split into `Tokens`, `Elements`, `Components` and `Templates` as explained above.

There’s also `Styles` directory which includes generic reset and font-face rules + any other global styles/functions that you might need. Currently, there’s for example a set of functions that can create tints and shades out of colors defined in `Tokens`.

`Static` directory is meant for any design mockup related things like for example images, fonts and similar.

```bash
├─ src
│   ├─ tokens
│   ├─ elements
│   │   └─ icons
│   ├─ components
│   ├─ templates
│   │   ├─ Styleguide.vue
│   │   └─ Template 1,2,3…
│   ├─ styles
│   ├─ router
│   └─ App.vue
└─ static
```


## Build Setup

[Vue.js Design System](https://github.com/viljamis/vue-design-system) is built on top of official Vue project templates that are to provide opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible.

To get started, follow the instructions below:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Working with the System


### `Tokens`


#### Creating a new `Token`

Creating a new design token is as simple as navigating to `/src/tokens/` and editing any of the partials. I strongly recommend you to see what kind of example tokens `_spacing.scss` or `_color.scss` already have inside of them.

If you need to add a new category in addition to the existing ones, you’ll have to create a new SCSS partial inside the same directory with a name that starts with `_`. Once done, you can import the new partial inside `/src/tokens/tokens.scss`:

```scss
/* GLOBAL: DESIGN TOKENS
--------------------------------------------- */

@import "../tokens/color";
@import "../tokens/font";
@import "../tokens/font-size";
@import "../tokens/opacity";
@import "../tokens/line-height";
@import "../tokens/spacing";
@import "../tokens/radius";
@import "../tokens/sizing";
@import "../tokens/shadow";
@import "../tokens/time";
@import "../tokens/media-query";
@import "../tokens/z-index";
```

`Token` partials themselves will look somewhat like this, depending on the complexity of your system:

```scss
/* SPACE TOKENS
--------------------------------------------- */

$space-tiny: 8px;
$space-small: 16px;
$space-base: 24px;
$space-large: 48px;
$space-x-large: 64px;
$space-xx-large: 128px;
$space-xxx-large: 256px;
```


#### Using a `Token`

Since tokens are imported globally, you can use them inside any `Element`, `Component` or `Template` without any extra work. Using a token is as simple as:

```html
<style lang="scss" scoped>
  a {
    font-family: $font-primary;
    color: $color-primary-vermilion;
  }
</style>
```


### `Elements`

#### Creating a new `Element`

To create a new element, you will first want to navigate to `/src/elements/` and create a new `.vue` file. Element names start with `Element` prefix, except for icons that live inside a subdirectory (see [Naming of Things](https://github.com/viljamis/vue-design-system#naming-of-things)).

##### For the sake of simplicity, let’s imagine you’re creating a button:

First, name your new file `ElementButton.vue`.

After you’ve created the file, it’s time to get yourself familiar with [Vue’s templates and how they work](https://vuejs.org/v2/guide/single-file-components.html). The basic structure is following:

```html
<template>
  <!-- Your element’s HTML -->
</template>

<script>
  // Your element’s JS
</script>

<style>
  /* Your element’s CSS */
</style>
```

Hopefully looks quite simple so far!

Now, let’s add a little bit of template markup. It’s a button, so we’ll add a basic html `<button>` and a `<slot/>` inside of it. *Slot* is used to allow a parent `Component` to pass DOM elements into a child `Element`.

```html
<template>
  <button>
    <slot/>
  </button>
</template>
```

Moving further, we can also add default content for the `<slot/>` that will be shown if nothing gets passed:

```html
<template>
  <button>
    <slot>I’m a Button!</slot>
  </button>
</template>

<style lang="scss" scoped>
  button {
    font-family: $font-primary;
    background: $color-primary-rich-black;
    color: $color-primary-white;
  }
</style>
```

In the above example, I’ve also added some basic style properties which utilize design system’s `Tokens`. The *scoped* attribute in `<style>` means that this SCSS will apply to the current `Element` only, which is similar to the style encapsulation found in Shadow DOM.

To see additional examples about passing  `props` to elements, see `/src/elements/ElementLink.vue` which is utilized inside of `/src/templates/StyleGuide.vue`.


#### Using an `Element`

Now that you’ve created your first custom element, it’s time to use it inside one of the `Components` or `Templates`. To do this, you need to first import your element:

```html
<script>
  import ElementButton from '@/elements/ElementButton';

  export default {
    components: {
      elementButton: ElementButton,
    },
  };
</script>
```

Once imported, you can start using the element:

```html
<template>
  <element-button>
    This content overrides the default slot
  </element-button>
</template>

<script>
  import ElementButton from '@/elements/ElementButton';

  export default {
    components: {
      elementButton: ElementButton,
    },
  };
</script>
```

### `Components`

The exact same rules apply for both `Components` and `Elements`. From Vue.js’s perspective these are all *“components”*, but for the sake of communication between different teams, diciplines and stakeholders we need a set of unified terms and hierarchy for the system.

To better understand the difference, see [System Hierarchy section](https://github.com/viljamis/vue-design-system#system-hierarchy).


### `Templates`

More instructions coming…


## To-Do List

- [ ] “How to use Templates” section
- [ ] Simplify/cleanup naming of things
- [ ] Automatic creation of Style Guide
- [ ] Automatic creation of Documentation
- [ ] Better defaults
- [ ] Accessibility tests


## Questions?

For any questions contact [@viljamis](https://twitter.com/viljamis) via Twitter or the [Design Systems Slack](http://designsystems.herokuapp.com).


## Changelog

`0.1.0` (2017-10-22) - Initial prototype


## License

Licensed under the MIT license.

Copyright (c) 2017 Viljami Salminen, [http://viljamisdesign.com/](http://viljamisdesign.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
