<script setup>
import PersonalAccount from './PersonalAccount.vue'
import PersonalOrders from './PersonalOrders.vue'
</script>

<template>
  <div
    class="/* Layout */ h-full pt-3.5 flex /* Typography */ /* Border */ /* Background */ /* Effects */"
  >
    <section
      class="/* Layout */ pr-2 border-r /* Typography */ /* Border */ border-slate-300 /* Background */ /* Effects */"
    >
      <ul>
        <li
          class="/* Layout */ mb-3.5 /* Typography */ /* Border */ /* Background */ /* Effects */"
          @click="displayContent"
          id="personal-account"
        >
          <p class="/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer">
            Профиль
          </p>
        </li>
        <li
          class="/* Layout */ mb-3.5 /* Typography */ /* Border */ /* Background */ /* Effects */"
          @click="displayContent"
          id="personal-orders"
        >
          <p class="/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer">
            Заказы
          </p>
        </li>
      </ul>
    </section>
    <section
      class="/* Layout */ w-full /* Typography */ /* Border */ /* Background */ /* Effects */"
    >
      <PersonalAccount v-if="openContent === 'personal-account'" />
      <PersonalOrders v-if="openContent === 'personal-orders'" />
    </section>
  </div>
</template>
