<script setup>
import store from '@/store/store'
import CardList from './CardList.vue'
const emit = defineEmits(['handleChangeSorting', 'handleSearchProduct'])

const changeSorting = (e) => {
  store.commit('sortProducts', e)
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
        >
          <option value="" disabled selected hidden>Отсортировать</option>
          <option id="name">По названию</option>
          <option id="cheap">По цене (дешевые)</option>
          <option id="dear">По цене (дорогие)</option>
        </select>

        <div class="flex border pl-5 border-gray-300 rounded-md focus:border-gray-500">
          <img class="" src="/search.svg" alt="search image" />
          <input
            class="py-2 pl-5 pr-4 outline-none"
            type="text"
            placeholder="Поиск..."
            @input="(e) => emit('handleSearchProduct', e)"
          />
        </div>
      </div>
    </div>
    <CardList />
  </section>
</template>

<style scoped></style>
