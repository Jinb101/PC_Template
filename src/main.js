// CSS 相关导入
import "./style.css";
import 'amfe-flexible';

// Vue 相关导入
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";

// 状态管理 Pinia 相关导入
import { createPinia, storeToRefs } from "pinia";
import { useStore } from "@/store/index.js";
import persist from 'pinia-plugin-persistedstate'
// 个人配置 实例对象
import { config } from "@/utils/config/user.config.js";
// 工具库和配置相关导入
import scales from "../win.scales"; // 视口缩放配置
import http from "@/api/api.js"; // Axios 实例
// 公共方法
import * as tools from "@/utils/tools/index.js";
import loading from '@/utils/tools/loading.js';
import lodash from 'lodash'; // Lodash 库

// 创建 Vue 应用实例
// app 实例
const app = createApp(App);

//  Pinia 实例
app.use(createPinia().use(persist));



// 视口设置相关函数
const setViewport = (deviceWidth) => {
    for (const scale of scales) {
        if (deviceWidth <= scale.max && deviceWidth > scale.min) {
            let meta = document.head.querySelector('meta[name="viewport"]');
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = 'viewport';
                document.head.appendChild(meta);
            }
            meta.content = `width=device-width, initial-scale=${scale.scale}, minimum-scale=${scale.scale}, maximum-scale=${scale.scale}, user-scalable=no`;
            break;
        }
    }
};

// 判断设备类型
const isMobile = () => /iphone|ipad|ipod|android|blackberry|windows phone/.test(navigator.userAgent.toLowerCase());

// 如果是移动设备，监听窗口大小变化并设置 viewport
if (isMobile()) {
    window.addEventListener('resize', () => setViewport(window.innerWidth));
}

// 全局提供依赖
const mainStore = useStore();
const PiniaStor = storeToRefs(mainStore);

const $loading = {
    open: loading.open,
    close: loading.close,
}
// app.provide("xxx", xxx);
// app.config.globalProperties.xxx = xxx
app.provide("http", http);
app.provide("store", PiniaStor);
app.provide("$loading", $loading);
app.provide("isLoading", loading.isLoading);
app.provide("config", config);
app.provide("tools", tools);


// 使用路由和 UI 库
app.use(router);

// 挂载 Vue 应用
app.mount("#app");
