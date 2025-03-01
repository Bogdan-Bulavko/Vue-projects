<script setup>
import BookMarksCardList from './BookMarksCardList.vue'

defineProps({
  products: Object,
  onFavoriteProducts: Function,
  onAddProductsInBasket: Function,
})
</script>

<template>
  <section class="mt-5">
    <h2 class="mb-5 text-4xl font-bold">Закладки</h2>
    <BookMarksCardList
      :items="products"
      :onFavoriteProducts="onFavoriteProducts"
      :onAddProductsInBasket="onAddProductsInBasket"
    />
  </section>
</template>

<style scoped></style>
