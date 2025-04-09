<script setup>
import { store } from '@/store/store'

import { computed } from 'vue'

import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

const notEmptyBasket = computed(() => store.state.notEmptyBasket)

const openOrCloseBusket = (e) => {
  store.commit('openOrCloseBusket', e.currentTarget.id)
}
</script>

<template>
  <div class="fixed flex w-[100vw] h-[100vh]">
    <div
      id="backgroundOrderPlaced"
      class="z-10 w-[80%] h-full bg-black opacity-50"
      @click="openOrCloseBusket"
    ></div>
    <div class="z-20 w-[20%] h-full p-9 bg-white">
      <div
        v-if="notEmptyBasket === 'empty'"
        class="h-full flex flex-col items-center justify-center"
      >
        <img class="inline w-[70px] mb-8" src="/public/package-icon.png" />
        <h2 class="text-3xl font-semibold mb-3">Корзина пустая</h2>
        <p class="text-gray-400 mb-19 text-center">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button
          @click="openOrCloseBusket"
          class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
        >
          Вернуться назад
        </button>
      </div>
      <template v-if="notEmptyBasket === 'notEmpty'">
        <h3 class="text-3xl font-bold mb-9">Корзина</h3>
        <div class="h-full flex flex-col justify-between pb-9">
          <BusketCardList />
          <BusketResult />
        </div>
      </template>
      <div
        v-if="notEmptyBasket === 'orderPlaced'"
        class="h-full flex flex-col items-center justify-center"
      >
        <img class="inline w-[70px] mb-8" src="/public/orderPlaced.svg" />
        <h2 class="text-3xl text-[#87C20A] font-semibold mb-3">Заказ оформлен!</h2>
        <p class="text-gray-400 mb-19 text-center">
          Ваш заказ #18 скоро будет передан курьерской доставке
        </p>
        <button
          id="btnOrderPlaced"
          @click="openOrCloseBusket"
          class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
        >
          Вернуться назад
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #a5d364;
}
</style>
