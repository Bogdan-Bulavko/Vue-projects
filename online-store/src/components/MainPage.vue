<script setup>
import { computed } from 'vue'

import { store } from '@/store/store'

import AllProducts from './AllProducts.vue'
import Drawer from './Drawer.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import OpenProductCard from './OpenProductCard.vue'

import Register from './Register.vue'
import Login from './Login.vue'
import Profile from './Profile.vue'
import Notification from './Notification.vue'

const openNotification = computed(() => store.state.openNotification)

const openProfile = computed(() => store.state.openProfile)

const openFormRegister = computed(() => store.state.openFormRegister)
const openFormLogin = computed(() => store.state.openFormLogin)

const openBasket = computed(() => store.state.openBasket)
const openBookmarks = computed(() => store.state.openBookmarks)

const activeOpenCard = computed(() => store.state.activeOpenCard)
const openCard = computed(() => store.state.openCard)

const openAllProducts = computed(() => store.state.openAllProducts)

const addOrRemoveProductFromFavorites = (item) => {
  store.commit('addOrRemoveProductFromFavorites', item)
}

const addOrRemoveProductFromBasket = (item) => {
  store.commit('addOrRemoveProductFromBasket', item)
}
</script>

<template>
  <Transition name="notification"> <Notification v-if="openNotification" /></Transition>

  <Register v-if="openFormRegister"></Register>
  <Login v-if="openFormLogin"></Login>
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
    <Profile v-if="openProfile" />
    <template v-if="openAllProducts">
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

.notification-enter-active,
.notification-leave-active {
  transform: translateY(0);
  position: fixed;
  transition: 1s;
}

.notification-enter-from,
.notification-leave-to {
  transform: translateY(-70px);
  position: fixed;
  transition: 1s;
}
</style>
