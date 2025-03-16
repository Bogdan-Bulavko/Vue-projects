<script setup>
import { computed } from 'vue'

import { store } from '@/store/store'

import AllProducts from './AllProducts.vue'
import Drawer from './Drawer.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import OpenProductCard from './OpenProductCard.vue'

const openBasket = computed(() => store.state.openBasket)
const openBookmarks = computed(() => store.state.openBookmarks)

const activeOpenCard = computed(() => store.state.activeOpenCard)
const openCard = computed(() => store.state.openCard)

const addOrRemoveProductFromFavorites = (item) => {
  store.commit('addOrRemoveProductFromFavorites', item)
}

const addOrRemoveProductFromBasket = (item) => {
  store.commit('addOrRemoveProductFromBasket', item)
}
</script>

<template>
  <Transition name="fade">
    <Drawer v-if="openBasket" />
  </Transition>

  <OpenProductCard
    v-if="openCard"
    :id="activeOpenCard.id"
    :imageUrl="activeOpenCard.imageUrl"
    :title="activeOpenCard.title"
    :price="activeOpenCard.price"
    :isFavorite="activeOpenCard.isFavorite"
    :isAdded="activeOpenCard.isAdded"
    :onProductsInBasket="() => addOrRemoveProductFromBasket(activeOpenCard)"
    :onFavoriteProducts="() => addOrRemoveProductFromFavorites(activeOpenCard)"
  />

  <div
    class="w-[1080px] px-16 py-12 m-auto bg-white rounded-3xl shadow-xl h-[100vh] overflow-y-auto"
  >
    <HeaderOnlineStore />
    <Bookmarks v-if="openBookmarks" />
    <template v-else>
      <Slider />
      <AllProducts />
    </template>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
