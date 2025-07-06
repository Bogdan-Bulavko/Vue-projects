<script setup lang="ts">
// Pinia Store
import { useActiveBlockStore } from '@/stores/activeBlockStore'
import { useProductStore } from '@/stores/productsStore'

// Components
import CardProduct from './CardProduct.vue'

// Types
import type { Product } from '@/types/product.types'

defineProps<{ sortingProducts?: Product[] }>()

const storeActiveBlock = useActiveBlockStore()
const { onActiveBlockAboveContent } = storeActiveBlock

const storeProducts = useProductStore()
const { onFavoriteProducts, onBasketProducts } = storeProducts
</script>

<template>
  <ul
    v-if="storeActiveBlock.activeBlock === 'allProducts'"
    class="/* Layout */ m-auto grid grid-cols-1 min-[425px]:grid-cols-2 min-[425px]:max-w-[425px] min-[600px]:grid-cols-3 min-[600px]:max-w-[600px] min-[900px]:grid-cols-4 min-[900px]:max-w-[850px] justify-items-center"
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
        :onActiveBlockAboveContent="(e) => onActiveBlockAboveContent(e, product)"
      />
    </TransitionGroup>
  </ul>
  <ul
    v-if="storeActiveBlock.activeBlock === 'bookmarks'"
    class="/* Layout */ m-auto grid grid-cols-1 min-[425px]:grid-cols-2 min-[425px]:max-w-[425px] min-[600px]:grid-cols-3 min-[600px]:max-w-[600px] min-[900px]:grid-cols-4 min-[900px]:max-w-[850px] justify-items-center"
  >
    <TransitionGroup name="list">
      <template v-for="product in storeProducts.products">
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
          :onActiveBlockAboveContent="(e) => onActiveBlockAboveContent(e, product)"
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
