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
const localFavorite: Ref<number[]> = ref([])
const localBasket: Ref<number[]> = ref([])
const activeBlock: Ref<string> = ref('allProducts')

const getProductsFetch = async (): Promise<Product[]> => {
  try {
    const response: Response = await fetch('https://34643c0fb49ad60b.mokky.dev/items')

    if (!response.ok) throw new Error('Ошибка загрузки')

    const data: Product[] = await response.json()
    const products: Product[] = data.map((product: Product) => {
      return {
        ...product,
        isAdded: localBasket.value.includes(product.id),
        isFavorite: localFavorite.value.includes(product.id),
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
  const dataAtribute: string | undefined = target.dataset.id

  switch (dataAtribute) {
    case 'allProducts':
      activeBlock.value = dataAtribute
      break
    case 'bookmarks':
      activeBlock.value = dataAtribute
      break
  }
}

const onFavoriteProducts = (product: Product): void => {
  product.isFavorite = !product.isFavorite
  updateLocalFavorite(product.id)
}

const onBasketProducts = (product: Product): void => {
  product.isAdded = !product.isAdded
  updateLocalBasket(product.id)
}

const updateLocalFavorite = (id: number | undefined = undefined): void => {
  const localStorageValue: number[] | null = JSON.parse(localStorage.getItem('favorite') as string)

  if (Array.isArray(localStorageValue)) {
    localFavorite.value = localStorageValue
  }

  if (typeof id === 'number') {
    if (localFavorite.value.includes(id)) {
      localFavorite.value = localFavorite.value.filter((product) => {
        if (product !== id) {
          return product
        }
      })

      localStorage.setItem('favorite', JSON.stringify(localFavorite.value))
    } else {
      localFavorite.value = [...localFavorite.value, id]
      localStorage.setItem('favorite', JSON.stringify(localFavorite.value))
    }
  }
}

const updateLocalBasket = (id: number | undefined = undefined): void => {
  const localStorageValue: number[] | null = JSON.parse(localStorage.getItem('basket') as string)

  if (Array.isArray(localStorageValue)) {
    localBasket.value = localStorageValue
  }

  if (typeof id === 'number') {
    if (localBasket.value.includes(id)) {
      localBasket.value = localBasket.value.filter((product) => {
        if (product !== id) {
          return product
        }
      })

      localStorage.setItem('basket', JSON.stringify(localBasket.value))
    } else {
      localBasket.value = [...localBasket.value, id]
      localStorage.setItem('basket', JSON.stringify(localBasket.value))
    }
  }
}

onMounted(async () => {
  updateLocalFavorite()
  updateLocalBasket()
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
      :localFavorite="localFavorite"
      :onFavoriteProducts="onFavoriteProducts"
      :onBasketProducts="onBasketProducts"
      :onActiveBlock="onActiveBlock"
    />
    <!-- <ProfileContent v-if="openProfile" /> -->
    <template v-if="activeBlock === 'allProducts'">
      <Slider />
      <AllProducts
        :activeBlock="activeBlock"
        :products="products"
        :onFavoriteProducts="onFavoriteProducts"
        :onBasketProducts="onBasketProducts"
      />
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
