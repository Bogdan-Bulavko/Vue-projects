<script setup>
import { inject } from 'vue'

const taxPercentage = inject('taxPercentage')
const priceCalculation = inject('priceCalculation')
const taxСalculation = inject('taxСalculation')
</script>

<template>
  <div class="flex flex-col mt-5 mb-14">
    <div class="flex gap-2">
      <span class="text-[16px]">Итого:</span>
      <div class="flex-1 border-b border-dashed border-[#DFDFDF]"></div>
      <b>{{ priceCalculation }} ₽</b>
    </div>
    <div class="flex gap-2">
      <span class="text-[16px]">Налог {{ taxPercentage }}%:</span>
      <div class="flex-1 border-b border-dashed border-[#DFDFDF]"></div>
      <b>{{ taxСalculation }} ₽</b>
    </div>
    <button class="mt-7 max-w-full w-full inline-block rounded-3xl py-4 bg-[#A5D364] text-white">
      Оформить заказ
    </button>
  </div>
</template>

<style scoped></style>
