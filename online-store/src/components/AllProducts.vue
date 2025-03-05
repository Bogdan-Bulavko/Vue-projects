<script setup>
import CardList from './CardList.vue'
const emit = defineEmits(['handleChangeSorting', 'handleSearchProduct'])
</script>

<template>
  <section>
    <div class="flex justify-between mb-11">
      <h2 class="text-4xl font-bold">Все кроссовки</h2>
      <div class="flex gap-4">
        <select
          class="py-2 px-3 border border-gray-300 rounded-md outline-none"
          @change="(e) => emit('handleChangeSorting', e)"
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
            @input="(e) => emit('handleSearchProduct', e)"
          />
        </div>
      </div>
    </div>
    <CardList />
  </section>
</template>

<style scoped></style>
