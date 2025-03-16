import axios from 'axios'
import { createStore } from 'vuex'
const TAXPRODUCT = 5
const store = createStore({
  state: {
    products: [],
    sortingProducts: [],
    dataFavorite: JSON.parse(localStorage.getItem('favorite')),
    dataProductsInBasket: JSON.parse(localStorage.getItem('productsInBasket')),
    openBasket: false,
    openBookmarks: false,
    notEmptyBookMarks: false,
    notEmptyBasket: false,
    totalPrice: JSON.parse(localStorage.getItem('totalPrice')),
    tax: 0,
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

      if (!state.dataFavorite.length) {
        state.notEmptyBookMarks = true
      } else {
        state.notEmptyBookMarks = false
      }
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
        state.totalPrice -= product.price
        localStorage.setItem('totalPrice', state.totalPrice)
        state.tax = Math.floor((state.totalPrice / 100) * 5)
      } else {
        state.dataProductsInBasket = [...state.dataProductsInBasket, id]
        localStorage.setItem('productsInBasket', JSON.stringify(state.dataProductsInBasket))
        state.totalPrice += product.price
        localStorage.setItem('totalPrice', state.totalPrice)
        state.tax = Math.floor((state.totalPrice / 100) * 5)
      }

      if (!state.dataProductsInBasket.length) {
        state.notEmptyBasket = true
      } else {
        state.notEmptyBasket = false
      }
    },

    openOrCloseBookMarks(state, e) {
      const id = e.currentTarget.id

      if (id === 'logo') {
        state.openBookmarks = false
      } else if (id === 'bookmarks-button') {
        state.openBookmarks = false
      } else {
        state.openBookmarks = true
      }
    },

    openOrCloseBusket(state) {
      state.openBasket = !state.openBasket
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

        if (!state.dataFavorite.length) {
          state.notEmptyBookMarks = true
        } else {
          state.notEmptyBookMarks = false
        }

        if (!state.dataProductsInBasket.length) {
          state.notEmptyBasket = true
        } else {
          state.notEmptyBasket = false
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
  getters: {
    priceCalculation(state) {
      return (state.totalPrice = state.products.reduce((acc, product) => {
        if (product.isAdded) {
          acc += product.price
          localStorage.setItem('totalPrice', acc)
          return acc
        }
        localStorage.setItem('totalPrice', acc)
        return acc
      }, 0))
    },
    taxCalculation(state) {
      return Math.floor((state.totalPrice / 100) * TAXPRODUCT)
    },
  },
})

export { store, TAXPRODUCT }
