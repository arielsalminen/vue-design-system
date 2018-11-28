## What is the Vue Design System?

Vue Design System is an open source tool for building UI Design Systems with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development. [Read more about it](https://viljamis.com/2018/vue-design-system/).

## What browsers are supported?

The development environment supports the following browsers. To tweak browsers supported in production you will want to edit the [browsers list in package.json](https://github.com/viljamis/vue-design-system/blob/master/package.json#L172-L180). To see what browsers are selected by the browser list, run `npx browserslist --config="package.json"` in the root directory of this project.

| BROWSER         | VERSION |
| --------------- | ------- |
| Google Chrome   | Latest  |
| Microsoft Edge  | Latest  |
| Mozilla Firefox | Latest  |
| Opera           | Latest  |
| Safari          | Latest  |

## How do I get started?

See the [Getting Started guide](https://github.com/viljamis/vue-design-system/wiki/getting-started) on GitHub.

## I want to use this in existing Vue project, is that possible?

Definitely possible, see instructions in [Getting Started guide](https://github.com/viljamis/vue-design-system/wiki/getting-started#using-vue-design-system-in-an-existing-project).

## Why Vue and not React, Jekyll, or some other tool?

**Short answer:** A personal preference that I’ve noticed working with my clients.

**Long(er) answer:** The reason for choosing Vue.js over React or some other library is how easy it is to learn. If you know HTML, CSS, and a bit of JavaScript you’re ready to start using this tool and getting involved. This becomes especially important when we want to involve designers more into the process and move further away from static design tools. In addition, static site generators like Jekyll give you a bit too much freedom, which makes it harder for people to follow specific guidelines or a workflow.

## Where are molecules and pages from Atomic Design?

Compared to Atomic Design, this setup doesn’t include molecule/page levels. They’re omitted to help reduce the complexity of the system for its end-users.

## Is this tool only for Vue.js based applications?

Organizations that have more than just Vue.js based applications can benefit from Vue Design System as well. Tokens which store visual design attributes are universal and can be used on any platform. Vue Design System also renders all components in both Vue.js & HTML which allows you to use the components on any web based platform. Additionally, it’s possible to configure the build process to output Web Components instead of Vue.js Components.

## Why aren’t there more components by default?

Vue Design System is not a front-end component library and never will be. Instead it tries to provide you and your team a set of organized tools, patterns & practices to build upon, so that you can get started with the actual design system faster.

## Can I convert YAML tokens to more than just SCSS and JSON?

Definitely. See [Theo’s docs](https://github.com/salesforce-ux/theo). It allows you to convert the tokens to almost any format you can think of. The formats used are being configured in [package.json](https://github.com/viljamis/vue-design-system/blob/master/package.json#L25).

## Does Vue Design System work on Windows?

Yes, follow the [getting started guide](https://github.com/viljamis/vue-design-system/wiki/getting-started) to get things up and running.

## Any plan to support different component states?

Vue Design System uses a customized version of [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) for the styleguide part which already supports something similar. You can for example define multiple examples in markdown format in the component’s `<docs>` section. I’ve added an example of this in the documentation’s [Elements section](/#/Elements?id=forminput). See the [documentation for Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) and React Styleguidist’s [explanation on the differences between Storybook and Styleguidist](https://react-styleguidist.js.org/docs/cookbook.html#whats-the-difference-between-styleguidist-and-storybook).

## I can’t figure out what icons are available?

Icons are inside `src/assets/icons` directory, so you can just add any icons that you need. Use for example SVG files from [Font Awesome](https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg).

## How do I change the default typeface/font?

Vue Design System uses Typekit’s [Web Font Loader](https://github.com/typekit/webfontloader) which is easy to configure. To load your own font files, see [Getting Started with WebFontLoader](https://github.com/typekit/webfontloader#get-started). Currently, the app is loading _Fira Sans_ and a few different weights from Google Fonts. See `src/utils/webFontLoader.js` for an example.

If you want to bundle your fonts into the project itself, that’s possible as well. I’ve created a separate branch with an example of this. See the needed changes in [this commit](https://github.com/viljamis/vue-design-system/commit/a7b3badb618fb5e0e1c999940b8ea82e86aea190).

## How to use design tokens in JavaScript?

First, import tokens inside the component you want to use them in:

```javascript
import designTokens from "@/assets/tokens/tokens.raw.json"
```

Then, pass the data:

```javascript
export default {
  data() {
    return {
      tokens: designTokens.props,
    }
  },
}
```

Once done, you can utilize tokens inside `<template>` like this:

```html
<template>
  <Thing :style="{color: tokens.color_vermilion.value}" />
</template>
```

## How do you use media queries defined in tokens?

```scss
.wrapper {
  padding: $space-l;
  @media #{$media-query-l} {
    padding: $space-xl;
  }
}
```

## How to disable browser from auto opening a new window?

Remove `--open` option from [this line in package.json](https://github.com/viljamis/vue-design-system/blob/master/package.json#L24).

## How do I use static image assets?

You can put your assets under `src/assets`. It’s ok to create new directories under that directory as well. Since Webpack is used to include all static assets on the Vue app side, you’ll have to define the path like this in order for it to work on both the app and the styleguide: `<img src="@/assets/img/example.jpg" />`.

For component’s `<docs>` section things work a bit differently. Using `<img src="img/example.jpg" />` without `@/assets/` works there. This is because [Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) handles the assets directory a bit differently.

## Does Vue Design System work with Nuxt.js?

Yes! While we don’t currently have extensive documentation on this, there’s an official example and instructions provided, here: [github.com/viljamis/nuxt-design-system](https://github.com/viljamis/nuxt-design-system).

## I can’t get Vue Design System working as an NPM dependency?

Please see the official example first: [github.com/viljamis/vue-design-system-example](https://github.com/viljamis/vue-design-system-example). If you’re getting an error about `export 'default' was not found` you’re probably trying to import the provided UMD module as an ES Module.

## Can I use the components from the system on our static website?

Yes you can. See the official example on GitHub: [github.com/viljamis/vue-design-system-example-website](https://github.com/viljamis/vue-design-system-example-website)

## I want to use CSS Modules, are those supported?

They are, but you need to add the following to the Webpack configuration for build:

```javascript
options: {
  // enable CSS Modules
  modules: true,
  // customize generated class names
  localIdentName: "[local]_[hash:base64:8]"
}
```

For more detailed instructions, please see: [vue-loader.vuejs.org/guide/css-modules.html](https://vue-loader.vuejs.org/guide/css-modules.html).
