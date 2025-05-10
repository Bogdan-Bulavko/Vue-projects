<script setup>
import CardList from './CardList.vue'
</script>

<template>
  <section>
    <div
      class="/* Layout */ flex gap-4 mb-11 p-2 md:justify-between md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"
    >
      <h2 class="/* Typography */ text-4xl font-bold /* Layout */ md:mb-0 min-[320px]:mb-3">
        Все кроссовки
      </h2>
      <div
        class="/* Layout */ flex gap-4 md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"
      >
        <select
          class="/* Layout */ py-2 px-3 rounded-md /* Border */ border border-gray-300 /* Typography */ outline-none /* Effects */"
          @change="changeSorting"
        >
          <option value="" disabled selected hidden>Отсортировать</option>
          <option id="name">По названию</option>
          <option id="cheap">По цене (дешевые)</option>
          <option id="dear">По цене (дорогие)</option>
        </select>

        <div
          class="/* Layout */ flex rounded-md pl-5 /* Border */ border border-gray-300 focus:border-gray-500 /* Background */ /* Effects */"
        >
          <img src="/search.svg" alt="search image" />
          <input
            class="/* Layout */ py-2 pl-5 pr-4 /* Border */ /* Typography */ outline-none /* Effects */"
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
