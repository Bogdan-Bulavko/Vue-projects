<script setup lang="ts">
import CardProduct from './CardProduct.vue'

import type { Product } from 'src/types/product.types'

defineProps<{ products: Product[] }>()
</script>

<template>
  <ul
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
      />
    </TransitionGroup>
  </ul>
</template>

<!-- :onProductsInBasket="() => addOrRemoveProductFromIsAdded(product)"
        :onFavoriteProducts="() => addOrRemoveProductFromFavorites(product)"
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
