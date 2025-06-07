<script setup lang="ts">
//  Components
import CardList from './CardList.vue'

// Pinia store
import { useActiveBlockStore } from '@/stores/activeBlockStore'
import { useProductStore } from '@/stores/productsStore'

const storeActiveBlock = useActiveBlockStore()
const { onActiveBlock } = storeActiveBlock

const storeProduct = useProductStore()
</script>

<template>
  <section class="/* Layout */ mt-5 h-full" id="bookmarks">
    <div
      v-if="storeProduct.localFavorite.length === 0"
      class="/* Layout */ h-full flex flex-col items-center justify-center text-center"
    >
      <img class="/* Layout */ inline w-[70px] mb-8" src="/public/emoji-1.png" />
      <h2 class="/* Typography */ text-3xl font-semibold mb-3">Закладок нет :(</h2>
      <p class="/* Typography */ text-gray-400 mb-19">Вы ничего не добавляли в закладки</p>
      <button
        data-id="allProducts"
        @click="onActiveBlock"
        class="/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
      >
        Вернуться назад
      </button>
    </div>
    <template v-else>
      <h2 class="/* Typography */ text-4xl font-bold /* Layout */ md:mb-0 min-[375px]:mb-5">
        Закладки
      </h2>
      <CardList />
    </template>
  </section>
</template>

<style scoped></style>
