const path = require('path')
const baseConfig = require('./build/webpack.base.conf.js')
const merge = require('webpack-merge')
//const vueDocs = require('vue-docgen-api')
//const camelToKebab = function (str) {
//  return str.replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase() })
//}

module.exports = {
  title: 'Vue Design System',
  theme: {
    color: {
      link: '#2389ee',
      linkHover: '#1960a7',
      sidebarBackground: '#001123',
      baseBackground: '#fff',
      light: '#aaa',
    },
    fontFamily: {
      base: [
        '"Fira Sans"',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      monospace: [
        'Consolas',
        '"Liberation Mono"',
        'Menlo',
        'monospace'
      ],
    }
  },
  highlightTheme: "night",
  styles: {
    Logo: {
      logo: {
        color: '#fff',
      },
    }
  },
  assetsDir: path.join(__dirname, 'static'),
  showCode: true,
  showUsage: true,
  skipComponentsWithoutExample: false,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.vue');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}/${name}';`;
  },
  //propsParser(file, source) {
  //  const doc = vueDocs.parse(file)
  //  doc.displayName = camelToKebab(doc.displayName)
  //  return doc
  //},
  require: [
    path.join(__dirname, 'docs/styleguide.helper.js'),
    path.join(__dirname, 'docs/styleguide.styles.css'),
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Principles',
      content: 'docs/principles.md'
    },
    {
      name: 'Tokens',
      content: 'docs/tokens.md',
      components: 'src/tokens/**/[A-Z]*.vue'
    },
    {
      name: 'Elements',
      content: 'docs/elements.md',
      components: 'src/elements/**/[A-Z]*.vue'
    },
    {
      name: 'Patterns',
      content: 'docs/patterns.md',
      components: 'src/patterns/**/[A-Z]*.vue'
    },
    {
      name: 'Templates',
      content: 'docs/templates.md',
      components: 'src/templates/**/[A-Z]*.vue'
    }
  ],
  ignore: [
    '**/App.vue',
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
  ],
  webpackConfig: merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  })
};
