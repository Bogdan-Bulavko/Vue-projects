<script setup>
import CardProduct from './CardProduct.vue'
</script>
<template>
  <ul
    class="/* Layout */ grid gap-11 mt-4 lg:grid-cols-4 md:justify-between min-[320px]:justify-items-center min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[425px]:grid-cols-1"
  >
    <TransitionGroup name="list">
      <template v-for="product in products">
        <CardProduct
          v-if="product.isFavorite"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :title="product.title"
          :price="product.price"
          :isFavorite="product.isFavorite"
          :isAdded="product.isAdded"
          :onProductsInBasket="() => addOrRemoveProductFromIsAdded(product)"
          :onFavoriteProducts="() => addOrRemoveProductFromFavorites(product)"
          :onOpenCard="() => openOrCloseCard(product)"
        />
      </template>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
