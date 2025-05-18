<script setup lang="ts">
defineProps<{
  id: number
  imageUrl: string
  title: string
  price: number
  onBasketProducts: () => void
  onOpenCardProduct: () => void
}>()
</script>

<template>
  <li>
    <article
      class="/* Layout */ max-w-full h-32 mb-6 mr-2 p-6 rounded-3xl border flex justify-between items-center cursor-pointer /* Typography */ /* Border */ border-[#F2F2F2] /* Background */ /* Effects */"
      :id="String(id)"
      data-id="cardProduct"
      @click="onOpenCardProduct"
    >
      <img class="/* Layout */ block w-[70px] h-[70px] mr-6" :src="imageUrl" alt="Sneakers Image" />
      <div>
        <p class="/* Typography */ w-40">{{ title }}</p>
        <b class="/* Typography */">{{ price }}</b>
      </div>
      <img
        class="/* Layout */ self-end"
        src="/public/close.svg"
        alt="Delete Product"
        @click.stop="onBasketProducts"
      />
    </article>
  </li>
</template>

<style scoped></style>
