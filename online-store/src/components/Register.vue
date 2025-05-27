<script setup lang="ts">
// Pinia store
import { useActiveBlockStore } from '/src/store/activeBlockStore'
import { useUserStore } from '/src/store/userStore'

const storeActiveBlock = useActiveBlockStore()
const storeUser = useUserStore()

const { registerUser } = storeUser

const { onActiveBlockAboveContent } = storeActiveBlock
</script>

<template>
  <section>
    <div
      class="/* Layout */ fixed top-0 left-0 z-10 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */"
      data-id="formRegistration"
      @click="onActiveBlockAboveContent"
    ></div>

    <div
      class="/* Layout */ w-[300px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-2.5 rounded-3xl /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"
    >
      <h2 class="/* Typography */ text-2xl font-bold text-center text-gray-800 mb-6">
        Регистрация
      </h2>
      <form @submit.prevent="registerUser" class="/* Layout */ space-y-4">
        <!-- <div>
          <label for="name" class="/* Typography */ block text-sm font-medium text-gray-700"
            >Имя</label
          >
          <input
            id="name"
            v-model="storeUser.formData.name"
            type="text"
            placeholder="Введите ваше Имя"
            class="/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"
            required
          />
        </div> -->
        <div>
          <label for="email" class="/* Typography */ block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="storeUser.formData.email"
            type="email"
            placeholder="Введите ваш email"
            class="/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label for="password" class="/* Typography */ block text-sm font-medium text-gray-700"
            >Пароль</label
          >
          <input
            id="password"
            v-model="storeUser.formData.password"
            type="password"
            placeholder="Введите пароль"
            class="/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          class="/* Layout */ m-auto block w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
