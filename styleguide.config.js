const path = require("path")
const baseConfig = require("./build/webpack.base.conf.js")
const merge = require("webpack-merge")

module.exports = {
  title: "Vue Design System",
  theme: {
    maxWidth: "100%",
    sidebarWidth: 210,
    color: {
      link: "#2389ee",
      linkHover: "#1960a7",
      sidebarBackground: "#001123",
      baseBackground: "#fff",
      light: "#aaa",
    },
    fontFamily: {
      base: ['"Fira Sans"', "Helvetica", "Arial", "sans-serif"],
      monospace: ["Consolas", '"Liberation Mono"', "Menlo", "monospace"],
    },
  },
  styles: {
    Logo: {
      logo: {
        color: "#fff",
      },
    },
  },
  editorConfig: {
    theme: "night",
  },
  assetsDir: path.join(__dirname, "static"),
  showCode: true,
  showUsage: true,
  skipComponentsWithoutExample: false,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".vue")
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}/${name}';`
  },
  require: [path.join(__dirname, "docs/styleguide.helper.js"), path.join(__dirname, "docs/styleguide.styles.css")],
  sections: [
    {
      name: "Overview",
      content: "docs/overview.md",
      components: "docs/components/status/**/[A-Z]*.vue",
    },
    {
      name: "Principles",
      content: "docs/principles.md",
    },
    {
      name: "Tokens",
      content: "docs/tokens.md",
      components: "docs/components/tokens/**/[A-Z]*.vue",
    },
    {
      name: "Elements",
      content: "docs/elements.md",
      components: "src/elements/**/[A-Z]*.vue",
    },
    {
      name: "Patterns",
      content: "docs/patterns.md",
      components: "src/patterns/**/[A-Z]*.vue",
    },
    {
      name: "Templates",
      content: "docs/templates.md",
      components: "src/templates/**/[A-Z]*.vue",
    },
    {
      /**
       * Private components have to be loaded into the styleguide as well,
       * otherwise anything using them will be broken. We’re loading them in
       * their own section, which then gets hidden in util/docs/hidePrivate.js
       */
      name: "Private Components",
      components: "src/**/[_]*.vue",
    },
  ],
  template: "docs/styleguide.template.html",
  ignore: [
    "**/App.vue",
    "**/__tests__/**",
    "**/*.test.js",
    "**/*.test.jsx",
    "**/*.spec.js",
    "**/*.spec.jsx",
    "**/ExampleComponent.vue",
  ],
  webpackConfig: merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loader: "style-loader!css-loader",
        },
      ],
    },
  }),
}
