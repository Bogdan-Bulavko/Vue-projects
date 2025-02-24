<script setup>
import { ref } from 'vue'
import AllProducts from './AllProducts.vue'
import Drawer from './Drawer.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'

const openBasket = ref(false)
const openBookmarks = ref(false)
const openSlider = ref(true)
const openAllProducts = ref(true)

const onClickOpenBasket = () => {
  openBasket.value = !openBasket.value
}

const openBookMarks = () => {
  openBookmarks.value = true
  openSlider.value = false
  openAllProducts.value = false
}

const closeBookMarks = () => {
  openBookmarks.value = false
  openSlider.value = true
  openAllProducts.value = true
}
</script>

<template>
  <Drawer v-if="openBasket" @closeBasket="onClickOpenBasket" />
  <div class="w-[1080px] px-16 py-12 m-auto mt-12 bg-white rounded-3xl shadow-xl">
    <HeaderOnlineStore
      @openBasket="onClickOpenBasket"
      @clicOpenBookMarks="openBookMarks"
      @clickCloseBookMarks="closeBookMarks"
    />
    <Bookmarks v-if="openBookmarks" />
    <Slider v-if="openSlider" />
    <AllProducts v-if="openAllProducts" />
  </div>
</template>

<style scoped></style>
