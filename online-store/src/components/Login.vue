<script setup></script>

<template>
  <section>
    <div
      class="/* Layout */ fixed top-0 left-0 z-10 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */"
      @click="openOrCloseFormLogin"
    ></div>
    <div
      class="/* Layout */ w-[300px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-2.5 rounded-3xl /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"
    >
      <h2 class="/* Typography */ text-2xl font-bold text-center text-gray-800 mb-6">Вход</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="/* Typography */ block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Введите ваш email"
            class="/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="/* Typography */ block text-sm font-medium text-gray-700"
            >Пароль</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Введите пароль"
            class="/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"
            required
          />
        </div>
        <button
          class="/* Layout */ m-auto block w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"
          type="submit"
          :disabled="isSubmitting"
        >
          Войти
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
