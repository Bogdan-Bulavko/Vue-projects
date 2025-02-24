<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
})
</script>

<template>
  <div
    class="max-w-full h-32 mb-6 p-6 rounded-3xl border border-[#F2F2F2] flex justify-between items-center"
  >
    <img class="block w-[70px] h-[70px] mr-6" :src="imageUrl" alt="Sneakers Image" />
    <div>
      <p class="w-40">{{ title }}</p>
      <b>{{ price }}</b>
    </div>
    <img class="self-end" src="/public/close.svg" alt="Delete Product" />
  </div>
</template>

<style scoped></style>
