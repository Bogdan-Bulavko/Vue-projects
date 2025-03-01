<script setup>
import { onMounted, ref, computed, provide } from 'vue'

import getProduct from '@/servis/getData'

import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

const dataIndexProductsInBasket = ref(JSON.parse(localStorage.getItem('productsInBasket')))
const dataProducts = ref([])
const totalPrice = ref(0)
const taxPercentage = 5

if (dataIndexProductsInBasket.value === null) {
  dataIndexProductsInBasket.value = []
} else {
  dataIndexProductsInBasket.value = JSON.parse(localStorage.getItem('productsInBasket'))
}

onMounted(async () => {
  try {
    const data = await Promise.all(
      dataIndexProductsInBasket.value.map(async (index) => {
        return await getProduct(index)
      }),
    )
    dataProducts.value = data
    totalPrice.value = dataProducts.value.reduce((acc, item) => acc + item.price, 0)
    localStorage.setItem('totalPrice', totalPrice.value)
  } catch (err) {
    console.log(err)
  }
})

const taxСalculation = computed(() => {
  return Math.floor((totalPrice.value / 100) * taxPercentage)
})

const deleteCard = (e) => {
  const id = Number(e.target.parentElement.id)
  dataProducts.value = dataProducts.value.filter((product) => {
    if (product.id === id) {
      totalPrice.value = totalPrice.value - product.price
      localStorage.setItem('totalPrice', totalPrice.value)
    }

    dataIndexProductsInBasket.value = dataIndexProductsInBasket.value.filter((index) => {
      if (dataIndexProductsInBasket.value.length === 1) {
        return
      }
      return index !== id
    })

    localStorage.setItem('productsInBasket', JSON.stringify(dataIndexProductsInBasket.value))
    return product.id !== id
  })
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
      <BusketCardList :products="dataProducts" />
      <BusketResult :result="totalPrice" :tax="taxСalculation" :taxPercentage="taxPercentage" />
    </div>
  </div>
</template>

<style scoped></style>
