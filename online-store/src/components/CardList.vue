<script setup>
import { store } from '@/store/store'

import { computed, onMounted } from 'vue'

import CardProduct from './CardProduct.vue'

// const onOpenCard = inject('onOpenCard')

const products = computed(() => store.state.sortingProducts)

const addOrRemoveProductFromFavorites = (item) => {
  store.commit('addOrRemoveProductFromFavorites', item)
}

const addOrRemoveProductFromIsAdded = (item) => {
  store.commit('addOrRemoveProductFromIsAdded', item)
}

const openOrCloseCard = (item) => {
  store.commit('openOrCloseCard', item)
}

onMounted(() => {
  store.dispatch('getProducts')
})
</script>

<template>
  <ul
    class="grid lg:grid-cols-4 md:justify-between min-[320px]:justify-items-center gap-11 min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[425px]:grid-cols-1"
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
        :onProductsInBasket="() => addOrRemoveProductFromIsAdded(product)"
        :onFavoriteProducts="() => addOrRemoveProductFromFavorites(product)"
        :onOpenCard="() => openOrCloseCard(product)"
      />
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
