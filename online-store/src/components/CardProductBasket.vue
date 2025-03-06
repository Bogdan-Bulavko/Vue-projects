<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  onDeleteCard: Function,
})
</script>

<template>
  <li>
    <article
      class="max-w-full h-32 mb-6 p-6 rounded-3xl border border-[#F2F2F2] flex justify-between items-center"
      :id="id"
    >
      <img class="block w-[70px] h-[70px] mr-6" :src="imageUrl" alt="Sneakers Image" />
      <div>
        <p class="w-40">{{ title }}</p>
        <b>{{ price }}</b>
      </div>
      <img class="self-end" src="/public/close.svg" alt="Delete Product" @click="onDeleteCard" />
    </article>
  </li>
</template>

<style scoped></style>
