<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '@/stores/activeBlockStore'

defineProps<{
  id: number
  imageUrl: string
  title: string
  price: number
  isFavorite: boolean
  isAdded: boolean
  onFavoriteProducts: () => void
  onBasketProducts: () => void
}>()

const storeActiveBlock = useActiveBlockStore()
const { onActiveBlockAboveContent } = storeActiveBlock
</script>

<template>
  <section>
    <div
      class="/* Layout */ fixed top-0 left-0 z-20 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */"
      data-id="cardProduct"
      @click="onActiveBlockAboveContent"
    ></div>
    <div
      class="/* Layout */ fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <article
        class="/* Layout */ relative w-[350px] rounded-3xl border hover:shadow-xl transition z-10 /* Typography */ /* Border */ border-gray-100 /* Background */ bg-white /* Effects */ pb-9 px-9 pt-6"
        :id="String(id)"
      >
        <img
          class="/* Layout */ absolute left-9 block w-14"
          :src="isFavorite ? 'like-2.svg' : 'like-1.svg'"
          alt="button like"
          @click="onFavoriteProducts"
        />
        <img
          class="/* Layout */ block w-full h-[224px] mb-4"
          :src="imageUrl"
          alt="image sneakers"
        />
        <p class="/* Typography */ text-2xl mb-4">{{ title }}</p>

        <div>
          <p class="/* Typography */ text-base text-[#BDBDBD]">ЦЕНА:</p>
          <p class="/* Typography */ text-base font-bold">{{ price }}руб.</p>
        </div>
        <img
          class="/* Layout */ absolute bottom-9 right-9 block"
          :src="isAdded ? 'checked.svg' : 'plus.svg'"
          alt="Added Product"
          @click="onBasketProducts"
        />
      </article>
    </div>
  </section>
</template>

<style></style>
