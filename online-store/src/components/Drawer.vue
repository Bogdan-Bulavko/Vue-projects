<script setup>
import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

defineProps({
  products: Object,
  taxСalculation: Number,
  taxPercentage: Number,
  totalPtice: Number,
  onDeleteCard: Function,
})

const emit = defineEmits(['closeBasket'])
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"
    @click="emit('closeBasket')"
  ></div>
  <div class="fixed top-0 right-0 z-20 bg-white w-[385px] h-full p-9">
    <input type="text" class="border" />
    <h3 class="text-3xl font-bold mb-9">Корзина</h3>
    <div class="h-[100%] flex flex-col justify-between pb-9">
      <BusketCardList :products="products" :deleteCard="onDeleteCard" />
      <BusketResult :result="totalPtice" :tax="taxСalculation" :taxPercentage="taxPercentage" />
    </div>
  </div>
</template>

<style scoped></style>
