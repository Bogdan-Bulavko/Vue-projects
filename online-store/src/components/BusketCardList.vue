<script setup>
defineProps({
  products: Object,
  deleteCard: Function,
})

import CardProductBasket from './CardProductBasket.vue'
</script>

<template>
  <div class="overflow-auto">
    <template v-for="product in products">
      <CardProductBasket
        v-if="product.isAdded"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :deleteCard="deleteCard"
      />
    </template>
  </div>
</template>

<style scoped></style>
