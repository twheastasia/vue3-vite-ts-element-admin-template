<!--
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-04-28 16:07:30
 * @LastEditTime: 2021-04-30 16:31:10
-->

本项目是基于 https://github.com/cereschen/vue3-admin-vite-template 而来，在此基础上做了以下修改：
1. `vite.config.js` 中增加 `proxy` 代理的配置示例
2. 去掉了两个mixin（ResizeHandler.js、 FixiOSBug.js）
3. 侧边栏样式修改成浅色背景
4. 所有js都改成ts格式（有的类型问题搞不定直接写成any）

此项目仅供参考，欢迎学习交流。

## ------以下是原文------

总览

[vue3-admin-vite-template](http://armour.github.io/vue-typescript-admin-template) 是一个后台前端基础模板，它基于 [vue3](https://github.com/vuejs/vue-next) [vite](https://github.com/vitejs/vite) [typescript](https://www.typescriptlang.org/) 和 [element-plus](https://github.com/element-plus/element-plus/)实现。原始的 Javascript 版本的代码是由 [PanJiaChen](https://github.com/PanJiaChen) 开发维护的 [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template/)

本项目在原webpack项目的基础上改动很小,很适合从vue2项目迁移.