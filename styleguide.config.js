module.exports = {
  title: 'Design System',
  components: 'src/**/**/[A-Z]*.vue',
  ignore: [
    '**/App.vue',
    '**/templates/*.vue',
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
  ],
  webpackConfig: require('./build/webpack.base.conf.js')
};
