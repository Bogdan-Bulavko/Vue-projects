<script setup lang="ts">
import BasketCardProduct from './BasketCardProduct.vue'

import type { Product } from 'src/types/product.types'

defineProps<{ products: Product[]; onBasketProducts: (product: Product) => void }>()
</script>

<template>
  <ul class="/* Layout */ overflow-auto overflow-x-hidden">
    <TransitionGroup name="list">
      <template v-for="product in products">
        <BasketCardProduct
          v-if="product.isAdded"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :title="product.title"
          :price="product.price"
          :onBasketProducts="() => onBasketProducts(product)"
        />
      </template>
    </TransitionGroup>
  </ul>
</template>
<!-- 
          :onDeleteCard="() => addOrRemoveProductFromIsAdded(product)"
          :onOpenCard="() => openOrCloseCard(product)" -->

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
