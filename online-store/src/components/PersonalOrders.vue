<script setup>
import Order from './Order.vue'
</script>

<template>
  <div
    class="/* Layout */ w-full p-6 min-[320px]:p-1.5 /* Typography */ /* Border */ /* Background */ /* Effects */"
    v-if="notEmptyListOrders === 'notEmpty'"
  >
    <h2 class="/* Typography */ text-3xl font-medium mb-3.5">Все Заказы</h2>
    <div
      class="/* Layout */ m-auto mb-3.5 w-[95%] flex justify-between /* Typography */ /* Border */ /* Background */ /* Effects */"
    >
      <span>Дата заказа</span>
      <span>Товары</span>
      <span>Цена</span>
    </div>
    <ul class="/* Layout */ w-full /* Typography */ /* Border */ /* Background */ /* Effects */">
      <Order v-for="order in listOrders" :key="order.id" :order="order" :id="order" />
    </ul>
  </div>
  <div
    class="/* Layout */ h-full flex flex-col items-center justify-center text-center /* Typography */ /* Border */ /* Background */ /* Effects */"
    v-else-if="notEmptyListOrders === 'empty'"
  >
    <img class="/* Layout */ inline w-[70px] mb-8" src="/public/emoji-1.png" />
    <h2 class="/* Typography */ text-3xl font-semibold mb-3">Нет оформленных заказов :(</h2>
    <p class="/* Typography */ text-gray-400 mb-15">Сделайте хотя-бы один заказ</p>
    <button
      id="bookmarks-button"
      @click="openOrCloseAllProducts"
      class="/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
    >
      Вернуться назад
    </button>
  </div>
</template>
