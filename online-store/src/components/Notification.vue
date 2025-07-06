<script setup lang="ts">
// Pinia store
defineProps<{ text: string; image: string }>()
</script>

<template>
  <div
    class="/* Layout */ -translate-x-1/2 left-1/2 fixed flex items-center min-[320px]:w-full min-[425px]:w-[90%] md:w-[60%] lg:w-[40%] p-4 rounded-2xl z-30 /* Typography */ text-2xl font-bold text-gray-800 /* Border */ /* Background */ bg-gray-50 /* Effects */ shadow-xl"
  >
    <img class="/* Layout */ mr-4 w-[50px] h-[50px]" :src="image" alt="Notification" />
    <span>{{ text }}</span>
  </div>
</template>
