<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onFavoriteProducts: Function,
  onAddProductsInBasket: Function,
})
</script>

<template>
  <article
    class="relative w-[210px] pb-9 px-9 pt-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition"
    :id="id"
  >
    <img
      class="absolute left-9 block"
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="button like"
      @click="onFavoriteProducts"
    />
    <img class="block w-[133px] h-[112px] mb-4" :src="imageUrl" alt="image sneakers" />
    <p class="leading-[17px] mb-4">{{ title }}</p>

    <div>
      <p class="text-[0.8rem] text-[#BDBDBD]">ЦЕНА:</p>
      <p class="font-bold">{{ price }}руб.</p>
    </div>
    <img
      class="absolute bottom-9 right-9 block"
      :src="isAdded ? '/checked.svg' : '/plus.svg'"
      alt="Add Product"
      @click="onAddProductsInBasket"
    />
  </article>
</template>

<style></style>
