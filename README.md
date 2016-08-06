# React Ant Design Mobile Demo

针对[Ant Design Mobile](http://mobile.ant.design/)（简称antd-mobile）的一个demo。帮大家趟下路踩下坑，能对antd-mobile有一个快速的认识，把项目跑起来。

一直在关注[Ant Design](http://ant.design/)，用来写一些后台挺方便的，也基于antd做了一些简单的项目。

最近发现Ant Design发布了mobile版，可以写移动端的H5了，迫不及待试了试，但感觉还不是很成熟，有各种小问题。

* 有些官方的例子都跑不通
* 浏览器兼容性有问题
* 文档欠缺，各种配置上的坑

但至少有个可用的东西了，相信antd-mobile也会逐步完善。持续关注中。

而且antd-mobile不止关注于H5，似乎也有React Native的版本，感觉还是挺有前途的。

## Quick Start

1. 保证node版本5.3+，npm版本3.3+
2. clone下来之后，`npm install`，安装必要的依赖
3. `npm run dev`，编译js后会启动webpack-dev-server，打开浏览器`http://localhost:8080`查看效果，一个基于官方[Tabs组件](http://mobile.ant.design/components/tabs)的demo。

## 一些说明

本项目基于Webpack + Babel 6。

* antd-mobile版本：0.7.2
* React版本：15.0.2

webpack-dev-server启动后，支持热加载。可以修改`src/index.js`查看效果。

## 工程结构

| 文件名  | 说明 |
| ------------- | ------------- |
| .editorconfig  | [EditorConfig](http://editorconfig.org/)配置文件 |
| .eslintrc | [ESLint](http://eslint.org/)配置文件 |
| .stylelintrc  | [StyleLint](http://stylelint.io/)配置文件 |
| .lesshintrc | [lesshint](https://github.com/lesshint/lesshint)配置文件 |
| dist | 编译时的目标目录。js文件编译后会在这个目录生成bundle.js文件，生产环境编译js后会生成bundle.min.js文件。这个目录也包括index.html/index-prod.html文件用于承载js。 |
| src/index.js | 编译js时的入口 |
| webpack.config.js | webpack的配置文件 |
| webpack.config.prod.js | 生产环境下webpack的配置文件，会做一些压缩之类的。 |

## 其他命令

1. `npm run prod`，编译生产环境的js，编译完成后打开`dist/index-prod.html`查看效果。
2. `npm run eslint`/`npm run stylelint`/`npm run lesshint`，一些lint工具。
3. `npm run clean`，删除dist目录下的bundle*.js。
