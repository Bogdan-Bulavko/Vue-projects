<script setup>
import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

defineProps({
  notEmptyBasket: Boolean,
  handleCloseBasket: Function,
})
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"
    @click="handleCloseBasket"
  ></div>
  <div class="fixed top-0 right-0 z-20 bg-white w-[385px] h-full p-9">
    <div v-if="notEmptyBasket" class="h-full flex flex-col items-center justify-center">
      <img class="inline w-[70px] mb-8" src="/public/package-icon.png" />
      <h2 class="text-3xl font-semibold mb-3">Корзина пустая</h2>
      <p class="text-gray-400 mb-19 text-center">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <button
        @click="handleCloseBasket"
        class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
      >
        Вернуться назад
      </button>
    </div>
    <template v-else>
      <h3 class="text-3xl font-bold mb-9">Корзина</h3>
      <div class="h-[100%] flex flex-col justify-between pb-9">
        <BusketCardList />
        <BusketResult />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
