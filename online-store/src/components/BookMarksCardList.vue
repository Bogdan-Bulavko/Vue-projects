<script setup>
import CardProduct from './CardProduct.vue'

defineProps({
  openBookmarks: Boolean,
  items: Object,
  onFavoriteProducts: Function,
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
        :onFavoriteProducts="onFavoriteProducts"
        :isFavorite="item.isFavorite"
      />
    </template>
  </div>
</template>

<style></style>
