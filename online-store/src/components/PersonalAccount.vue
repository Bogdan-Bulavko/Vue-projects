<script setup></script>

<template>
  <div class="/* Layout */ w-full p-6 space-y-6 min-[320px]:p-2">
    <h1 class="/* Typography */ text-2xl font-bold">Личный кабинет</h1>

    <div class="/* Layout */ space-y-4 md:w-[400px]">
      <h2 class="/* Typography */ text-xl font-semibold">Персональная информация</h2>
      <form class="/* Layout */ flex flex-col" @submit.prevent="changeName">
        <label class="/* Typography */ font-medium">Имя: {{ name }}</label>
        <input
          type="text"
          placeholder="Введите имя"
          class="/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */"
          v-model="name"
          required
        />
        <button
          type="submit"
          class="/* Layout */ mt-4 w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"
        >
          Изменить Имя
        </button>
      </form>
      <button
        @click="logout"
        class="/* Layout */ mt-4 w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"
      >
        Выйти
      </button>
    </div>
  </div>
</template>
