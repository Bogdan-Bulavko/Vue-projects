<script setup lang="ts">
defineProps<{
  id: number
  imageUrl: string
  title: string
  price: number
  isFavorite: boolean
  isAdded: boolean
  onFavoriteProducts: () => void
  onBasketProducts: () => void
  onActiveBlockAboveContent: (e: Event) => void
}>()
</script>

<template>
  <li class="w-[190px]">
    <article
      class="/* Layout */ mb-2 min-[375px]:mb-4 relative z-10 flex flex-col justify-between min-h-[220px] rounded-3xl border p-2 /* Typography */ /* Border */ border-gray-100 /* Background */ /* Effects */ hover:shadow-xl hover:-translate-y-2 transition"
      :id="String(id)"
      data-id="cardProduct"
      @click="onActiveBlockAboveContent"
    >
      <img
        class="/* Layout */ absolute"
        :src="isFavorite ? 'like-2.svg' : 'like-1.svg'"
        alt="button like"
        @click.stop="onFavoriteProducts"
      />
      <div>
        <img
          class="/* Layout */ w-[100px] h-[85px] mb-4 m-auto"
          :src="`${imageUrl}`"
          alt="image sneakers"
        />
        <p class="/* Typography */ leading-[17px] mb-4">{{ title }}</p>
      </div>

      <div class="/* Layout */ flex justify-between">
        <div>
          <p class="/* Typography */ text-[0.8rem] text-[#BDBDBD]">ЦЕНА:</p>
          <p class="/* Typography */ font-bold">{{ price }}руб.</p>
        </div>
        <img
          class="/* Layout */ block"
          :src="isAdded ? 'checked.svg' : 'plus.svg'"
          alt="Add Product"
          @click.stop="onBasketProducts"
        />
      </div>
    </article>
  </li>
</template>

<style></style>
