<script setup>
import { store } from '@/store/store'
import { computed, onMounted } from 'vue'

const user = computed(() => store.state.user)

onMounted(() => {
  store.dispatch('getUserOnLogin')
})

const clickOpenProfile = () => {
  store.commit('openOrCloseProfile')
}

const openOrCloseFormRegister = () => {
  store.commit('openOrCloseFormRegister')
}

const openOrCloseFormLogin = () => {
  store.commit('openOrCloseFormLogin')
}
const totalPrice = computed(() => store.getters.priceCalculation)

const openOrCloseBusket = () => {
  store.commit('openOrCloseBusket')
}

const openOrCloseBookMarks = (e) => {
  store.commit('openOrCloseBookMarks', e)
}

const openOrCloseAllProducts = () => {
  store.commit('openOrCloseAllProducts')
}
</script>

<template>
  <header class="min-[320px]:block md:flex justify-between border-b border-slate-300 pb-6">
    <div
      id="logo"
      class="flex items-center min-[320px]:justify-center min-[320px]:mb-6 cursor-pointer"
      @click="openOrCloseAllProducts"
    >
      <div class="mr-4"><img src="/logo.png" alt="Logo" class="w-[40px]" /></div>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex gap-2.5 md:items-center min-[320px]:justify-center min-[320px]:items-start">
      <li
        class="flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row"
        @click="openOrCloseBusket"
      >
        <img src="/cart.svg" alt="Cart" />
        <b class="text-gray-500 hover:text-black">{{ totalPrice }} руб.</b>
      </li>
      <li
        id="bookmarks"
        class="flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row"
        @click="openOrCloseBookMarks"
      >
        <img src="/heart.svg" alt="Heart" />
        <b class="text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row">
        <img src="/profile.svg" alt="Profile" />
        <b v-if="user" @click="clickOpenProfile" class="text-gray-500 hover:text-black">Профиль</b>
        <b v-else class="text-gray-500"
          ><span
            class="md:inline hover:text-black min-[320px]:text-center"
            @click="openOrCloseFormRegister"
            >Sign up
          </span>
          /
          <span
            class="md:inline hover:text-black min-[320px]:text-center"
            @click="openOrCloseFormLogin"
            >Sign in</span
          ></b
        >
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
