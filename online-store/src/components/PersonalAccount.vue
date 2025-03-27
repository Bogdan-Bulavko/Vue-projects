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

const logout = async () => {
  store.dispatch('logout')
}

const changeName = async () => {
  store.dispatch('changeName')
}
</script>

<template>
  <div class="w-full p-6 space-y-6">
    <h1 class="text-2xl font-bold">Личный кабинет</h1>

    <div class="w-[400px] space-y-4">
      <h2 class="text-xl font-semibold">Персональная информация</h2>
      <form class="flex flex-col" @submit.prevent="changeName">
        <label class="font-medium">Имя: {{ name }}</label>
        <input
          type="text"
          placeholder="Введите имя"
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          v-model="name"
          required
        />
        <button
          type="submit"
          class="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Изменить Имя
        </button>
      </form>
      <button
        @click="logout"
        class="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Выйти
      </button>
    </div>
  </div>
</template>
