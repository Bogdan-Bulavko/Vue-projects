<script setup></script>

<template>
  <li
    class="/* Layout */ flex justify-between items-center mb-5 w-full p-2.5 border-y border-slate-300 /* Typography */ /* Border */ /* Background */ /* Effects */"
  >
    <div
      class="/* Layout */ mr-5 min-[320px]:ml-2 text-center /* Typography */ text-gray-500 text-4"
    >
      <span class="block">{{ formattedDate }}</span>
      <span class="block">{{ formattedTime }}</span>
    </div>
    <ul
      class="/* Layout */ flex overflow-x-auto justify-center w-[500px] md:w-[400px] min-[375px]:w-[90px] min-[320px]:w-[50px]"
    >
      <li v-for="products in order.basketProducts" :key="products.id">
        <img
          class="/* Layout */ max-w-[80px] h-[67px] min-[320px]:max-w-[50px] min-[320px]:h-[47px]"
          :src="products.imageUrl"
          alt=""
        />
      </li>
    </ul>
    <span class="/* Layout */ ml-5 min-[320px]:ml-2 /* Typography */ text-gray-500 text-4"
      >{{ order.totalPrice }}₽</span
    >
  </li>
</template>
