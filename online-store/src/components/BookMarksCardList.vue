<script setup>
import CardProduct from './CardProduct.vue'

defineProps({
  items: Object,
})
</script>

<template>
  <div class="grid grid-cols-4 justify-between gap-11">
    <template v-for="item in items">
      <CardProduct
        v-if="item.isFavorite"
        :key="item.id"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </template>
  </div>
</template>

<style></style>
