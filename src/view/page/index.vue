<template>
    <div class="  bg-wx-bg h-full w-full py-2 px-4">

    </div>
</template>

<script setup>
import { inject, onMounted, ref, unref, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const $loading = inject('$loading');
const tools = inject('tools');
const http = inject('http');

const SIZE = 20
const page = ref(1)

const list = ref([])

const params = tools.getUrlParameter()


const init = async () => {
    console.log('init');
    $loading.open()
    // 获取公共列表
    const data = await http.post('classPage', {
        "classId": params.classId,
        "current": page.value,
        "size": SIZE
    })
  setTimeout(() => {
    $loading.close()
  }, 3000);
    // 判断页面
}



console.log(params)

onMounted(() => {
    init()
})
</script>

<style scoped></style>
