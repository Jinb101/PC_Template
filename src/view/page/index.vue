<template>
    <div class=" h-full w-full flex flex-col justify-start items-center content_center bg-[#9C7CFA] ">

        <!-- 頭部 -->
    <div class=" w-full h-[10%] flex justify-center items-center bg-red-500">
        123
    </div>

    <!-- 內容 -->
    <div class="  w-full h-[80%] ">
       <div class="button-container flex justify-center my-10">
    <button class="btn">Button</button>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
    <button class="btn btn-accent">Button</button>
    <button class="btn btn-ghost">Button</button>
    <button class="btn btn-link">Button</button>
  </div>


    </div>

    <!-- 公告 -->
   <div class="  w-full h-[10%]">123</div>

    </div>
</template>

<script setup>
import { inject, onMounted, ref, unref, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const $loading = inject('$loading');
const tools = inject('tools');
const store = inject('store');
const http = inject('http');

const SIZE = 20
const page = ref(1)

const list = ref([])

const params = tools.getUrlParameter()


const init = async () => {
    console.log('init');
    $loading.open()
    // 获取公共列表
    const data = await http.post('homePage', {

    },{
        headers: {
            "deviceId":store.deviceId
        }
    })
    console.log(data);
  setTimeout(() => {
    // $loading.close()
  }, 3000);
    // 判断页面
}

onMounted(() => {
    init()
})
</script>

<style scoped>

.content_center {
    background-image: url('@/assets/images/bg.png');
    background-size: 100% 160px;
    background-position: bottom center;
    background-repeat: no-repeat;
}


</style>
