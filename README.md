# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



## 全局挂载 
// app.provide("xxx", xxx);
// app.config.globalProperties.xxx = xxx



## 全局组件挂载  


全局组件挂载 还需 在 vite.config.js 中配置 compilerOptions
app.component('xxxx', xxxx)



## 加载控制 
const $loading = {
    open: loading.open,
    close: loading.close,
}
$loading.open() 
$loading.close()


## 路由添加
routeConfigurations 中添加对象 : { path: "/page",name: "page", component: "page/index.vue", metaObj:{...meta}}

## 接口添加 - 调用
link.js 添加路径。

http.post or get(urlName,data).


http.post('GetWeather',{
    data:data
})