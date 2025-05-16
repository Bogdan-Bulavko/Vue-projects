<script setup lang="ts">
import AllProducts from './AllProducts.vue'
// import Basket from './Basket.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
// import OpenProductCard from './OpenProductCard.vue'
// import Register from './Register.vue'
// import Login from './Login.vue'
// import ProfileContent from './ProfileContent.vue'
// import Notification from './Notification.vue'

import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

import { Product } from 'src/types/product.types'

const products: Ref<Product[] | []> = ref([])
const activeBlock: Ref<string> = ref('allProducts')

const getProductsFetch = async (): Promise<Product[]> => {
  try {
    const response: Response = await fetch('https://34643c0fb49ad60b.mokky.dev/items')

    if (!response.ok) throw new Error('Ошибка загрузки')

    const data: Product[] = await response.json()
    const products: Product[] = data.map((product: Product) => {
      return {
        ...product,
        isAdded: false,
        isFavorite: false,
      }
    })

    return products
  } catch (error) {
    console.error(error)
    return []
  }
}

const onActiveBlock = (e: Event): void => {
  const target = e.currentTarget as HTMLElement
  const id: string = target.id
  switch (id) {
    case 'allProducts':
      activeBlock.value = target.id
      break
    case 'bookmarks':
      activeBlock.value = target.id
      break
  }
}

const onFavoriteProducts = (product: Product): void => {
  product.isFavorite = !product.isFavorite
}

const onBasketProducts = (product: Product): void => {
  product.isAdded = !product.isAdded
}

onMounted(async () => {
  products.value = await getProductsFetch()
})
</script>

<template>
  <!-- <Transition name="notification">
    <Notification v-if="openNotification" />
  </Transition> -->

  <!-- <Register v-if="openFormRegister"></Register>
  <Login v-if="openFormLogin"></Login>
  <Transition name="fade">
    <Basket v-if="openBasket" />
  </Transition> -->

  <!-- <OpenProductCard
    v-if="openCard"
    :id="activeOpenCard.id"
    :imageUrl="activeOpenCard.imageUrl"
    :title="activeOpenCard.title"
    :price="activeOpenCard.price"
    :isFavorite="activeOpenCard.isFavorite"
    :isAdded="activeOpenCard.isAdded"
    :onProductsInBasket="() => addOrRemoveProductFromIsAdded(activeOpenCard)"
    :onFavoriteProducts="() => addOrRemoveProductFromFavorites(activeOpenCard)"
  /> -->

  <div
    class="/* Layout */ max-w-[1080px] h-[100vh] overflow-y-auto py-12 m-auto rounded-3xl md:px-16 min-[375px]:px-3 /* Typography */ /* Border */ /* Background */ bg-white /* Effects */ shadow-xl"
  >
    <HeaderOnlineStore :onActiveBlock="onActiveBlock" />

    <Bookmarks
      v-if="activeBlock === 'bookmarks'"
      :activeBlock="activeBlock"
      :products="products"
      :onFavoriteProducts="onFavoriteProducts"
      :onBasketProducts="onBasketProducts"
    />
    <!-- <ProfileContent v-if="openProfile" /> -->
    <!-- <template v-if="openAllProducts"> -->
    <Slider />
    <AllProducts
      v-if="activeBlock === 'allProducts'"
      :activeBlock="activeBlock"
      :products="products"
      :onFavoriteProducts="onFavoriteProducts"
      :onBasketProducts="onBasketProducts"
    />
    <!-- </template> -->
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
