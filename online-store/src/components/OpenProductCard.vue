<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onProductsInBasket: Function,
  onFavoriteProducts: Function,
})

const emit = defineEmits(['closeCard'])
</script>

<template>
  <section>
    <div
      class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50"
      @click="emit('closeCard')"
    ></div>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <article
        class="relative w-[350px] pb-9 px-9 pt-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition z-10"
        :id="id"
      >
        <img
          class="absolute left-9 block w-14"
          :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
          alt="button like"
          @click="onFavoriteProducts"
        />
        <img class="block w-full h-[224px] mb-4" :src="imageUrl" alt="image sneakers" />
        <p class="text-2xl mb-4">{{ title }}</p>

        <div>
          <p class="text-base text-[#BDBDBD]">ЦЕНА:</p>
          <p class="text-base font-bold">{{ price }}руб.</p>
        </div>
        <img
          class="absolute bottom-9 right-9 block"
          :src="isAdded ? '/checked.svg' : '/plus.svg'"
          alt="Added Product"
          @click="onProductsInBasket"
        />
      </article>
    </div>
  </section>
</template>

<style></style>
