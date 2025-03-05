<script setup>
import { inject } from 'vue'
import CardProduct from './CardProduct.vue'

const { state } = inject('onProductsInBasket')
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <template v-for="product in state.products">
      <CardProduct
        v-if="product.isFavorite"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :isFavorite="product.isFavorite"
        :isAdded="product.isAdded"
      />
    </template>
  </div>
</template>

<style></style>
