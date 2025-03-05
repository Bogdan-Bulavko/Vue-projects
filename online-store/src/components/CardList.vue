<script setup>
import CardProduct from './CardProduct.vue'

defineProps({
  items: Object,
})
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <CardProduct
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>

<style></style>
