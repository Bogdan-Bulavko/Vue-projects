<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '@/stores/activeBlockStore'
defineProps<{ text: string; image: string; id: number }>()

const storeActiveBlock = useActiveBlockStore()
</script>

<template>
  <div
    class="/* Layout */ select-none cursor-pointer -translate-x-1/2 left-1/2 fixed flex items-center justify-between min-[320px]:w-full min-[425px]:w-[90%] md:w-[60%] lg:w-[40%] p-4 rounded-2xl z-30 /* Typography */ text-2xl font-bold text-gray-800 /* Border */ /* Background */ bg-gray-50 /* Effects */ shadow-xl"
    @click="() => storeActiveBlock.onDeactivateNotification(id)"
  >
    <img class="/* Layout */ mr-4 w-[50px] h-[50px]" :src="image" alt="Notification" />
    <span>{{ text }}</span>

    <img src="/close.png" alt="close" class="ml-3 w-6 h-6" />
  </div>
</template>
