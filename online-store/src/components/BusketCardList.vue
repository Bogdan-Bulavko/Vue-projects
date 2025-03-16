<script setup>
import { store } from '@/store/store'

import { computed } from 'vue'

import CardProductBasket from './CardProductBasket.vue'

const openOrCloseCard = (item) => {
  store.commit('openOrCloseCard', item)
}

const products = computed(() => store.state.products)

const addOrRemoveProductFromBasket = (item) => {
  store.commit('addOrRemoveProductFromBasket', item)
}
</script>

<template>
  <ul class="overflow-auto overflow-x-hidden">
    <TransitionGroup name="list">
      <template v-for="product in products">
        <CardProductBasket
          v-if="product.isAdded"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :title="product.title"
          :price="product.price"
          :onDeleteCard="() => addOrRemoveProductFromBasket(product)"
          :onOpenCard="() => openOrCloseCard(product)"
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
