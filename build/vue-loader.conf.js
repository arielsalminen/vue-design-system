"use strict"
const utils = require("./utils")
const config = require("../config")
const isProduction = process.env.NODE_ENV === "production"
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
    css: ExtractTextPlugin.extract({
      use: "css-loader",
      fallback: "vue-style-loader", // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
    }),
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ["src", "poster"],
    source: "src",
    img: "src",
    image: "xlink:href",
  },
}
