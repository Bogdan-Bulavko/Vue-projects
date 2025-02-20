<script setup></script>

<template>
  <header class="flex justify-between border-b border-slate-300 pb-12">
    <div class="flex items-center">
      <div class="mr-4"><img src="/logo.png" alt="Logo" class="w-[40px]" /></div>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Online Store</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-2.5">
      <li class="flex items-center gap-2.5 cursor-pointer">
        <img src="/cart.svg" alt="Cart" />
        <b class="text-gray-500 hover:text-black">1205 pуб.</b>
      </li>
      <li class="flex items-center gap-2.5 cursor-pointer">
        <img src="/heart.svg" alt="Heart" />
        <b class="text-gray-500 hover:text-black">Закладки</b>
      </li>
      <li class="flex items-center gap-2.5 cursor-pointer">
        <img src="/profile.svg" alt="Profile" />
        <b class="text-gray-500 hover:text-black">Профиль</b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
