<script setup>
import { computed, onMounted } from 'vue'
import { store } from '@/store/store'

import Order from './Order.vue'

const listOrders = computed(() => store.state.listOrders)

const notEmptyListOrders = computed(() => store.state.notEmptyListOrders)

const openOrCloseAllProducts = () => {
  store.commit('openOrCloseAllProducts')
}

onMounted(() => {
  store.dispatch('getPlaceanOrders')
})
</script>

<template>
  <div class="w-full p-6" v-if="notEmptyListOrders === 'notEmpty'">
    <h2 class="mb-3.5 text-3xl font-medium">Все Заказы</h2>
    <div class="m-auto mb-3.5 w-[95%] flex justify-between">
      <span>Дата заказа</span> <span>Товары</span> <span>Цена</span>
    </div>
    <ul class="w-full">
      <Order v-for="order in listOrders" :key="order.id" :order="order" :id="order" />
    </ul>
  </div>
  <div
    class="h-full flex flex-col items-center justify-center"
    v-else-if="notEmptyListOrders === 'empty'"
  >
    <img class="inline w-[70px] mb-8" src="/public/emoji-1.png" />
    <h2 class="text-3xl font-semibold mb-3">Нет оформленных заказов :(</h2>
    <p class="text-gray-400 mb-15">Сделайте хотя-бы один заказ</p>
    <button
      id="bookmarks-button"
      @click="openOrCloseAllProducts"
      class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
    >
      Вернуться назад
    </button>
  </div>
</template>
