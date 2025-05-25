<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '/src/store/activeBlockStore'
import { useProductStore } from '/src/store/productsStore'

const storeProducts = useProductStore()

const storeActiveBlock = useActiveBlockStore()
const { onActiveBlock, onActiveBlockAboveContent } = storeActiveBlock
</script>
<template>
  <header
    class="/* Layout */ min-[320px]:block md:flex justify-between border-b pb-6 /* Typography */ /* Border */ border-slate-300 /* Background */ /* Effects */"
  >
    <div
      data-id="allProducts"
      class="/* Layout */ flex items-center min-[320px]:justify-center min-[320px]:mb-6 cursor-pointer /* Typography */"
      @click="onActiveBlock"
    >
      <div class="mr-4">
        <img src="/logo.png" alt="Logo" class="w-[40px]" />
      </div>
      <div>
        <h2 class="/* Typography */ text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="/* Typography */ text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul
      class="/* Layout */ flex gap-2.5 min-[320px]:justify-center min-[320px]:items-start md:items-center /* Typography */"
    >
      <li
        data-id="basket"
        class="/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */"
        @click="onActiveBlockAboveContent"
      >
        <img src="/cart.svg" alt="Cart" />
        <b class="/* Typography */ text-gray-500 hover:text-black"
          >{{ storeProducts.calculateTaxTotalPrice }} руб.</b
        >
      </li>
      <li
        data-id="bookmarks"
        class="/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */"
        @click="onActiveBlock"
      >
        <img src="/heart.svg" alt="Heart" />
        <b class="/* Typography */ text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li
        class="/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */"
      >
        <img src="/profile.svg" alt="Profile" />
        <b
          v-if="user"
          @click="clickOpenProfile"
          class="/* Typography */ text-gray-500 hover:text-black"
        >
          Профиль
        </b>
        <b v-else class="/* Typography */ text-gray-500">
          <span
            class="/* Typography */ md:inline hover:text-black min-[320px]:text-center"
            @click="openOrCloseFormRegister"
            >Sign up</span
          >
          /
          <span
            class="/* Typography */ md:inline hover:text-black min-[320px]:text-center"
            @click="openOrCloseFormLogin"
            >Sign in</span
          >
        </b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
