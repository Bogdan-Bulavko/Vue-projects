<script setup>
import BookMarksCardList from './BookMarksCardList.vue'

defineProps({
  notEmptyBookMarks: Boolean,
  handleClickCloseBookMarks: Function,
})

const emit = defineEmits(['handleClickCloseBookMarks'])
</script>

<template>
  <section class="mt-5">
    <div v-if="notEmptyBookMarks" class="h-full flex flex-col items-center">
      <img class="inline w-[70px] mb-8" src="/public/emoji-1.png" />
      <h2 class="text-3xl font-semibold mb-3">Закладок нет :(</h2>
      <p class="text-gray-400 mb-19">Вы ничего не добавляли в закладки</p>
      <button
        @click="emit('handleClickCloseBookMarks')"
        class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"
      >
        Вернуться назад
      </button>
    </div>
    <template v-else>
      <h2 class="mb-5 text-4xl font-bold">Закладки</h2>
      <BookMarksCardList />
    </template>
  </section>
</template>

<style scoped></style>
