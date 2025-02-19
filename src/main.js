// CSS 相关导入
import "./style.css";
import 'amfe-flexible';

// Vue 相关导入
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";



// 状态管理 Pinia 相关导入
import { createPinia } from "pinia";
import { useStore } from "@/store/index.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 工具库和配置相关导入
import scales from "../win.scales"; // 视口缩放配置
import http from "@/api/api.js"; // Axios 实例
import { userConfig } from "@/utils/config/user.config.js"; // 用户配置
import loading from '@/utils/tools/loading.js'; // 加载工具
import * as tools from "@/utils/tools/index.js"; // 公共工具方法
import lodash from 'lodash'; // Lodash 库

// 创建 Vue 应用实例
const app = createApp(App);

// 创建 Pinia 实例并使用插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// 获取 Pinia store 实例
const mainStore = useStore();

// 全局提供对象
const $loading = {
    open: loading.open,
    close: loading.close,
};

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
app.provide("http", http);
app.provide("stor", mainStore);
app.provide("$loading", $loading);
app.provide("config", userConfig);
app.provide("tools", tools);
app.provide("lodash", lodash);

// 使用路由和 UI 库
app.use(router);
app.use(Varlet);

// 挂载 Vue 应用
app.mount("#app");
