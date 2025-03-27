import axios from 'axios'

import { auth, db } from '@/servis/firebase'
import { addDoc, collection } from 'firebase/firestore'
import {
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { createStore } from 'vuex'

const TAXPRODUCT = 5

const statusImg = {
  success: '/checked.svg',
  error: '/error.png',
  empty: '',
}

const store = createStore({
  state: {
    email: '',
    password: '',
    name: '',
    isSubmitting: false,

    user: null,

    products: [],
    sortingProducts: [],
    basketProducts: [],
    activeOpenCard: {},
    dataFavorite: JSON.parse(localStorage.getItem('favorite')),
    dataIndexProductsInBasket: JSON.parse(localStorage.getItem('productsInBasket')),

    openAllProducts: true,
    openFormRegister: false,
    openFormLogin: false,
    isAuthorized: false,
    openProfile: false,
    openBasket: false,
    openBookmarks: false,
    openCard: false,

    openNotification: false,
    textNotification: '',
    imgNotification: '',

    notEmptyBookMarks: false,
    notEmptyBasket: 'empty',
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
    addProductsInBasket(state, products) {
      state.basketProducts = products
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
    addOrRemoveProductFromIsAdded(state, product) {
      const id = product.id

      product.isAdded = !product.isAdded

      state.basketProducts = state.products.filter((product) => product.isAdded)

      if (state.dataIndexProductsInBasket.includes(id)) {
        state.dataIndexProductsInBasket = state.dataIndexProductsInBasket.filter((product) => {
          if (product !== id) {
            return product
          }
        })

        localStorage.setItem('productsInBasket', JSON.stringify(state.dataIndexProductsInBasket))
      } else {
        state.dataIndexProductsInBasket = [...state.dataIndexProductsInBasket, id]
        localStorage.setItem('productsInBasket', JSON.stringify(state.dataIndexProductsInBasket))
      }

      if (!state.dataIndexProductsInBasket.length) {
        state.notEmptyBasket = 'empty'
      } else {
        state.notEmptyBasket = 'notEmpty'
      }
    },

    openOrCloseAllProducts(state) {
      state.openAllProducts = true
      state.openBookmarks = false
      state.openProfile = false
    },

    openOrCloseBookMarks(state) {
      state.openBookmarks = true
      state.openAllProducts = false
      state.openProfile = false
    },

    openOrCloseProfile(state) {
      state.openProfile = true
      state.openAllProducts = false
      state.openBookmarks = false
    },

    openOrCloseBusket(state, id) {
      if (id === 'btnOrderPlaced' || id === 'backgroundOrderPlaced') {
        state.notEmptyBasket = 'empty'
      }
      state.openBasket = !state.openBasket
    },

    openOrCloseCard(state, product) {
      state.openCard = !state.openCard

      if (state.openCard) {
        state.activeOpenCard = product
      }
    },

    openOrCloseFormRegister(state, boolean = true) {
      state.openFormRegister = boolean
    },
    openOrCloseFormLogin(state, boolean = true) {
      state.openFormLogin = boolean
    },
    openOrCloseNotification(state, { text, img }) {
      state.openNotification = !state.openNotification
      state.textNotification = text
      state.imgNotification = img
    },

    updateName(state, value) {
      state.name = value
    },
    updatePassword(state, value) {
      state.password = value
    },
    updateEmail(state, value) {
      state.email = value
    },
    deleteProductsFromBasket(state) {
      state.basketProducts = []
      state.products = state.products.map((product) => {
        if (product.isAdded) {
          product.isAdded = !product.isAdded
        }

        return product
      })
      state.sortingProducts = state.products
      state.dataIndexProductsInBasket = []
      localStorage.setItem('productsInBasket', JSON.stringify(state.dataIndexProductsInBasket))
    },
  },

  actions: {
    async placeAnOrder({ state }) {
      try {
        if (!state.user) {
          throw new Error('Пользователь не авторизован.')
        }

        // Создаем ссылку на подколлекцию для конкретного пользователя
        const userOrdersRef = collection(db, `users/${state.user.uid}/orders`)

        // Добавляем заказ в подколлекцию
        const docRef = await addDoc(userOrdersRef, {
          basketProducts: state.basketProducts,
          createdAt: new Date(), // Добавляем дату создания заказа
        })

        store.commit('deleteProductsFromBasket')

        state.notEmptyBasket = 'orderPlaced'

        console.log('Заказ сохранен с ID:', docRef.id)
      } catch (error) {
        console.error('Ошибка при сохранении заказа:', error.message)
      }
    },
    async getProducts({ state, commit }) {
      try {
        if (state.dataFavorite === null) {
          state.dataFavorite = []
          localStorage.setItem('favorite', JSON.stringify(state.dataFavorite))
        }
        if (state.dataIndexProductsInBasket === null) {
          state.dataIndexProductsInBasket = []
          localStorage.setItem('productsInBasket', JSON.stringify(state.dataIndexProductsInBasket))
        }

        if (!state.dataFavorite.length) {
          state.notEmptyBookMarks = true
        } else {
          state.notEmptyBookMarks = false
        }

        if (!state.dataIndexProductsInBasket.length) {
          state.notEmptyBasket = 'empty'
        } else {
          state.notEmptyBasket = 'notEmpty'
        }

        const { data } = await axios.get('https://34643c0fb49ad60b.mokky.dev/items')

        const products = await data.map((product) => {
          return {
            ...product,
            isAdded: state.dataIndexProductsInBasket.includes(product.id),
            isFavorite: state.dataFavorite.includes(product.id),
          }
        })

        const basketProducts = products.filter((product) => product.isAdded)

        commit('addCardsInProducts', products)
        commit('addCardsInSortingProducts', products)
        commit('addProductsInBasket', basketProducts)
      } catch (err) {
        console.log(err)
      }
    },
    async getUserOnLogin({ state }) {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          state.user = currentUser
        } else {
          state.user = null
        }
      })
    },
    async handleRegister({ state }) {
      state.isSubmitting = true

      try {
        await createUserWithEmailAndPassword(auth, state.email, state.password)

        const user = auth.currentUser

        if (user) {
          await updateProfile(user, {
            displayName: state.name,
          })
        }
        store.commit('openOrCloseNotification', {
          text: 'Ваш аккаунт успешно зарегистрирован!',
          img: statusImg.success,
        })
      } catch (error) {
        store.commit('openOrCloseNotification', {
          text: 'Пользователь с этим email уже зарегистрирован!',
          img: statusImg.error,
        })
      } finally {
        state.isSubmitting = false

        setTimeout(() => {
          store.commit('openOrCloseNotification', {
            text: '',
            img: statusImg.empty,
          })
        }, 3000)

        setTimeout(() => {
          store.commit('openOrCloseFormRegister', false)
        }, 4000)
      }
    },
    async handleLogin({ state }) {
      try {
        await signInWithEmailAndPassword(auth, state.email, state.password)
        store.commit('openOrCloseNotification', {
          text: 'Вы успешно авторизовались',
          img: statusImg.success,
        })
      } catch (error) {
        // errorMessage.value = 'Неверный email или пароль'
        store.commit('openOrCloseNotification', {
          text: 'Неверный email или пароль',
          img: statusImg.error,
        })
      } finally {
        setTimeout(() => {
          store.commit('openOrCloseNotification', {
            text: '',
            img: statusImg.empty,
          })
        }, 3000)

        setTimeout(() => {
          store.commit('openOrCloseFormLogin', false)
        }, 4000)
      }
    },
    async logout() {
      await signOut(auth)
      store.commit('openOrCloseAllProducts')
      store.commit('openOrCloseNotification', {
        text: 'Вы вышли из аккаунта',
        img: statusImg.success,
      })
      setTimeout(() => {
        store.commit('openOrCloseNotification', {
          text: '',
          img: statusImg.empty,
        })
      }, 3000)
    },
    async changeName({ state }) {
      try {
        if (state.user) {
          await updateProfile(state.user, {
            displayName: state.name,
          })
          store.commit('openOrCloseNotification', {
            text: `Вы изменили имя на ${state.name}`,
            img: statusImg.success,
          })
        }
      } catch (error) {
        store.commit('openOrCloseNotification', {
          text: `Ошибка при установке имени: ${error.message}`,
          img: statusImg.error,
        })
      } finally {
        setTimeout(() => {
          store.commit('openOrCloseNotification', {
            text: '',
            img: statusImg.empty,
          })
        }, 3000)
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

export { store, TAXPRODUCT, statusImg }
