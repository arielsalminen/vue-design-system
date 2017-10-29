**Vue Design System** is an open-source tool for prototyping UI design systems. It provides you and your team a set of organized tools, patterns & practices to build upon, so that you can get started with the actual design system faster.

The tool is built on top of [Vue.js](https://vuejs.org), [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) & [Vue Webpack Template](http://vuejs-templates.github.io/webpack/) and is aimed for designers and front-end developers who have at least basic knowledge of component based workflows + HTML, SCSS & JavaScript.

Even though this is a system prototyping tool first and foremost, it has all the means to turn into your organization’s actual design system in the end.

Made by [@viljamis](https://twitter.com/viljamis) and other contributors. Read more from [the official docs](https://github.com/viljamis/vue-design-system) on GitHub.

## Features

* A set of interconnected patterns & practices for you and your team.
* Global design tokens that can be used inside any component.
* Simple and sane SVG icon and @font-face defaults.
* Live reloading for both the app and the system documentation.
* Automatic generation of documentation *(the very page you’re looking at).*
* Documentation and the app logic are separated, so you can have public docs while the app itself is private.
* Autoprefixing, SCSS, Webpack & CSS extraction included by default *(Extend with lint-on-save & unit tests).*
* [And more…](https://github.com/viljamis/vue-design-system)


## Get Started

Get started by cloning the repo and installing dependencies:

```bash
git clone git@github.com:viljamis/vue-design-system.git
cd vue-design-system
npm install
```

Start up the project and living documentation at [http://localhost:8080](http://localhost:8080) & [http://localhost:6060](http://localhost:6060):

```bash
npm start
```

To learn more, view the [official documentation](https://github.com/viljamis/vue-design-system) on GitHub.


## Terminology

The following terminology is used throughout Vue Design System. It’s a good idea to get familiar with these concepts before diving deeper.

* **Principles** are a set of established design principles that are at the heart of the system. They should guide you when working with *Tokens*, *Elements*, *Patterns* and *Templates* listed below.
* **Tokens** are the visual design atoms of the system. Specifically, they are named entities that store visual design attributes. SalesForce’s system has [a great example](https://www.lightningdesignsystem.com/design-tokens/).
* **Elements** are the smallest basic structures of a UI. They can not be broken down any further. Buttons, links and inputs are good examples. Elements utilize *Tokens* mentioned above.
* **Patterns** are UI patterns that fall on the more complex side of the spectrum. Patterns consist of both *Elements* and *Tokens*.
* **Templates** exist to document the layout and structure of a section or the entirety of an interface. Templates can consist of all three things mentioned above: *Patterns*, *Elements* and *Tokens*.

## Hierarchy, visualized:

```bash
Template
 ├─ Pattern
 │   ├─ Element
 │   │   ├─ Token
 │   │   └─ Token
 │   └─ Element
 │       └─ Token
 └─ Pattern
     └─ Element
         ├─ Token
         └─ Token
```

### [View project on GitHub →](https://github.com/viljamis/vue-design-system)
