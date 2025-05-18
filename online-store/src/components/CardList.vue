<script setup lang="ts">
import { inject } from 'vue'
import CardProduct from './CardProduct.vue'

import type { Product } from 'src/types/product.types'

defineProps<{ sortingProducts?: Product[] }>()

const products = inject<Product[]>('products')

const activeBlock = inject<string>('activeBlock')

const onFavoriteProducts = inject('onFavoriteProducts') as (product: Product) => void
const onBasketProducts = inject('onBasketProducts') as (product: Product) => void
const onOpenCardProduct = inject('onOpenCardProduct') as (product: Product) => void
</script>

<template>
  <ul
    v-if="activeBlock === 'allProducts'"
    class="/* Layout */ grid gap-11 lg:grid-cols-4 md:justify-between min-[320px]:gap-3 min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[320px]:grid-cols-2"
  >
    <TransitionGroup name="list">
      <CardProduct
        v-for="product in sortingProducts"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :isFavorite="product.isFavorite"
        :isAdded="product.isAdded"
        :onFavoriteProducts="() => onFavoriteProducts(product)"
        :onBasketProducts="() => onBasketProducts(product)"
        :onOpenCardProduct="() => onOpenCardProduct(product)"
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
          :onOpenCardProduct="() => onOpenCardProduct(product)"
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
