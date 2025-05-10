<script setup>
import AllProducts from './AllProducts.vue'
import Basket from './Basket.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import OpenProductCard from './OpenProductCard.vue'

import Register from './Register.vue'
import Login from './Login.vue'
import ProfileContent from './ProfileContent.vue'
import Notification from './Notification.vue'
</script>

<template>
  <Transition name="notification">
    <Notification v-if="openNotification" />
  </Transition>

  <Register v-if="openFormRegister"></Register>
  <Login v-if="openFormLogin"></Login>
  <Transition name="fade">
    <Basket v-if="openBasket" />
  </Transition>

  <OpenProductCard
    v-if="openCard"
    :id="activeOpenCard.id"
    :imageUrl="activeOpenCard.imageUrl"
    :title="activeOpenCard.title"
    :price="activeOpenCard.price"
    :isFavorite="activeOpenCard.isFavorite"
    :isAdded="activeOpenCard.isAdded"
    :onProductsInBasket="() => addOrRemoveProductFromIsAdded(activeOpenCard)"
    :onFavoriteProducts="() => addOrRemoveProductFromFavorites(activeOpenCard)"
  />

  <div
    class="/* Layout */ max-w-[1080px] h-[100vh] overflow-y-auto py-12 m-auto rounded-3xl md:px-16 min-[375px]:px-3 /* Typography */ /* Border */ /* Background */ bg-white /* Effects */ shadow-xl"
  >
    <HeaderOnlineStore />

    <Bookmarks v-if="openBookmarks" />
    <ProfileContent v-if="openProfile" />
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
