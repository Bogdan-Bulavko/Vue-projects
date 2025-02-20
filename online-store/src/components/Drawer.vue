<script setup></script>

<template>
  <section>
    <div class="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"></div>
    <div class="fixed top-0 right-0 z-20 bg-white w-[30vw] h-full p-9">
      <h3 class="text-3xl font-bold mb-9">Корзина</h3>
      <div class="flex flex-col h-[100%]">
        <div>
          <div class="w-[300px] h-[100px] bg-black mb-[10px]"></div>
          <div class="w-[300px] h-[100px] bg-black mb-[10px]"></div>
        </div>
        <div class="">
          <div>
            <p>Итого</p>
            <p>Налог</p>
          </div>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
