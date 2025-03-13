import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [],
  },
  mutations: {
    addCardsInProducts(state, cards) {
      state.products = cards
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

        // state.sortingProducts = state.products
      } catch (err) {
        console.log(err)
      }
    },
  },
})

export default store
