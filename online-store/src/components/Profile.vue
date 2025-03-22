<script setup>
import { ref } from 'vue'
import { signOut } from 'firebase/auth'
import { auth } from '@/servis/firebase'
import { store } from '@/store/store'

const user = ref(auth.currentUser)

const logout = async () => {
  await signOut(auth)
  store.commit('openOrCloseAllProducts')
  store.commit('openOrCloseNotification', 'Вы вышли из аккаунта')
  setTimeout(() => {
    store.commit('openOrCloseNotification')
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Личный кабинет</h2>
      <p>Email: {{ user.email }}</p>
      <button
        @click="logout"
        class="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Выйти
      </button>
    </div>
  </div>
</template>
