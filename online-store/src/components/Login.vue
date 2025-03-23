<script setup>
import { computed, ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/servis/firebase'
import { store, statusImg } from '@/store/store'

import Notification from './Notification.vue'

const openNotification = computed(() => store.state.openNotification)

const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
// const errorMessage = ref('')

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    store.commit('openOrCloseNotification', {
      text: 'Вы успешно авторизовались',
      img: statusImg.success,
    })

    setTimeout(() => {
      store.commit('openOrCloseFormLogin', false)
    }, 4000)

    isSubmitting.value = true
  } catch (error) {
    // errorMessage.value = 'Неверный email или пароль'
    store.commit('openOrCloseNotification', {
      text: 'Неверный email или пароль',
      img: statusImg.error,
    })
  } finally {
    setTimeout(() => {
      store.commit('openOrCloseNotification', {
        text: '',
        img: statusImg.empty,
      })
    }, 3000)

    email.value = ''
    password.value = ''
  }
}

const openOrCloseFormLogin = () => {
  store.commit('openOrCloseFormLogin', false)
}
</script>

<template>
  <section>
    <div
      class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50"
      @click="openOrCloseFormLogin"
    ></div>
    <Transition name="notification"> <Notification v-if="openNotification" /></Transition>
    <div
      class="w-[300px] bg-white p-2.5 rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Вход</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Введите ваш email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Введите пароль"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          class="m-auto block w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
          type="submit"
          :disabled="isSubmitting"
        >
          Войти
        </button>
      </form>
      <!-- <p v-if="errorMessage" class="error">{{ errorMessage }}</p> -->
    </div>
  </section>
</template>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transform: translateY(0);
  position: fixed;
  transition: 1s;
}

.notification-enter-from,
.notification-leave-to {
  transform: translateY(-70px);
  position: fixed;
  transition: 1s;
}
</style>
