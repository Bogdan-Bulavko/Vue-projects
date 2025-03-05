<script setup>
import { inject } from 'vue'
import CardProduct from './CardProduct.vue'

const { state, onProductsInBasket } = inject('onProductsInBasket')
const onFavoriteProducts = inject('onFavoriteProducts')
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <CardProduct
      v-for="product in state.sortingProducts"
      :key="product.id"
      :id="product.id"
      :imageUrl="product.imageUrl"
      :title="product.title"
      :price="product.price"
      :isFavorite="product.isFavorite"
      :isAdded="product.isAdded"
      :onProductsInBasket="() => onProductsInBasket(product)"
      :onFavoriteProducts="() => onFavoriteProducts(product)"
    />
  </div>
</template>

<style></style>
