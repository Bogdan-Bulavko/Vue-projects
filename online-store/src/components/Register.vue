<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/servis/firebase'
import { store } from '@/store/store'

const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

const openOrCloseFormRegister = () => {
  store.commit('openOrCloseFormRegister')
}

const handleRegister = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    store.commit('openOrCloseFormRegister')
  } catch (error) {
    errorMessage.value = error.message || 'Ошибка регистрации'
    console.log(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section>
    <div
      class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50"
      @click="openOrCloseFormRegister"
    ></div>
    <div
      class="w-[300px] bg-white p-2.5 rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Регистрация</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
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
        <div>
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
          type="submit"
          :disabled="isSubmitting"
          class="m-auto block w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
        >
          Зарегистрироваться
        </button>
        <p v-if="errorMessage" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
      </form>
    </div>
  </section>
</template>
