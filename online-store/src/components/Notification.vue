<script setup>
import { store } from '@/store/store'
import { computed } from 'vue'

const text = computed(() => store.state.textNotification)
</script>

<template>
  <div class="fixed flex w-[400px] bg-white p-4 rounded-2xl text-2xl font-bold text-gray-800 z-30">
    <!-- <img class="mr-4" src="/checked.svg" alt="Created acc" /> -->
    <span>{{ text }}</span>
  </div>
</template>
