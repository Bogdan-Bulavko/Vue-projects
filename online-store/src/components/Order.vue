<script setup>
const props = defineProps({
  order: Object,
})

const seconds = props.order.createdAt.seconds // Основные секунды
const nanoseconds = props.order.createdAt.nanoseconds // Наносекунды

// Преобразуем в миллисекунды
const totalMilliseconds = seconds * 1000 + Math.floor(nanoseconds / 1_000_000)

// Создаем объект Date
const date = new Date(totalMilliseconds)

// Форматируем дату и время для московского времени
const formattedDate = date.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' }) // Только дата
const formattedTime = date.toLocaleTimeString('ru-RU', {
  timeZone: 'Europe/Moscow',
  hour: '2-digit',
  minute: '2-digit',
}) // Только время (без секунд)
</script>

<template>
  <li class="flex justify-between items-center mb-5 w-full p-2.5 border-y border-slate-300">
    <div class="text-gray-500 text-2xl text-center">
      <span class="block">{{ formattedDate }}</span> <span class="block">{{ formattedTime }}</span>
    </div>
    <ul class="flex w-[363px] overflow-x-auto">
      <li v-for="products in order.basketProducts" :key="products.id">
        <img class="max-w-[80px] h-[67px]" :src="products.imageUrl" alt="" />
      </li>
    </ul>
    <span class="text-gray-500 text-2xl">{{ order.totalPrice }}₽</span>
  </li>
</template>
