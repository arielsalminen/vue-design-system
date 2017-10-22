# Vue.js Design System

This is a [Vue.js](https://vuejs.org) boilerplate to kick start your [design system](http://carbondesignsystem.com). It’s aimed for designers/front-end developers who have at least the basic knowledge of HTML, SCSS & JS. It’s a work-in-progress, but can already be used for serious design work.

The structure is based on my previous experience working on design systems and aims to simplify certain aspects of the workflow. Compared to [Atomic Design](http://atomicdesign.bradfrost.com) for example, this boilerplate doesn’t include molecule level at all. It’s omitted to help reduce the complexity of the system for its end-users.

**Side note:** Automatic creation of documentation isn’t included right now, but is a part of my [future plans](https://github.com/viljamis/vue-design-system#to-do-list).


## System Hierarchy

The following hierarchy is used throughout the system, so it’ll be useful to get familiar with these concepts before diving deeper.

* `Tokens` are the visual design atoms of the design system. Specifically, they are named entities that store visual design attributes. SalesForce’s system has [a great example](https://www.lightningdesignsystem.com/design-tokens/).
* `Elements` are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links, and inputs are good examples. Elements utilize *Tokens* mentioned above.
* `Components` are UI patterns that fall on the more complex side of the spectrum. Components consist of both *Elements* and *Tokens*.
* `Templates` exist to document the layout and structure of a section or the entirety of an interface. Templates consist of all three things mentioned above: *Components*, *Elements* and *Tokens*.

**When visualized, the hierarchy looks about like this (simplified):**

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
* **Short:** 2 words or 3 words
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

Coming soon…


## To-Do List

- [x] Visualize the structure better
- [ ] “How to work with the system” section for the readme
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
