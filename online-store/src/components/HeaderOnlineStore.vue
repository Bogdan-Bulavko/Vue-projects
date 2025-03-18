<script setup>
import { store } from '@/store/store'

import { computed } from 'vue'

const totalPrice = computed(() => store.getters.priceCalculation)

const openOrCloseBusket = () => {
  store.commit('openOrCloseBusket')
}

const openOrCloseBookMarks = (e) => {
  store.commit('openOrCloseBookMarks', e)
}
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 pb-12">
    <div id="logo" class="flex items-center cursor-pointer" @click="openOrCloseBookMarks">
      <div class="mr-4"><img src="/logo.png" alt="Logo" class="w-[40px]" /></div>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-2.5">
      <li class="flex items-center gap-2.5 cursor-pointer" @click="openOrCloseBusket">
        <img src="/cart.svg" alt="Cart" />
        <b class="text-gray-500 hover:text-black">{{ totalPrice }} руб.</b>
      </li>
      <li
        id="bookmarks"
        class="flex items-center gap-2.5 cursor-pointer"
        @click="openOrCloseBookMarks"
      >
        <img src="/heart.svg" alt="Heart" />
        <b class="text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="flex items-center gap-2.5 cursor-pointer">
        <img src="/profile.svg" alt="Profile" />
        <b class="text-gray-500 hover:text-black">Зарегистрироваться</b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
