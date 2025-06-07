<script setup lang="ts">
// Components
import PersonalAccount from './PersonalAccount.vue'
import PersonalOrders from './PersonalOrders.vue'

// Pinia  store
import { useUserStore } from '@/stores/userStore'
import { useActiveBlockStore } from '@/stores/activeBlockStore'

const storeActiveBlock = useActiveBlockStore()
</script>

<template>
  <div class="/* Layout */ h-full pt-3.5 flex">
    <section class="/* Layout */ pr-2 border-r /* Border */ border-slate-300">
      <ul>
        <li
          class="/* Layout */ mb-3.5"
          @click="storeActiveBlock.onActiveBlock"
          data-id="personalAccount"
        >
          <p class="/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer">
            Профиль
          </p>
        </li>
        <li
          class="/* Layout */ mb-3.5"
          @click="storeActiveBlock.onActiveBlock"
          data-id="personalOrders"
        >
          <p class="/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer">
            Заказы
          </p>
        </li>
      </ul>
    </section>
    <section class="/* Layout */ w-full">
      <PersonalAccount v-if="storeActiveBlock.activeBlockInProfile === 'personalAccount'" />
      <PersonalOrders v-if="storeActiveBlock.activeBlockInProfile === 'personalOrders'" />
    </section>
  </div>
</template>
