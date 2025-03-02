<script setup>
import { provide } from 'vue'

import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

defineProps({
  products: Object,
  taxСalculation: Number,
  taxPercentage: Number,
  totalPtice: Number,
})

const deleteCard = (e) => {
  // const id = Number(e.target.parentElement.id)
  // dataProducts.value = dataProducts.value.filter((product) => {
  //   if (product.id === id) {
  //     totalPrice.value = totalPrice.value - product.price
  //     localStorage.setItem('totalPrice', totalPrice.value)
  //   }
  //   dataIndexProductsInBasket.value = dataIndexProductsInBasket.value.filter((index) => {
  //     if (dataIndexProductsInBasket.value.length === 1) {
  //       return
  //     }
  //     return index !== id
  //   })
  //   localStorage.setItem('productsInBasket', JSON.stringify(dataIndexProductsInBasket.value))
  //   return product.id !== id
  // })
}

provide('eventHandler', deleteCard)
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"
    @click="$emit('closeBasket')"
  ></div>
  <div class="fixed top-0 right-0 z-20 bg-white w-[385px] h-full p-9">
    <h3 class="text-3xl font-bold mb-9">Корзина</h3>
    <div class="h-[100%] flex flex-col justify-between pb-9">
      <BusketCardList :products="products" />
      <BusketResult :result="totalPtice" :tax="taxСalculation" :taxPercentage="taxPercentage" />
    </div>
  </div>
</template>

<style scoped></style>
