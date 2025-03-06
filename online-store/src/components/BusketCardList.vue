<script setup>
import { inject } from 'vue'
import CardProductBasket from './CardProductBasket.vue'

const { state, onProductsInBasket } = inject('onProductsInBasket')
</script>

<template>
  <ul class="overflow-auto overflow-x-hidden">
    <TransitionGroup name="list">
      <template v-for="product in state.products">
        <CardProductBasket
          v-if="product.isAdded"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :title="product.title"
          :price="product.price"
          :onDeleteCard="() => onProductsInBasket(product)"
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
  transform: translateX(20px);
}
</style>
