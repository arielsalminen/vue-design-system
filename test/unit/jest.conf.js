const path = require("path")

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/test/unit/setup"],
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/ExampleComponent.js",
    "<rootDir>/src/util/**/*.{js,vue}",
    "<rootDir>/docs/**/*.{js,vue}",
    "!<rootDir>/src/main.js",
    "!<rootDir>/src/router/index.js",
    "!<rootDir>/node_modules/**",
    "!<rootDir>/src/system.js",
    "!<rootDir>/docs/docs.helper.js",
    "!<rootDir>/docs/components/status/*",
  ],
}
