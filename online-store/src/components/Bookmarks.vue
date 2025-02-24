<script setup>
import { onMounted, ref } from 'vue'
import CardList from './CardList.vue'
import axios from 'axios'

const dataIndexProductsInFavorite = ref(JSON.parse(localStorage.getItem('favorite')))
const dataProducts = ref([])

if (dataIndexProductsInFavorite.value === null) {
  dataIndexProductsInFavorite.value = []
} else {
  dataIndexProductsInFavorite.value = JSON.parse(localStorage.getItem('favorite'))
}

const getProductForBasket = async (id) => {
  const { data } = await axios.get(`https://34643c0fb49ad60b.mokky.dev/items/${id}`)
  return data
}

onMounted(async () => {
  try {
    const data = await Promise.all(
      dataIndexProductsInFavorite.value.map(async (index) => {
        return await getProductForBasket(index)
      }),
    )
    dataProducts.value = data
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <section class="mt-5">
    <h2 class="mb-5 text-4xl font-bold">Закладки</h2>
    <CardList :items="dataProducts" />
  </section>
</template>

<style scoped></style>
