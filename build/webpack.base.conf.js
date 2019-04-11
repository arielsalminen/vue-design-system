"use strict"
const path = require("path")
const utils = require("./utils")
const config = require("../config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require("vue-loader")

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

module.exports = {
  mode: process.env.NODE_ENV === "production" ? config.build.mode : config.dev.mode,
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          cacheBusting: config.dev.cacheBusting,
          transformAssetUrls: {
            video: ["src", "poster"],
            source: "src",
            img: "src",
            image: "xlink:href",
          },
        },
      },
      {
        test: /\.js$/,
        include: [
          resolve("docs"),
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client"),
          resolve("node_modules/regexpu-core"),
          resolve("node_modules/unicode-match-property-ecmascript"),
          resolve("node_modules/unicode-match-property-value-ecmascript"),
          resolve("node_modules/buble/node_modules/acorn-jsx"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: {
                    ie: "11",
                    chrome: "71",
                    firefox: "64",
                    safari: "11",
                    edge: "17",
                  },
                },
              ],
            ],
            comments: false,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]"),
        },
      },
      {
        test: /\.svg$/,
        loader: "html-loader",
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]"),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new MiniCssExtractPlugin("style.css")],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
}
