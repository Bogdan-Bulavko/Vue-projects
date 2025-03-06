<script setup>
import { inject } from 'vue'
import CardProduct from './CardProduct.vue'

const { state, onProductsInBasket } = inject('onProductsInBasket')
const onFavoriteProducts = inject('onFavoriteProducts')
</script>

<template>
  <ul class="grid grid-cols-4 justify-between gap-11">
    <TransitionGroup name="list">
      <template v-for="product in state.products">
        <CardProduct
          v-if="product.isFavorite"
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
      </template>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
