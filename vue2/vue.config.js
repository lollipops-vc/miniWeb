const { defineConfig } = require('@vue/cli-service')
const path = require('path');//获取name名称
const { name } = require('./package');
function resolve(dir) {
  return path.join(__dirname, dir);//针对path做个封装
}
const port = 9004;
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',//打包的目录，根目录的dist
  assetsDir: 'static',//静态资源
  filenameHashing: true,//打包出来的文件，会带有hash信息
  publicPath: 'http://localhost:9004',//域名内容
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // hot: true,是否是热更新
    allowedHosts: 'all',
    port,//端口号
    headers: {
      'Access-Control-Allow-Origin': '*',//当前所启动的本地服务的跨域内容
    },
  }, 
  // 自定义配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')//重命名../../可替换成@src
      }
    },
    output: {
      // library: `${name}-[name]`,
      library: 'vue2',//window.vue2
      libraryTarget: 'umd',//把子应用打包成umd格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
      globalObject: 'window'
    }
  },

  // 链式配置，确保 index.html 也正确生成
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = name; // 可选：设置 HTML title
      return args;
    });
  }
})