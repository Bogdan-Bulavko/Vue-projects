<script setup>
import BookMarksCardList from './BookMarksCardList.vue'

defineProps({
  products: Object,
  emptyBookMarks: Boolean,
  handleClickCloseBookMarks: Function,
})
</script>

<template>
  <section class="mt-5">
    <div v-if="emptyBookMarks" class="h-full flex flex-col items-center">
      <img class="inline w-[70px] mb-8" src="/public/emoji-1.png" />
      <h2 class="text-3xl font-semibold mb-3">Закладок нет :(</h2>
      <p class="text-gray-400 mb-19">Вы ничего не добавляли в закладки</p>
      <button
        @click="handleClickCloseBookMarks"
        class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
      >
        Вернуться назад
      </button>
    </div>
    <template v-else>
      <h2 class="mb-5 text-4xl font-bold">Закладки</h2>
      <BookMarksCardList :items="products" />
    </template>
  </section>
</template>

<style scoped></style>
