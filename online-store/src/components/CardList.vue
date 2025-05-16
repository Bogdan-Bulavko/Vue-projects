<script setup lang="ts">
import CardProduct from './CardProduct.vue'

import type { Product } from 'src/types/product.types'

defineProps<{
  products: Product[]
  activeBlock: string
  onFavoriteProducts: (product: Product) => void
  onBasketProducts: (product: Product) => void
}>()
</script>

<template>
  <ul
    v-if="activeBlock === 'allProducts'"
    class="/* Layout */ grid gap-11 lg:grid-cols-4 md:justify-between min-[320px]:gap-3 min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[320px]:grid-cols-2"
  >
    <TransitionGroup name="list">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :isFavorite="product.isFavorite"
        :isAdded="product.isAdded"
        :onFavoriteProducts="() => onFavoriteProducts(product)"
        :onBasketProducts="() => onBasketProducts(product)"
      />
    </TransitionGroup>
  </ul>
  <ul
    v-if="activeBlock === 'bookmarks'"
    class="/* Layout */ grid gap-11 mt-4 lg:grid-cols-4 md:justify-between min-[320px]:justify-items-center min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[425px]:grid-cols-1"
  >
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
          :onFavoriteProducts="() => onFavoriteProducts(product)"
          :onBasketProducts="() => onBasketProducts(product)"
        />
      </template>
    </TransitionGroup>
  </ul>
</template>

<!-- 
        
        :onOpenCard="() => openOrCloseCard(product)" -->
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
