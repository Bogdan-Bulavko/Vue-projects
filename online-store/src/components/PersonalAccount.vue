<script setup lang="ts">
// Pinia lib
import { storeToRefs } from 'pinia'

// Pinia store
import { useUserStore } from '@/stores/userStore'

const storeUser = useUserStore()
const { user, formUpdateName, formUpdateEmail } = storeToRefs(storeUser)
const { signOutUser, deleteProfile, updateAccount, sendlVerificationEmail } = storeUser
</script>

<template>
  <div class="/* Layout */ w-full p-6 space-y-6 min-[320px]:p-2">
    <h1 class="/* Typography */ text-2xl font-bold">Личный кабинет</h1>
    <div class="/* Layout */ space-y-4 md:w-[400px]">
      <h2 class="/* Typography */ text-xl font-semibold">Персональная информация</h2>
      <form class="/* Layout */ flex flex-col" @submit.prevent="updateAccount">
        <label class="/* Typography */ font-medium"
          >Имя: {{ storeUser.user !== null ? storeUser.user.displayName : '' }}</label
        >
        <input
          type="text"
          placeholder="Введите имя"
          class="/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */"
          v-model="formUpdateName"
        />
        <label class="/* Typography */ font-medium"
          >Почта: {{ storeUser.user !== null ? storeUser.user.email : '' }}

          <span v-if="user?.emailVerified" class="text-green-500 text-xs">Почта подтверждена</span>
          <span v-else class="text-red-500 text-xs cursor-pointer" @click="sendlVerificationEmail"
            >Почта не подтверждена</span
          >
        </label>
        <input
          type="email"
          placeholder="Введите почту"
          class="/* Layout */ px-4 py-2 mb-4 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */"
          v-model="formUpdateEmail"
        />
        <!-- <label class="/* Typography */ font-medium"
          >Телефон: {{ storeUser.user.phoneNumber }}</label
        > -->
        <!-- <input
          type="phone"
          placeholder="Введите номер телефона"
          class="/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */"
          v-model="storeUser.formDataUpdateProfile.phoneNumber"
          required
        /> -->
        <!-- <input
          type="text"
          placeholder="Введите имя"
          class="/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */"
          v-model="name"
          required
        /> -->
        <button
          type="submit"
          class="/* Layout */ w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"
        >
          Сохранить изменения
        </button>
      </form>
      <button
        @click="deleteProfile"
        class="/* Layout */ w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"
      >
        Удалить Профиль
      </button>
      <button
        @click="signOutUser"
        class="/* Layout */ w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"
      >
        Выйти
      </button>
    </div>
  </div>
</template>
