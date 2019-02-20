# vue 模板，基于 webpack4 优化的脚手架

> 该脚手架主要基于 webpack4，优化了打包性能，核心技术是使用 dllplugin 和 happypack 来优化打包和 dev 时的速度，如果使用官方的脚手架打包时间需要 2 分钟的话，这个只需要 20s，同时在 npm run dev 时速度通常在 10 秒左右

## 使用方法

```bash
# install dependencies
npm install

# 首先生成dll公用js，然后开启一个监听8080端口的服务器
npm run start

# 开发模式
npm run dev

#生成公用的dll文件
npm run dll

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
