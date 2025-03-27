<script setup>
import { store, TAXPRODUCT } from '@/store/store'

import { computed } from 'vue'

const totalPrice = computed(() => store.state.totalPrice)
const tax = computed(() => store.getters.taxCalculation)

const placeAnOrder = () => {
  store.dispatch('placeAnOrder')
}
</script>

<template>
  <div class="flex flex-col mt-5 mb-14">
    <div class="flex gap-2">
      <span class="text-[16px]">Итого:</span>
      <div class="flex-1 border-b border-dashed border-[#DFDFDF]"></div>
      <b>{{ totalPrice }} ₽</b>
    </div>
    <div class="flex gap-2">
      <span class="text-[16px]">Налог {{ TAXPRODUCT }}%:</span>
      <div class="flex-1 border-b border-dashed border-[#DFDFDF]"></div>
      <b>{{ tax }} ₽</b>
    </div>
    <button
      @click="placeAnOrder"
      class="mt-7 max-w-full w-full inline-block rounded-3xl py-4 bg-[#A5D364] text-white"
    >
      Оформить заказ
    </button>
  </div>
</template>

<style scoped></style>
