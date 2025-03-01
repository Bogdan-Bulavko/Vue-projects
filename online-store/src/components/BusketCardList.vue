<script setup>
defineProps({
  products: Array,
})

import CardProductBasket from './CardProductBasket.vue'
</script>

<template>
  <div class="overflow-auto">
    <CardProductBasket
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imageUrl="product.imageUrl"
      :title="product.title"
      :price="product.price"
    />
  </div>
</template>

<style scoped></style>
