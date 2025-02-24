<script setup>
import { ref } from 'vue'

import CardProduct from './CardProduct.vue'
import OpenProductCard from './OpenProductCard.vue'
const props = defineProps({
  items: Array,
})
const dataFavorite = ref(JSON.parse(localStorage.getItem('favorite')))
const dataProductsInBasket = ref(JSON.parse(localStorage.getItem('productsInBasket')))
const openCardFlag = ref(false)
const openCard = ref({})

if (dataFavorite.value === null) {
  dataFavorite.value = []
}

if (dataProductsInBasket.value === null) {
  dataProductsInBasket.value = []
}

const onFavoriteProducts = (e) => {
  const id = Number(e.target.parentElement.id)
  if (dataFavorite.value === null) {
    dataFavorite.value = []
  }

  if (dataFavorite.value.includes(id)) {
    dataFavorite.value = dataFavorite.value.filter((product) => {
      if (product !== id) {
        return product
      }
    })
    localStorage.setItem('favorite', JSON.stringify(dataFavorite.value))
  } else {
    dataFavorite.value = [...dataFavorite.value, id]
    localStorage.setItem('favorite', JSON.stringify(dataFavorite.value))
  }
}

const onAddProductsInBasket = (e) => {
  const id = Number(e.target.parentElement.id)
  if (dataProductsInBasket.value === null) {
    dataProductsInBasket.value = []
  }

  if (dataProductsInBasket.value.includes(id)) {
    dataProductsInBasket.value = dataProductsInBasket.value.filter((product) => {
      if (product !== id) {
        return product
      }
    })
    localStorage.setItem('productsInBasket', JSON.stringify(dataProductsInBasket.value))
  } else {
    dataProductsInBasket.value = [...dataProductsInBasket.value, id]
    localStorage.setItem('productsInBasket', JSON.stringify(dataProductsInBasket.value))
  }
}

const showOpenCard = (e) => {
  openCardFlag.value = !openCardFlag.value
  const id = Number(e.target.parentElement.id)
  openCard.value = props.items.find((product) => product.id === id)
}

const hiddenOpenCard = (e) => {
  openCardFlag.value = !openCardFlag.value
}
</script>

<template>
  <OpenProductCard
    v-if="openCardFlag"
    @closeCard="hiddenOpenCard"
    :id="openCard.id"
    :imageUrl="openCard.imageUrl"
    :title="openCard.title"
    :price="openCard.price"
    :isFavorite="dataFavorite.includes(openCard.id) ? true : false"
    :isAdded="dataProductsInBasket.includes(openCard.id) ? true : false"
    @favorite="onFavoriteProducts"
    @addInBasket="onAddProductsInBasket"
  />
  <div class="grid grid-cols-4 justify-between gap-11">
    <CardProduct
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="dataFavorite.includes(item.id) ? true : false"
      :isAdded="dataProductsInBasket.includes(item.id) ? true : false"
      @favorite="onFavoriteProducts"
      @addInBasket="onAddProductsInBasket"
      @showCard="showOpenCard"
    />
  </div>
</template>

<style scoped></style>
