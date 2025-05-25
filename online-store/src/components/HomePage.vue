<script setup lang="ts">
// Components
import AllProducts from './AllProducts.vue'
import Basket from './Basket.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import OpenProductCard from './OpenProductCard.vue'
// import Register from './Register.vue'
// import Login from './Login.vue'
// import ProfileContent from './ProfileContent.vue'
// import Notification from './Notification.vue'

// Vue lib
import { onMounted } from 'vue'

// Pinia Store
import { useActiveBlockStore } from '/src/store/activeBlockStore'
import { useProductStore } from '/src/store/productsStore'

const storeActiveBlock = useActiveBlockStore()
const storeProducts = useProductStore()
const {
  getProductsFetch,
  onFavoriteProducts,
  onBasketProducts,
  updateLocalFavorite,
  updateLocalBasket,
} = storeProducts

onMounted(async () => {
  updateLocalFavorite()
  updateLocalBasket()
  storeProducts.products = await getProductsFetch()
})
</script>

<template>
  <!-- <Transition name="notification">
    <Notification v-if="openNotification" />
  </Transition> -->

  <!-- <Register v-if="openFormRegister"></Register>
  <Login v-if="openFormLogin"></Login> -->

  <Transition name="fade">
    <Basket v-if="storeActiveBlock.activeBlockAboveContent === 'basket'" />
  </Transition>

  <OpenProductCard
    v-if="storeActiveBlock.activeBlockAboveContent === 'cardProduct'"
    :id="storeProducts.activeOpenCard.id"
    :imageUrl="storeProducts.activeOpenCard.imageUrl"
    :title="storeProducts.activeOpenCard.title"
    :price="storeProducts.activeOpenCard.price"
    :isFavorite="storeProducts.activeOpenCard.isFavorite"
    :isAdded="storeProducts.activeOpenCard.isAdded"
    :onBasketProducts="() => onBasketProducts(storeProducts.activeOpenCard)"
    :onFavoriteProducts="() => onFavoriteProducts(storeProducts.activeOpenCard)"
  />

  <div
    class="/* Layout */ max-w-[1080px] h-[100vh] overflow-y-auto py-12 m-auto rounded-3xl md:px-16 min-[375px]:px-3 /* Typography */ /* Border */ /* Background */ bg-white /* Effects */ shadow-xl"
  >
    <HeaderOnlineStore />
    <Bookmarks v-if="storeActiveBlock.activeBlock === 'bookmarks'" />
    <!-- <ProfileContent v-if="openProfile" /> -->
    <template v-if="storeActiveBlock.activeBlock === 'allProducts'">
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
