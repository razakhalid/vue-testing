const { defineConfig } = require('@vue/cli-service')

const config = defineConfig({
  transpileDependencies: true
})

module.exports = {
  ...config,
  configureWebpack: {
    devtool: 'source-map'
  }
}
