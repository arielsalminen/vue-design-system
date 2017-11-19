"use strict";
const utils = require("./utils");
const config = require("../config");
const isProduction = process.env.NODE_ENV === "production";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
    css: ExtractTextPlugin.extract({
      use: "css-loader",
      fallback: "vue-style-loader" // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
    })
  }),
  transformToRequire: {
    video: "src",
    source: "src",
    img: "src",
    image: "xlink:href"
  }
};
