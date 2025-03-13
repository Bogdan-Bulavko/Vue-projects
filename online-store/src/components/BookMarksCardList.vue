<script setup>
import { computed } from 'vue'

import store from '@/store/store'

import CardProduct from './CardProduct.vue'

// const onOpenCard = inject('onOpenCard')

const products = computed(() => store.state.products)

const addOrRemoveProductFromFavorites = (item) => {
  store.commit('addOrRemoveProductFromFavorites', item)
}

const addOrRemoveProductFromBasket = (item) => {
  store.commit('addOrRemoveProductFromBasket', item)
}
</script>

<template>
  <ul class="grid grid-cols-4 justify-between gap-11">
    <TransitionGroup name="list">
      <template v-for="product in products">
        <CardProduct
          v-if="product.isFavorite"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :title="product.title"
          :price="product.price"
          :isFavorite="product.isFavorite"
          :isAdded="product.isAdded"
          :onProductsInBasket="() => addOrRemoveProductFromBasket(product)"
          :onFavoriteProducts="() => addOrRemoveProductFromFavorites(product)"
          :onOpenCard="() => onOpenCard(product)"
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
