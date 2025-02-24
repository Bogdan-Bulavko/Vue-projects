<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import CardList from './CardList.vue'

const products = ref([])

const serchedProducts = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')
    products.value = data
    serchedProducts.value = data
  } catch (err) {
    console.log(err)
  }
})

const changeSorting = (e) => {
  switch (e.target.options[e.target.selectedIndex].id) {
    case 'name':
      serchedProducts.value = serchedProducts.value.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      break
    case 'cheap':
      serchedProducts.value = serchedProducts.value.sort((a, b) => {
        return a.price - b.price
      })
      break
    case 'dear':
      serchedProducts.value = serchedProducts.value.sort((a, b) => {
        return b.price - a.price
      })
      break
    default:
      serchedProducts.value = products.value
  }
}

const searchProduct = (e) => {
  if (e.target.value === '') {
    serchedProducts.value = products.value
  }

  serchedProducts.value = products.value.filter((product) => {
    const regex = new RegExp(e.target.value, 'i')
    if (regex.test(product.title)) {
      return product
    }
  })
}
</script>

<template>
  <section>
    <div class="flex justify-between mb-11">
      <h2 class="text-4xl font-bold">Все кроссовки</h2>
      <div class="flex gap-4">
        <select
          class="py-2 px-3 border border-gray-300 rounded-md outline-none"
          @change="changeSorting"
          value=""
        >
          <option value="" disabled selected hidden>Отсортировать</option>
          <option id="name">По названию</option>
          <option id="cheap">По цене (дешевые)</option>
          <option id="dear">По цене (дорогие)</option>
        </select>

        <div class="relative">
          <img class="absolute left-4 top-3" src="/search.svg" alt="search image" />
          <input
            class="border border-gray-300 rounded-md py-2 pl-12 pr-4 outline-none focus:border-gray-400"
            type="text"
            placeholder="Поиск..."
            @input="searchProduct"
          />
        </div>
      </div>
    </div>
    <CardList :items="serchedProducts" />
  </section>
</template>

<style scoped></style>
