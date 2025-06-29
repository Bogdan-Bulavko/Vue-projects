<script setup lang="ts">
// Pinia store
defineProps<{ text: string; image: string }>()
</script>

<template>
  <div
    class="/* Layout */ fixed flex items-center w-full p-4 rounded-2xl z-30 /* Typography */ text-2xl font-bold text-gray-800 /* Border */ /* Background */ bg-gray-50 /* Effects */ shadow-xl"
  >
    <img class="/* Layout */ mr-4 w-[50px] h-[50px]" :src="image" alt="Notification" />
    <span>{{ text }}</span>
  </div>
</template>
