import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [],
    sortingProducts: [],
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
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')

        const products = await data.map((product) => {
          return {
            ...product,
            // isAdded: state.dataProductsInBasket.includes(product.id),
            // isFavorite: state.dataFavorite.includes(product.id),
            isAdded: false,
            isFavorite: false,
          }
        })

        commit('addCardsInProducts', products)
        commit('addCardsInSortingProducts', products)
        // state.sortingProducts = state.products
      } catch (err) {
        console.log(err)
      }
    },
  },
})

export default store
