<script setup>
import { inject } from 'vue'
import CardProductBasket from './CardProductBasket.vue'

const { state } = inject('onProductsInBasket')
</script>

<template>
  <div class="overflow-auto">
    <template v-for="product in state.products">
      <CardProductBasket
        v-if="product.isAdded"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
      />
    </template>
  </div>
</template>

<style scoped></style>
