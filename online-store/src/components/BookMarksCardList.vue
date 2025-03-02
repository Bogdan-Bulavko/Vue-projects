<script setup>
import CardProduct from './CardProduct.vue'

defineProps({
  items: Object,
  onFavoriteProducts: Function,
  onAddProductsInBasket: Function,
})
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <template v-for="item in items">
      <CardProduct
        v-if="item.isFavorite"
        :key="item.id"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :onFavoriteProducts="onFavoriteProducts"
        :onAddProductsInBasket="onAddProductsInBasket"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </template>
  </div>
</template>

<style></style>
