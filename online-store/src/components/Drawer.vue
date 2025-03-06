<script setup>
import BusketCardList from './BusketCardList.vue'
import BusketResult from './BusketResult.vue'

defineProps({
  notEmptyBasket: Boolean,
})

const emit = defineEmits(['handleCloseBasket'])
</script>

<template>
  <div class="fixed flex w-[100vw] h-[100vh]">
    <div class="z-10 w-[80%] h-full bg-black opacity-50" @click="emit('handleCloseBasket')"></div>
    <div class="z-20 w-[20%] h-full p-9 bg-white">
      <div v-if="notEmptyBasket" class="h-full flex flex-col items-center justify-center">
        <img class="inline w-[70px] mb-8" src="/public/package-icon.png" />
        <h2 class="text-3xl font-semibold mb-3">Корзина пустая</h2>
        <p class="text-gray-400 mb-19 text-center">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button
          @click="emit('handleCloseBasket')"
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
