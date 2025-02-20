<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <article
    class="relative w-[210px] pb-9 px-9 pt-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition"
  >
    <img
      class="absolute b-9 left-9 block"
      :src="!isFavorite ? '/like-1.svg ' : '/like-2.svg'"
      alt="button like"
      @click="onClickFavorite"
    />
    <img class="block w-[133px] h-[112px] mb-4" :src="imageUrl" alt="image sneakers" />
    <p class="leading-[17px] mb-4">{{ title }}</p>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-[0.8rem] text-[#BDBDBD]">ЦЕНА:</p>
        <p class="font-bold">{{ price }}руб.</p>
      </div>
      <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Added Product" @click="onClickAdd" />
    </div>
  </article>
</template>

<style></style>
