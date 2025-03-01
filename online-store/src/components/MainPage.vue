<script setup>
import { ref, reactive, onMounted } from 'vue'

import AllProducts from './AllProducts.vue'
import Drawer from './Drawer.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import axios from 'axios'

const state = reactive({ products: [] })

onMounted(async () => {
  try {
    const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')

    state.products = await data.map((product) => {
      return { ...product, isAdded: false, isFavorite: false }
    })
  } catch (err) {
    console.log(err)
  }
})

// const dataFavorite = ref(JSON.parse(localStorage.getItem('favorite')))

// if (dataFavorite.value === null) {
//   dataFavorite.value = []

// }

const handleChangeSorting = (e) => {
  switch (e.target.options[e.target.selectedIndex].id) {
    case 'name':
      state.products.sort((a, b) => {
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
      state.products.sort((a, b) => {
        return a.price - b.price
      })
      break
    case 'dear':
      state.products.sort((a, b) => {
        return b.price - a.price
      })
      break
  }
}

const handleFavoriteProducts = (e) => {
  const index = Number(e.target.parentElement.id) - 1

  state.products[index].isFavorite = !state.products[index].isFavorite
  // sorting.products = state.products
  // console.log(state.products, serchedProducts.value)
  // if (dataFavorite.value === null) {
  //   dataFavorite.value = []
  // }
  // if (dataFavorite.value.includes(id)) {
  //   dataFavorite.value = dataFavorite.value.filter((product) => {
  //     if (product !== id) {
  //       return product
  //     }
  //   })
  //   localStorage.setItem('favorite', JSON.stringify(dataFavorite.value))
  // } else {
  //   dataFavorite.value = [...dataFavorite.value, id]
  //   localStorage.setItem('favorite', JSON.stringify(dataFavorite.value))
  // }
}

const openBasket = ref(false)
const openBookmarks = ref(false)

const onClickOpenBasket = () => {
  openBasket.value = !openBasket.value
}

const openBookMarks = () => {
  openBookmarks.value = true
}

const closeBookMarks = () => {
  openBookmarks.value = false
}
</script>

<template>
  <Drawer v-if="openBasket" @closeBasket="onClickOpenBasket" />
  <div class="w-[1080px] px-16 py-12 m-auto mt-12 bg-white rounded-3xl shadow-xl">
    <HeaderOnlineStore
      @openBasket="onClickOpenBasket"
      @clickOpenBookMarks="openBookMarks"
      @clickCloseBookMarks="closeBookMarks"
    />
    <Bookmarks v-if="openBookmarks" />
    <template v-else>
      <Slider />
      <AllProducts
        :products="state.products"
        :onFavoriteProducts="handleFavoriteProducts"
        :changeSorting="handleChangeSorting"
      />
    </template>
  </div>
</template>

<style scoped></style>
