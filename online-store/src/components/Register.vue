<script setup>
import { computed } from 'vue'
import { store } from '@/store/store'

const name = computed({
  get() {
    return store.state.name // Получаем значение из Vuex
  },
  set(value) {
    store.commit('updateName', value) // Обновляем через мутацию
  },
})

const password = computed({
  get() {
    return store.state.password
  },
  set(value) {
    store.commit('updatePassword', value)
  },
})

const email = computed({
  get() {
    return store.state.email
  },
  set(value) {
    store.commit('updateEmail', value)
  },
})

const isSubmitting = computed(() => store.state.isSubmitting)

const openOrCloseFormRegister = () => {
  store.commit('openOrCloseFormRegister', false)
}

const handleRegister = async () => {
  store.dispatch('handleRegister')
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
          <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Введите ваше Имя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
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
      </form>
    </div>
  </section>
</template>

<style scoped></style>
