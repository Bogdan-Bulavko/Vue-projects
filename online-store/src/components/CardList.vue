<script setup>
// import { ref } from 'vue'

import CardProduct from './CardProduct.vue'

defineProps({
  items: Array,
  onFavoriteProducts: Function,
})

// const dataProductsInBasket = ref(JSON.parse(localStorage.getItem('productsInBasket')))

// if (dataProductsInBasket.value === null) {
//   dataProductsInBasket.value = []
// }

// const onAddProductsInBasket = (e) => {
//   const id = Number(e.target.parentElement.id)
//   if (dataProductsInBasket.value === null) {
//     dataProductsInBasket.value = []
//   }

//   if (dataProductsInBasket.value.includes(id)) {
//     dataProductsInBasket.value = dataProductsInBasket.value.filter((product) => {
//       if (product !== id) {
//         return product
//       }
//     })
//     localStorage.setItem('productsInBasket', JSON.stringify(dataProductsInBasket.value))
//   } else {
//     dataProductsInBasket.value = [...dataProductsInBasket.value, id]
//     localStorage.setItem('productsInBasket', JSON.stringify(dataProductsInBasket.value))
//   }
// }
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <CardProduct
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :onFavoriteProducts="onFavoriteProducts"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>

<!-- :isFavorite="dataFavorite.includes(item.id)"
:isAdded="dataProductsInBasket.includes(item.id)"
@favorite="onFavoriteProducts"
@addInBasket="onAddProductsInBasket" -->

<style></style>
