<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '/src/store/activeBlockStore'

const storeActiveBlock = useActiveBlockStore()
</script>

<template>
  <div
    class="/* Layout */ fixed flex items-center w-[400px] p-4 rounded-2xl z-30 /* Typography */ text-2xl font-bold text-gray-800 /* Border */ /* Background */ bg-gray-50 /* Effects */"
  >
    <img
      class="/* Layout */ mr-4 w-[50px] h-[50px]"
      :src="storeActiveBlock.imageNotification"
      alt="Notification"
    />
    <span>{{ storeActiveBlock.textNotification }}</span>
  </div>
</template>
