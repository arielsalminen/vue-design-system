#### What is the Vue Design System?

[Vue Design System](https://vueds.com) is an open source tool for building UI Design Systems with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

#### What browsers are supported?

| BROWSER         | VERSION |
| --------------- | ------- |
| Google Chrome   | Latest  |
| Microsoft Edge  | Latest  |
| Mozilla Firefox | Latest  |
| Opera           | Latest  |
| Safari          | Latest  |

#### How do I get started?

See the [Getting Started guide](https://github.com/viljamis/vue-design-system/wiki/getting-started) on GitHub.

#### I want to start using this in an existing Vue.js project, is that possible?

Definitely possible, see instructions in [Getting Started guide](https://github.com/viljamis/vue-design-system/wiki/getting-started#using-vue-design-system-in-an-existing-project).

#### Why Vue.js and not React.js, Jekyll, or some other tool?

**Short answer:** A personal preference that I’ve noticed working with my clients.

**Long(er) answer:** The reason for choosing Vue.js over React or some other library is how easy it is to learn. If you know HTML, CSS, and a bit of JavaScript you’re ready to start using this tool and getting involved. This becomes especially important when we want to involve designers more into the process and move further away from static design tools. In addition, static site generators like Jekyll give you a bit too much freedom, which makes it harder for people to follow specific guidelines or a workflow.

#### Where are molecules and pages from Atomic Design?

Compared to Atomic Design, this setup doesn’t include molecule/page levels. They’re omitted to help reduce the complexity of the system for its end-users.

#### Can this tool only be used with Vue.js based applications?

Organizations that have more than just Vue.js based applications can benefit from Vue Design System as well. Tokens which store visual design attributes are universal and can be used on any platform.

#### Why aren’t there more components by default?

Vue Design System is not a front-end component library and never will be. Instead it tries to provide you and your team a set of organized tools, patterns & practices to build upon, so that you can get started with the actual design system faster.

#### Can I convert YAML tokens to more than just SCSS and JSON?

Definitely. See [Theo’s docs](https://github.com/salesforce-ux/theo). It allows you to convert the tokens to almost any format you can think of. The formats used are being configured in [package.json](https://github.com/viljamis/vue-design-system/blob/master/package.json#L20).

#### Is it possible to get Vue Design System working on Windows?

It is, but currently you’ll have to use Git Bash or something else that can run shell scripts. See instructions in [Getting Started](https://github.com/viljamis/vue-design-system/wiki/getting-started#getting-started-on-windows).

#### Any plan to support visualization of different component states?

Vue Design System uses a customized version of [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) for the styleguide part which already supports something similar. You can for example define multiple examples in markdown format in the component’s `<docs>` section. See the [documentation for Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) and React Styleguidist’s [explanation on the differences between Storybook and Styleguidist](https://react-styleguidist.js.org/docs/cookbook.html#whats-the-difference-between-styleguidist-and-storybook).

#### I’m trying to use the default `Icon` element included, but can’t figure out what icons are available?

Icons are inside `src/assets/icons` directory, so you can just add any icons that you need. Use for example SVG files from [Font Awesome](https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg).

#### I want to use another typeface, how do I change it?

Vue Design System uses Typekit’s [Web Font Loader](https://github.com/typekit/webfontloader) which is easy to configure. To load your own font files, see [Getting Started with WebFontLoader](https://github.com/typekit/webfontloader#get-started). Currently, the app is loading _Fira Sans_ and a few different weights from Google Fonts. See `src/utils/webFontLoader.js` for an example.

#### I want to use design tokens in JavaScript as well, is that possible?

Definitely! First, import tokens inside the component you want to use them in:

```html
<script>
  import designTokens from "@/assets/tokens/tokens.raw.json";
</script>
```

Then, pass the data:

```html
<script>
export default {
  data() {
    return {
      tokens: designTokens.props
    };
  }
};
</script>
```

Once done, you can utilize tokens inside `<template>` like this:

```html
<template>
  <a-thing :style="{color: tokens.color_vermilion.value}" />
</template>
```

#### How do you use media queries defined in tokens?

```scss
.wrapper {
  padding: $space-large;
  @media #{$media-query-large} {
    padding: $space-x-large;
  }
}
```

#### Is it possible to disable browser from auto opening a new window when starting up the server?

Definitely. Change the `autoOpenBrowser` [setting in config](https://github.com/viljamis/vue-design-system/blob/master/config/index.js#L69) to `false`.
