<script setup>
import { store } from '@/store/store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { computed, onMounted, ref } from 'vue'

const user = ref(null)
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // Пользователь вошел в систему
      user.value = currentUser
    } else {
      // Пользователь вышел из системы
      user.value = null
    }
  })
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
  <header class="flex justify-between border-b border-slate-300 pb-12">
    <div id="logo" class="flex items-center cursor-pointer" @click="openOrCloseAllProducts">
      <div class="mr-4"><img src="/logo.png" alt="Logo" class="w-[40px]" /></div>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-2.5">
      <li class="flex items-center gap-2.5 cursor-pointer" @click="openOrCloseBusket">
        <img src="/cart.svg" alt="Cart" />
        <b class="text-gray-500 hover:text-black">{{ totalPrice }} руб.</b>
      </li>
      <li
        id="bookmarks"
        class="flex items-center gap-2.5 cursor-pointer"
        @click="openOrCloseBookMarks"
      >
        <img src="/heart.svg" alt="Heart" />
        <b class="text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="flex items-center gap-2.5 cursor-pointer">
        <img src="/profile.svg" alt="Profile" />
        <b v-if="user" @click="clickOpenProfile" class="text-gray-500 hover:text-black">Профиль</b>
        <b v-else class="text-gray-500"
          ><span class="hover:text-black" @click="openOrCloseFormRegister">Зарегистрироваться</span>
          / <span class="hover:text-black" @click="openOrCloseFormLogin">Войти</span></b
        >
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
