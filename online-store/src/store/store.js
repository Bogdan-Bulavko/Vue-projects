import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [],
    sortingProducts: [],
    dataFavorite: JSON.parse(localStorage.getItem('favorite')),
    dataProductsInBasket: JSON.parse(localStorage.getItem('productsInBasket')),
  },
  mutations: {
    addCardsInProducts(state, cards) {
      state.products = cards
    },
    addCardsInSortingProducts(state, cards) {
      state.sortingProducts = cards
    },
    sortProducts(state, e) {
      switch (e.target.options[e.target.selectedIndex].id) {
        case 'name':
          state.sortingProducts.sort((a, b) => {
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
          state.sortingProducts.sort((a, b) => {
            return a.price - b.price
          })
          break
        case 'dear':
          state.sortingProducts.sort((a, b) => {
            return b.price - a.price
          })
          break
      }
    },
    searchProduct(state, e) {
      if (e.target.value === '') {
        state.sortingProducts = state.products
      }

      state.sortingProducts = state.products.filter((product) => {
        const regex = new RegExp(e.target.value, 'i')
        if (regex.test(product.title)) {
          return product
        }
      })
    },
    addOrRemoveProductFromFavorites(state, product) {
      const id = product.id

      product.isFavorite = !product.isFavorite

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

      // if (!state.dataFavorite.length) {
      //   notEmptyBookMarks.value = true
      // } else {
      //   notEmptyBookMarks.value = false
      // }
    },
    addOrRemoveProductFromBasket(state, product) {
      const id = product.id

      product.isAdded = !product.isAdded

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

      // if (!state.dataProductsInBasket.length) {
      //   notEmptyBookMarks.value = true
      // } else {
      //   notEmptyBookMarks.value = false
      // }
    },
  },
  actions: {
    async getProducts({ state, commit }) {
      try {
        if (state.dataFavorite === null) {
          state.dataFavorite = []
          localStorage.setItem('favorite', JSON.stringify(state.dataFavorite))
        }
        if (state.dataProductsInBasket === null) {
          state.dataProductsInBasket = []
          localStorage.setItem('productsInBasket', JSON.stringify(state.dataProductsInBasket))
        }

        const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')

        const products = await data.map((product) => {
          return {
            ...product,
            isAdded: state.dataProductsInBasket.includes(product.id),
            isFavorite: state.dataFavorite.includes(product.id),
          }
        })

        commit('addCardsInProducts', products)
        commit('addCardsInSortingProducts', products)
      } catch (err) {
        console.log(err)
      }
    },
  },
})

export default store
