module.exports = {
  title: 'Vue Design System',
  showCode: true,
  skipComponentsWithoutExample: false,
  sections: [
    {
      name: 'Elements',
      components: 'src/elements/**/[A-Z]*.vue'
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.vue'
    },
    {
      name: 'Templates',
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
  webpackConfig: require('./build/webpack.base.conf.js')
};
