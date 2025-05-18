<script setup lang="ts">
import BasketCardList from './BasketCardList.vue'
import BasketResult from './BasketResult.vue'

import type { Product } from 'src/types/product.types'

defineProps<{
  products: Product[]
  localBasket: number[]
  totalPrice: number
  calculateTaxTotalPrice: number
  TAXPRODUCT: number
  onBasketProducts: (product: Product) => void
  onActiveBlock: (e: Event) => void
}>()
</script>

<template>
  <div class="/* Layout */ fixed flex w-[100vw] h-[100vh]">
    <div
      data-id="basket"
      class="/* Layout */ h-full w-[80%] z-10 lg:w-[60%] md:w-[50%] min-[320px]:w-[0%] /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */"
      @click="onActiveBlock"
    ></div>
    <div
      class="/* Layout */ h-full p-9 w-[20%] z-20 lg:w-[40%] md:w-[50%] min-[320px]:w-[100%] /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"
    >
      <div
        v-if="localBasket.length === 0"
        class="/* Layout */ h-full flex flex-col items-center justify-center text-center"
      >
        <img class="/* Layout */ inline w-[70px] mb-8" src="/public/package-icon.png" />
        <h2 class="/* Typography */ text-3xl font-semibold mb-3">Корзина пустая</h2>
        <p class="/* Typography */ text-gray-400 mb-19 text-center">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button
          data-id="basket"
          @click="onActiveBlock"
          class="/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
        >
          Вернуться назад
        </button>
      </div>
      <template v-if="localBasket.length > 0">
        <div class="/* Layout */ flex items-start justify-between">
          <h3 class="/* Typography */ text-3xl font-bold mb-9">Корзина</h3>
          <img class="/* Layout */ w-8" src="/close.png" @click="onActiveBlock" data-id="basket" />
        </div>

        <div class="/* Layout */ h-full flex flex-col justify-between pb-9">
          <BasketCardList :products="products" :onBasketProducts="onBasketProducts" />
          <BasketResult
            :totalPrice="totalPrice"
            :calculateTaxTotalPrice="calculateTaxTotalPrice"
            :TAXPRODUCT="TAXPRODUCT"
          />
        </div>
      </template>
      <!-- <div
        v-if="notEmptyBasket === 'orderPlaced'"
        class="/* Layout */ h-full flex flex-col items-center justify-center"
      >
        <img class="/* Layout */ inline w-[70px] mb-8" src="/public/orderPlaced.svg" />
        <h2 class="/* Typography */ text-3xl font-semibold mb-3 text-[#87C20A]">Заказ оформлен!</h2>
        <p class="/* Typography */ text-gray-400 mb-19 text-center">
          Ваш заказ #18 скоро будет передан курьерской доставке
        </p>
        <button
          id="btnOrderPlaced"
          @click="openOrCloseBusket"
          class="/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
        >
          Вернуться назад
        </button>
      </div> -->
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
