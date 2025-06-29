<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '@/stores/activeBlockStore'
import { useProductStore } from '@/stores/productsStore'
import { useUserStore } from '@/stores/userStore'

const storeProducts = useProductStore()

const storeActiveBlock = useActiveBlockStore()
const { onActiveBlock, onActiveBlockAboveContent } = storeActiveBlock

const storeUser = useUserStore()
</script>
<template>
  <header
    class="/* Layout */ min-sm:flex min-sm:justify-between min-sm: border-b pb-4 /* Typography */ /* Border */ border-slate-300 /* Background */ /* Effects */"
  >
    <div
      data-id="allProducts"
      class="/* Layout */ flex items-center justify-center max-sm:mb-4 cursor-pointer /* Typography */"
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
    <ul class="/* Layout */ flex gap-5 justify-center items-center /* Typography */">
      <li
        data-id="basket"
        class="/* Layout */ flex items-center gap-2.5 cursor-pointer flex-col /* Typography */"
        @click="onActiveBlockAboveContent"
      >
        <img src="/cart.svg" alt="Cart" />
        <b class="/* Typography */ text-gray-500 hover:text-black"
          >{{ storeProducts.calculateTaxTotalPrice }} руб.</b
        >
      </li>
      <li
        data-id="bookmarks"
        class="/* Layout */ flex items-center gap-2.5 cursor-pointer flex-col /* Typography */"
        @click="onActiveBlock"
      >
        <img src="/heart.svg" alt="Heart" class="h-[20px]" />
        <b class="/* Typography */ text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="/* Layout */ flex items-center gap-2.5 cursor-pointer flex-col /* Typography */">
        <img src="/profile.svg" alt="Profile" />
        <b
          v-if="storeUser.user"
          @click="onActiveBlock"
          data-id="profile"
          class="/* Typography */ text-gray-500 hover:text-black"
        >
          Профиль
        </b>
        <b v-else class="/* Typography */ text-gray-500">
          <span
            class="/* Typography */ md:inline hover:text-black min-[320px]:text-center"
            @click="onActiveBlockAboveContent"
            data-id="formRegistration"
            >Sign up</span
          >
          /
          <span
            class="/* Typography */ md:inline hover:text-black min-[320px]:text-center"
            @click="onActiveBlockAboveContent"
            data-id="formLogin"
            >Sign in</span
          >
        </b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
