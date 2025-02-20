<script setup>
import CardProduct from './CardProduct.vue'
</script>

<template>
  <section>
    <div class="flex justify-between mb-11">
      <h2 class="text-4xl font-bold">Все кроссовки</h2>
      <label class="w-[250px] py-4 pl-4 border border-[#F3F3F3] rounded-[10px] cursor-pointer">
        <img class="mr-4 inline" src="/search.svg" alt="search image" />
        <input class="text-[#BDBDBD] border-0" type="text" placeholder="Поиск..." />
      </label>
    </div>
    <div class="grid grid-cols-4 justify-between gap-11">
      <CardProduct
        imageUrl="/sneakers/sneakers-1.jpg"
        title="Мужские кросовки Nike Blazer Mid Suede"
        :price="5000"
        :isAdded="true"
        :isFavorite="false"
        :onClickAdd="() => console.log('Add')"
        :onClickFavorite="() => console.log('like')"
      />
    </div>
  </section>
</template>

<style scoped></style>
