"use strict"
require("./check-versions")()

process.env.NODE_ENV = "production"

const ora = require("ora")
const rm = require("rimraf")
const path = require("path")
const chalk = require("chalk")
const webpack = require("webpack")
const config = require("../config")
const webpackConfig = require("./webpack.system.conf")

const spinner = ora("Building Design System...")
spinner.start()

rm(path.join(config.system.assetsRoot, config.system.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + "\n\n"
    )

    if (stats.hasErrors()) {
      console.log(chalk.red("  Design System build failed with errors.\n"))
      process.exit(1)
    }

    console.log(chalk.cyan("  Design System build complete.\n"))
    console.log(
      chalk.yellow(
        "  Tip: You can now publish the design system as a private NPM module.\n" +
          "  Users can import the provided UMD module using:\n\n" +
          "  import DesignSystem from 'vue-design-system'\n" +
          "  import 'vue-design-system/dist/system/system.css'\n\n" +
          "  Vue.use(DesignSystem)\n"
      )
    )
  })
})
