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
  <header class="min-[375px]:block md:flex justify-between border-b border-slate-300 pb-6">
    <div
      id="logo"
      class="flex items-center min-[375px]:justify-center min-[375px]:mb-6 cursor-pointer"
      @click="openOrCloseAllProducts"
    >
      <div class="mr-4"><img src="/logo.png" alt="Logo" class="w-[40px]" /></div>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex md:items-center min-[375px]:justify-center min-[375px]:items-start gap-2.5">
      <li
        class="flex items-center min-[375px]:flex-col md:flex-row gap-2.5 cursor-pointer"
        @click="openOrCloseBusket"
      >
        <img src="/cart.svg" alt="Cart" />
        <b class="text-gray-500 hover:text-black">{{ totalPrice }} руб.</b>
      </li>
      <li
        id="bookmarks"
        class="flex items-center min-[375px]:flex-col md:flex-row gap-2.5 cursor-pointer"
        @click="openOrCloseBookMarks"
      >
        <img src="/heart.svg" alt="Heart" />
        <b class="text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="flex items-center min-[375px]:flex-col md:flex-row gap-2.5 cursor-pointer">
        <img src="/profile.svg" alt="Profile" />
        <b v-if="user" @click="clickOpenProfile" class="text-gray-500 hover:text-black">Профиль</b>
        <b v-else class="text-gray-500"
          ><span
            class="md:inline min-[375px]:text-center hover:text-black"
            @click="openOrCloseFormRegister"
            >Sign up
          </span>
          /
          <span
            class="md:inline min-[375px]:text-center hover:text-black"
            @click="openOrCloseFormLogin"
            >Sign in</span
          ></b
        >
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
