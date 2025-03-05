<script setup>
import { ref, reactive, computed, onMounted, provide } from 'vue'

import AllProducts from './AllProducts.vue'
import Drawer from './Drawer.vue'
import HeaderOnlineStore from './HeaderOnlineStore.vue'
import Slider from './Slider.vue'
import Bookmarks from './Bookmarks.vue'
import axios from 'axios'

const state = reactive({
  products: [],
  sortingProducts: [],
  dataFavorite: JSON.parse(localStorage.getItem('favorite')),
  dataProductsInBasket: JSON.parse(localStorage.getItem('productsInBasket')),
  taxPercentage: 5,
})

const openBasket = ref(false)
const openBookmarks = ref(false)
const emptyBookMarks = ref(false)
const emptyBasket = ref(false)

onMounted(async () => {
  try {
    const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')

    state.products = await data.map((product) => {
      return {
        ...product,
        isAdded: state.dataProductsInBasket.includes(product.id),
        isFavorite: state.dataFavorite.includes(product.id),
      }
    })

    state.sortingProducts = state.products
  } catch (err) {
    console.log(err)
  }
})

const handleSearchProduct = (e) => {
  if (e.target.value === '') {
    state.sortingProducts = state.products
  }
  state.sortingProducts = state.products.filter((product) => {
    const regex = new RegExp(e.target.value, 'i')
    if (regex.test(product.title)) {
      return product
    }
  })
}

if (state.dataFavorite === null) {
  state.dataFavorite = []
}

const handleChangeSorting = (e) => {
  switch (e.target.options[e.target.selectedIndex].id) {
    case 'name':
      state.sortingProducts = state.products.sort((a, b) => {
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
      state.sortingProducts = state.products.sort((a, b) => {
        return a.price - b.price
      })
      break
    case 'dear':
      state.sortingProducts = state.products.sort((a, b) => {
        return b.price - a.price
      })
      break
  }
}

if (!state.dataFavorite.length) {
  emptyBookMarks.value = true
} else {
  emptyBookMarks.value = false
}

const onFavoriteProducts = (e) => {
  const id = Number(e.target.parentElement.id)

  state.products.find((product) => {
    if (product.id === id) {
      product.isFavorite = !product.isFavorite
    }
  })

  state.sortingProducts = state.products

  if (state.dataFavorite.includes(id)) {
    state.dataFavorite = state.dataFavorite.filter((product) => {
      if (product !== id) {
        return product
      }
    })
    localStorage.setItem('favorite', JSON.stringify(state.dataFavorite))
  } else {
    state.dataFavorite = [...state.dataFavorite, id]
    localStorage.setItem('favorite', JSON.stringify(state.dataFavorite))
  }

  if (!state.dataFavorite.length) {
    emptyBookMarks.value = true
  } else {
    emptyBookMarks.value = false
  }
}

if (state.dataProductsInBasket === null) {
  state.dataProductsInBasket = []
}

if (!state.dataProductsInBasket.length) {
  emptyBasket.value = true
} else {
  emptyBasket.value = false
}

const onProductsInBasket = (e) => {
  const id = Number(e.target.parentElement.id)

  state.products.find((product) => {
    if (product.id === id) {
      product.isAdded = !product.isAdded
    }
  })

  state.sortingProducts = state.products

  if (state.dataProductsInBasket.includes(id)) {
    state.dataProductsInBasket = state.dataProductsInBasket.filter((product) => {
      if (product !== id) {
        return product
      }
    })
    localStorage.setItem('productsInBasket', JSON.stringify(state.dataProductsInBasket))
  } else {
    state.dataProductsInBasket = [...state.dataProductsInBasket, id]
    localStorage.setItem('productsInBasket', JSON.stringify(state.dataProductsInBasket))
  }

  if (!state.dataProductsInBasket.length) {
    emptyBasket.value = true
  } else {
    emptyBasket.value = false
  }
}

const priceCalculation = computed(() => {
  return state.products.reduce((acc, product) => {
    if (product.isAdded) {
      acc += product.price
      localStorage.setItem('totalPrice', acc)
      return acc
    }
    localStorage.setItem('totalPrice', acc)
    return acc
  }, 0)
})

const taxСalculation = computed(() => {
  return Math.floor((priceCalculation.value / 100) * state.taxPercentage)
})

const onClickOpenBasket = () => {
  openBasket.value = !openBasket.value
}

const onOpenBookMarks = () => {
  openBookmarks.value = true
}

const onCloseBookMarks = () => {
  openBookmarks.value = false
}
// provider for CardProduct, CardProductBasket, CardList,
provide('onFavoriteProducts', onFavoriteProducts)
provide('onProductsInBasket', { onProductsInBasket, state })

// provider for BusketResult
provide('taxPercentage', state.taxPercentage)
provide('priceCalculation', priceCalculation)
provide('taxСalculation', taxСalculation)

// provider for BusketCardList
provide('onDeleteCard', onProductsInBasket)
</script>

<template>
  <Drawer v-if="openBasket" :handleCloseBasket="onClickOpenBasket" :emptyBasket="emptyBasket" />
  <div class="w-[1080px] px-16 py-12 m-auto mt-12 bg-white rounded-3xl shadow-xl">
    <HeaderOnlineStore
      :handleOpenBasket="onClickOpenBasket"
      :handleClickOpenBookMarks="onOpenBookMarks"
      :handleClickCloseBookMarks="onCloseBookMarks"
      :totalPtice="priceCalculation"
    />
    <Bookmarks
      v-if="openBookmarks"
      :emptyBookMarks="emptyBookMarks"
      :openBookmarks="openBookmarks"
      :handleClickCloseBookMarks="onCloseBookMarks"
    />
    <template v-else>
      <Slider />
      <AllProducts :changeSorting="handleChangeSorting" :searchProduct="handleSearchProduct" />
    </template>
  </div>
</template>

<style scoped></style>
