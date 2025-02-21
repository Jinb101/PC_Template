<script setup>
import { RouterView } from 'vue-router';
import loading from '@com/Loading.vue';
import { onMounted, onUnmounted, inject } from 'vue';

const config = inject('config');
const tools = inject('tools');
const $loading = inject('$loading');
const store = inject('store');


onMounted(() => {
    $loading.open();
    // 获取 URL 参数
    const params = tools.getUrlParameter();
    if (!params.EquipmentID) return showFailToast('缺少学校ID');
    if (!params.deviceId) return showFailToast('缺少设备ID');
    // 存储设备信息
    localStorage.setItem('params', JSON.stringify(params));
    localStorage.setItem('EquipmentID', params.EquipmentID);
    localStorage.setItem('deviceId', params.deviceId);
    store.EquipmentID = params.EquipmentID;
    store.deviceId = params.deviceId;
    store.initLoading = true;

})


</script>

<template>
    <div id="app">
        <loading />
        <RouterView />
    </div>
</template>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}
</style>
