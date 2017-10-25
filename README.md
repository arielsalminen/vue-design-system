# Vue Design System

*Vue Design System* is an open-source tool for prototyping UI design systems. It provides you and your team a set of interconnected patterns & practices to build upon so that you can get started with actual app code faster.

The tool is built on top of [Vue.js](https://vuejs.org) and is aimed for designers & front-end developers who have at least basic knowledge of component based workflows + HTML, CSS & JS. Currently, it’s still a work-in-progress, but can already be used for some serious prototyping.

The structure is based on my personal experience working on design systems and aims to simplify certain aspects. Compared to [Atomic Design](http://atomicdesign.bradfrost.com) for example, this setup doesn’t include molecule level at all. It’s omitted to help reduce the complexity of the system for its end-users.

Even though this is a system prototyping tool first and foremost, it has all the means to turn into your organization’s actual design system in the end.


## System Hierarchy

The following hierarchy and terms are used throughout the system. It’s a good idea to get familiar with these concepts before diving any deeper.

* `Tokens` are the visual design atoms of the design system. Specifically, they are named entities that store visual design attributes. SalesForce’s system has [a great example](https://www.lightningdesignsystem.com/design-tokens/).
* `Elements` are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize *Tokens* mentioned above.
* `Components` are UI patterns that fall on the more complex side of the spectrum. Components consist of both *Elements* and *Tokens*.
* `Templates` exist to document the layout and structure of a section or the entirety of an interface. Templates can consist of all three things mentioned above: *Components*, *Elements* and *Tokens*.

#### Visualized, the hierarchy looks about this:

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

We use the **names** to communicate about `Tokens`, `Elements`, `Components` and `Templates`. Hence, they must be short, meaningful and pronounceable. Each name must be:

* **Multiword:** Names should be most of the time multi-word, except for root App components: This prevents conflicts with [existing and future HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), since all HTML elements are a single word.
* **Meaningful:** Not over specific, not overly abstract.
* **Short:** Maximum of 2 or 3 words.
* **Pronounceable:** We want to be able talk about them.
* **Custom element spec compliant:** Don’t use reserved names. Reserved names include:

```bash
 * annotation-xml      * color-profile
 * font-face           * font-face-src
 * font-face-uri       * font-face-format
 * font-face-name      * missing-glyph
```

### Prefixing Names

There are a few rules around prefixing things, that you’ll want to follow to keep the system consistent:

* **Tokens:** Token names always start with a category name and a hyphen. For example `$color-` or `$space-`. If you have subcategories, include them in the naming as well and separate with hyphen, Example: `$color-primary-` or `$color-secondary-`.
* **Icon Elements:** Icons, which live inside a separate `/elements/icons/` directory, start with `Icon` prefix. Example: `IconSettings.vue`.
* **Element, Components & Templates:** Names don’t have a prefix, but *should be* multiword or otherwise compatible with existing and future HTML elements.


## Directory Structure

Below is the design system’s basic structure. The system’s pieces are split into `Tokens`, `Elements`, `Components` and `Templates` as explained above.

There’s also `Styles` directory which includes generic reset and font-face rules + any other global styles/functions that you might need. Currently, there’s for example a set of functions that can create tints and shades out of colors defined in `Tokens`.

`Static` directory is meant for any design mockup related things like for example images, fonts and similar.

`Router` maps `Templates` to the routes and lets vue-router know when and where to render them.

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

[Vue Design System](https://github.com/viljamis/vue-design-system) is built on top of official [Vue.js](https://vuejs.org) project templates that are to provide opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible.

To install dependencies, run:

```bash
npm install
```

After installing dependencies, you can start up and serve the project at [http://localhost:8080](http://localhost:8080), by running the below command. This will also start up and serve the living documentation at [http://localhost:6060](http://localhost:6060).

```bash
npm start
```

Build for production with minification *(currently builds only the playground):*

```bash
npm run build
```

Build for production and view the bundle analyzer report:

```bash
npm run build --report
```

For a detailed explanation on how things work, check out the [Webpack guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Working with the System


### `Tokens`

Tokens are the visual design atoms of the design system. Specifically, they are named entities that store visual design attributes. SalesForce’s system has [a great example](https://www.lightningdesignsystem.com/design-tokens/).


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

Since tokens are imported globally, you can use them inside any `Element`, `Component` or `Template` without extra work. Using a token is as simple as:

```html
<style lang="scss" scoped>
  a {
    font-family: $font-primary;
  }
</style>
```


### `Elements`

Elements are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize `Tokens`.

#### Creating a new `Element`

To create a new element, you will first want to navigate to `/src/elements/` and create a new `.vue` file. Element names don’t have a prefix, but it’s recommended that they are *multiword* or otherwise compatible with existing and future HTML elements *(to learn more, see [Naming of Things](https://github.com/viljamis/vue-design-system#naming-of-things)).*

#### For the sake of simplicity, let’s imagine you’re creating a button:

First, name your file for example `VueButton.vue`.

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

*Looks quite simple, right?*

Now, let’s add a little bit of template markup. It’s a button, so we’ll add a basic html `<button>` and a `<slot/>` inside of it. *Slot* is used to allow a parent `Component` to pass DOM elements into a child `Element`.

```html
<template>
  <button class="button">
    <slot/>
  </button>
</template>
```

Moving further, we can also add default content for the `<slot/>` that will be shown if nothing gets passed:

```html
<template>
  <button class="button">
    <slot>I’m a Button!</slot>
  </button>
</template>

<script>
  export default {
    name: 'VueButton',
  };
</script>

<style lang="scss" scoped>
  .button {
    font-family: $font-primary;
    background: $color-primary-rich-black;
    color: $color-primary-white;
  }
</style>
```

In the above example, I’ve also added some basic style properties which utilize design system’s `Tokens`. The *scoped* attribute in `<style>` means that this SCSS will apply to the current `Element` only, which is similar to the style encapsulation found in Shadow DOM.

See below for additional examples about passing `props` to `Elements` and `Components`.

##### Example `Element` with a custom `props`:

```html
<template>
  <a :href="href">
    <slot/>
  </a>
</template>

<script>
  export default {
    name: 'VueLink',
    props: ['href'],
  };
</script>
```

##### Example of a `Template` utilizing the above `Element` and `props`:

```html
<template>
  <vue-link href="https://viljamis.com/">
    This is a label!
  </vue-link>
</template>

<script>
  import VueLink from '@/elements/VueLink';

  export default {
    name: 'MyTemplate',
    components: {
      vueLink: VueLink,
    },
  };
</script>
```


#### Using an `Element`

Now that you’ve created your first custom element, it’s time to use it inside one of the `Components` or `Templates`. To do this, you will have to first import your *element:*

```html
<script>
  import VueButton from '@/elements/VueButton';

  export default {
    components: {
      vueButton: VueButton,
    },
  };
</script>
```

Once imported in `<script/>`, you can start using the element in your `<template/>`:

```html
<template>
  <vue-button>
    This content overrides the default slot
  </vue-button>
</template>
```

As you can see, we’ve also added some basic text content inside our `Element` to override the default `<slot/>` contents. If wanted, we could also use the element as is, with the default *slot* contents shown:

```html
<template>
  <vue-button/>
</template>
```


### `Components`

Components are UI patterns that fall on the more complex side of the spectrum. Components can consist of both `Elements` and `Tokens`.

The exact same rules apply to both `Components` and `Elements`. From Vue.js’s perspective these are all `Vue Components`, but for the sake of communication between different teams, diciplines and stakeholders we need a set of unified terms and hierarchy for a system.

To better understand the hierarchy and terms used in this project, see [System Hierarchy section](https://github.com/viljamis/vue-design-system#system-hierarchy).


### `Templates`

Templates exist to document the layout and structure of a section or the entirety of an interface. Templates can consist of `Components`, `Elements` and `Tokens`.


## To-Do List

- [x] Fix styleguide warnings
- [ ] Automatic creation of Documentation (under work, somewhat working already)
- [ ] Fix build scripts (style related especially)
- [ ] Better naming conventions
- [ ] Better defaults
- [ ] Automated accessibility tests


## Questions?

For any questions contact [@viljamis](https://twitter.com/viljamis) via Twitter or the [Design Systems Slack](http://designsystems.herokuapp.com).


## Changelog

* `0.1.2` (2017-10-25) - Fixes styleguide warnings + adds global resets
* `0.1.1` (2017-10-25) - Adds initial alpha documentation creation
* `0.1.0` (2017-10-23) - Initial prototype


## License

Licensed under the MIT license.

Copyright (c) 2017 Viljami Salminen, [http://viljamisdesign.com/](http://viljamisdesign.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
