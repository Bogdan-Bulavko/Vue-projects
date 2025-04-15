<script setup>
import { store } from '@/store/store'
import CardList from './CardList.vue'

const changeSorting = (e) => {
  store.commit('sortProducts', e)
}

const searchProduct = (e) => {
  store.commit('searchProduct', e)
}
</script>

<template>
  <section>
    <div class="flex p-2 md:justify-between md:flex-row mb-11 min-[320px]:flex-col">
      <h2 class="text-4xl font-bold md:mb-0 min-[320px]:mb-3">Все кроссовки</h2>
      <div class="flex md:flex-row gap-4 min-[320px]:flex-col">
        <select
          class="py-2 px-3 border border-gray-300 rounded-md outline-none"
          @change="changeSorting"
        >
          <option value="" disabled selected hidden>Отсортировать</option>
          <option id="name">По названию</option>
          <option id="cheap">По цене (дешевые)</option>
          <option id="dear">По цене (дорогие)</option>
        </select>

        <div class="flex border pl-5 border-gray-300 rounded-md focus:border-gray-500">
          <img src="/search.svg" alt="search image" />
          <input
            class="py-2 pl-5 pr-4 outline-none"
            type="text"
            placeholder="Поиск..."
            @input="searchProduct"
          />
        </div>
      </div>
    </div>
    <CardList />
  </section>
</template>

<style scoped></style>
