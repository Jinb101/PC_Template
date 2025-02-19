<template>
    <div v-if="isLoading"
         class="flex justify-center items-center fixed left-[50%] top-[50%]">
                     <var-loading type="wave"  :color="'#84d764'"  />
    </div>
</template>

<script setup>
import { inject, watch } from 'vue'
import loading from '@/utils/tools/loading.js'

// 注入 isLoading 状态

const isLoading = inject('isLoading');
const userConfig = inject('config');

</script>

<style scoped></style>
