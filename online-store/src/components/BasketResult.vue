<script setup lang="ts">
import { inject } from 'vue'

const totalPrice = inject<number>('totalPrice')
const calculateTaxTotalPrice = inject<number>('calculateTaxTotalPrice')
const TAXPRODUCT = inject<number>('TAXPRODUCT')
</script>

<template>
  <div class="/* Layout */ flex flex-col mt-5 mb-14">
    <div class="/* Layout */ flex gap-2">
      <span class="/* Typography */ text-[16px]">Итого:</span>
      <div class="/* Layout */ flex-1 /* Border */ border-b border-dashed border-[#DFDFDF]"></div>
      <b> {{ totalPrice }} ₽</b>
    </div>
    <div class="/* Layout */ flex gap-2">
      <span class="/* Typography */ text-[16px]">Налог {{ TAXPRODUCT }}%:</span>
      <div class="/* Layout */ flex-1 /* Border */ border-b border-dashed border-[#DFDFDF]"></div>
      <b>{{ calculateTaxTotalPrice }} ₽</b>
    </div>
    <button
      @click="placeAnOrder"
      class="/* Layout */ mt-7 max-w-full w-full inline-block rounded-3xl py-4 /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
    >
      Оформить заказ
    </button>
  </div>
</template>

<style scoped></style>
