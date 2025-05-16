<script setup lang="ts">
import type { Product } from 'src/types/product.types'
defineProps<{
  id: number
  imageUrl: string
  title: string
  price: number
  isFavorite: boolean
  isAdded: boolean
  onFavoriteProducts: (product: Product) => void
  onBasketProducts: (product: Product) => void
}>()
</script>

<template>
  <li>
    <article
      class="/* Layout */ min-h-[276px] rounded-3xl border hover:-translate-y-2 transition min-[320px]:p-2 min-[450px]:w-[210px] min-[320px]:w-[168px] /* Typography */ /* Border */ border-gray-100 /* Background */ /* Effects */ hover:shadow-xl"
      :id="String(id)"
      @click="onOpenCard"
    >
      <img
        class="/* Layout */ z-10"
        :src="isFavorite ? 'like-2.svg' : 'like-1.svg'"
        alt="button like"
        @click="onFavoriteProducts"
      />
      <img
        class="/* Layout */ block w-[133px] h-[112px] mb-4"
        :src="`${imageUrl}`"
        alt="image sneakers"
      />
      <p class="/* Typography */ leading-[17px] mb-4">{{ title }}</p>
      <div class="/* Layout */ flex justify-between">
        <div>
          <p class="/* Typography */ text-[0.8rem] text-[#BDBDBD]">ЦЕНА:</p>
          <p class="/* Typography */ font-bold">{{ price }}руб.</p>
        </div>
        <img
          class="/* Layout */ block"
          :src="isAdded ? 'checked.svg' : 'plus.svg'"
          alt="Add Product"
          @click.stop="onBasketProducts"
        />
      </div>
    </article>
  </li>
</template>

<style></style>
