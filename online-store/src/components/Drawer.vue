<script setup>
import { onMounted, ref } from 'vue'

import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'
import axios from 'axios'

const dataIndexProductsInBasket = ref(JSON.parse(localStorage.getItem('productsInBasket')))
const dataProducts = ref([])
const totalResult = ref(0)
const taxPercentage = 5

if (dataIndexProductsInBasket.value === null) {
  dataIndexProductsInBasket.value = []
} else {
  dataIndexProductsInBasket.value = JSON.parse(localStorage.getItem('productsInBasket'))
}

const getProductForBasket = async (id) => {
  const { data } = await axios.get(`https://34643c0fb49ad60b.mokky.dev/items/${id}`)
  return data
}

onMounted(async () => {
  try {
    const data = await Promise.all(
      dataIndexProductsInBasket.value.map(async (index) => {
        return await getProductForBasket(index)
      }),
    )
    dataProducts.value = data
    totalResult.value = dataProducts.value.reduce((acc, item) => acc + item.price, 0)
  } catch (err) {
    console.log(err)
  }
})
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
      <BusketResult :result="totalResult" :tax="taxPercentage" />
    </div>
  </div>
</template>

<style scoped></style>
