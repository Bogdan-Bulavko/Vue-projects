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
    <div class="text-gray-500 text-4 text-center mr-5 min-[320px]:ml-2">
      <span class="block">{{ formattedDate }}</span> <span class="block">{{ formattedTime }}</span>
    </div>
    <ul
      class="flex overflow-x-auto justify-center w-[500px] md:w-[400px] min-[375px]:w-[90px] min-[320px]:w-[50px]"
    >
      <li v-for="products in order.basketProducts" :key="products.id">
        <img
          class="max-w-[80px] h-[67px] min-[320px]:max-w-[50px] min-[320px]:h-[47px]"
          :src="products.imageUrl"
          alt=""
        />
      </li>
    </ul>
    <span class="ml-5 text-gray-500 text-4 min-[320px]:ml-2">{{ order.totalPrice }}₽</span>
  </li>
</template>
