<script setup>
import { store } from '@/store/store'
import { computed } from 'vue'

const text = computed(() => store.state.textNotification)
const image = computed(() => store.state.imgNotification)
</script>

<template>
  <div class="fixed flex w-[400px] bg-white p-4 rounded-2xl text-2xl font-bold text-gray-800 z-30">
    <img class="mr-4 w-[30px] h-[30px]" :src="image" alt="Created acc" />
    <span>{{ text }}</span>
  </div>
</template>
