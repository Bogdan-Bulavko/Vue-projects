<script setup lang="ts">
import { ref, watch } from 'vue'
import CardList from './CardList.vue'

import type { Ref } from 'vue'
import type { Product } from 'src/types/product.types'

const { products } = defineProps<{
  activeBlock: string
  products: Product[]
  onFavoriteProducts: (product: Product) => void
  onBasketProducts: (product: Product) => void
}>()

const sortingProducts: Ref<Product[] | []> = ref([])

const changeSorting = (e: Event): void => {
  const target = e.target as HTMLSelectElement
  const selectedOptions = target.options as HTMLOptionsCollection
  const id: string = selectedOptions[target.selectedIndex].id
  switch (id) {
    case 'name':
      sortingProducts.value.sort((a: Product, b: Product): number => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      break
    case 'cheap':
      sortingProducts.value.sort((a: Product, b: Product): number => {
        return a.price - b.price
      })
      break
    case 'dear':
      sortingProducts.value.sort((a: Product, b: Product): number => {
        return b.price - a.price
      })
      break
    case 'default':
      sortingProducts.value = [...products]
      break
  }
}

const searchProduct = (e: Event): void => {
  const target = e.target as HTMLInputElement
  if (target.value === '') {
    sortingProducts.value = [...products]
  }

  sortingProducts.value = [...products].filter((product) => {
    const regex = new RegExp(target.value, 'i')
    if (regex.test(product.title)) {
      return product
    }
  })
}

watch(
  () => products,
  (newProducts) => {
    if (newProducts.length > 0) {
      sortingProducts.value = [...newProducts]
    }
  },
  { immediate: true },
)
</script>

<template>
  <section data-id="allProducts">
    <div
      class="/* Layout */ flex gap-4 mb-11 p-2 md:justify-between md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"
    >
      <h2 class="/* Typography */ text-4xl font-bold /* Layout */ md:mb-0 min-[320px]:mb-3">
        Все кроссовки
      </h2>
      <div
        class="/* Layout */ flex gap-4 md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"
      >
        <select
          class="/* Layout */ py-2 px-3 rounded-md /* Border */ border border-gray-300 /* Typography */ outline-none /* Effects */"
          @change="changeSorting"
        >
          <option value="" disabled selected hidden>Отсортировать</option>
          <option id="default">По умолчанию</option>
          <option id="name">По названию</option>
          <option id="cheap">По цене (дешевые)</option>
          <option id="dear">По цене (дорогие)</option>
        </select>

        <div
          class="/* Layout */ flex rounded-md pl-5 /* Border */ border border-gray-300 focus:border-gray-500 /* Background */ /* Effects */"
        >
          <img src="/search.svg" alt="search image" />
          <input
            class="/* Layout */ py-2 pl-5 pr-4 /* Border */ /* Typography */ outline-none /* Effects */"
            type="text"
            placeholder="Поиск..."
            @input="searchProduct"
          />
        </div>
      </div>
    </div>
    <CardList
      :products="sortingProducts"
      :activeBlock="activeBlock"
      :onFavoriteProducts="onFavoriteProducts"
      :onBasketProducts="onBasketProducts"
    />
  </section>
</template>

<style scoped></style>
