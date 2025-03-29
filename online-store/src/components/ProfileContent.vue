<script setup>
import { ref } from 'vue'

import PersonalAccount from './PersonalAccount.vue'
import PersonalOrders from './PersonalOrders.vue'

const openContent = ref('personal-account')

const displayContent = (e) => {
  const target = e.currentTarget

  switch (target.id) {
    case 'personal-account':
      openContent.value = target.id
      break
    case 'personal-orders':
      openContent.value = target.id
      break
  }
}
</script>

<template>
  <div class="h-full pt-3.5 flex">
    <section class="pr-3.5 border-r border-slate-300">
      <ul>
        <li @click="displayContent" class="mb-3.5" id="personal-account">
          <p class="cursor-pointer text-gray-500 hover:text-black text-2xl">Профиль</p>
        </li>
        <li @click="displayContent" class="mb-3.5" id="personal-orders">
          <p class="cursor-pointer text-gray-500 hover:text-black text-2xl">Заказы</p>
        </li>
      </ul>
    </section>
    <section class="w-full">
      <PersonalAccount v-if="openContent === 'personal-account'" />
      <PersonalOrders v-if="openContent === 'personal-orders'" />
    </section>
  </div>
</template>
