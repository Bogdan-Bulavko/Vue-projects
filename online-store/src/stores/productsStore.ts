// Pinia lib
import { defineStore } from 'pinia'

// Types
import type { Ref } from 'vue'
import type { Product } from '@/types/product.types'

// Vue lib
import { ref, computed } from 'vue'

// Pinia  store
import { useActiveBlockStore } from './activeBlockStore'

export const useProductStore = defineStore('products', () => {
  const products: Ref<Product[] | []> = ref([])
  const productsInBasket: Ref<Product[] | []> = ref([])
  const sortingProducts: Ref<Product[] | []> = ref([])
  const activeOpenCard: Ref<Product> = ref(products.value[0])
  const localFavorite: Ref<number[]> = ref([])
  const localBasket: Ref<number[]> = ref([])
  const TAXPRODUCT: number = 5

  const storeActiveBlock = useActiveBlockStore()

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
        sortingProducts.value = [...products.value]
        break
    }
  }

  const searchProduct = (e: Event): void => {
    const target = e.target as HTMLInputElement
    if (target.value === '') {
      sortingProducts.value = [...products.value]
    }

    sortingProducts.value = [...products.value].filter((product) => {
      const regex = new RegExp(target.value, 'i')
      if (regex.test(product.title)) {
        return product
      }
    })
  }

  const totalPrice = computed<number>(() =>
    products.value.reduce((acc, product) => {
      if (product.isAdded) {
        acc += product.price
      }
      return acc
    }, 0),
  )

  const calculateTaxTotalPrice = computed<number>(() => {
    const result = Math.floor(totalPrice.value + (totalPrice.value / 100) * TAXPRODUCT)
    localStorage.setItem('taxTotalPrice', String(result))
    return result
  })

  const getProductsFetch = async (): Promise<Product[]> => {
    try {
      const response: Response = await fetch('https://34643c0fb49ad60b.mokky.dev/items')
      if (!response.ok) throw new Error('Ошибка загрузки')

      const data: Product[] = await response.json()
      const products: Product[] = data.map((product: Product) => {
        return {
          ...product,
          isAdded: localBasket.value.includes(product.id),
          isFavorite: localFavorite.value.includes(product.id),
        }
      })

      return products
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const onFavoriteProducts = (product: Product): void => {
    product.isFavorite = !product.isFavorite
    updateLocalFavorite(product.id)
  }

  const onBasketProducts = (product: Product): void => {
    product.isAdded = !product.isAdded
    if (product.isAdded) {
      storeActiveBlock.onActiveNotification(
        product.title + ': Добавлен в корзину',
        product.imageUrl,
      )
      productsInBasket.value = [...productsInBasket.value, product]
    } else {
      storeActiveBlock.onActiveNotification(product.title + ': Удалён из корзины', product.imageUrl)
      productsInBasket.value = productsInBasket.value.filter((prod) => prod.id !== product.id)
    }
    updateLocalBasket(product.id)
  }

  const updateLocalFavorite = (id: number | undefined = undefined): void => {
    const localStorageValue: number[] | null = JSON.parse(
      localStorage.getItem('favorite') as string,
    )

    if (Array.isArray(localStorageValue)) {
      localFavorite.value = localStorageValue
    }

    if (typeof id === 'number') {
      if (localFavorite.value.includes(id)) {
        localFavorite.value = localFavorite.value.filter((product) => {
          if (product !== id) {
            return product
          }
        })

        localStorage.setItem('favorite', JSON.stringify(localFavorite.value))
      } else {
        localFavorite.value = [...localFavorite.value, id]
        localStorage.setItem('favorite', JSON.stringify(localFavorite.value))
      }
    }
  }

  const updateLocalBasket = (id: number | undefined = undefined): void => {
    const localStorageValue: number[] | null = JSON.parse(localStorage.getItem('basket') as string)

    if (Array.isArray(localStorageValue)) {
      localBasket.value = localStorageValue
    }

    if (typeof id === 'number') {
      if (localBasket.value.includes(id)) {
        localBasket.value = localBasket.value.filter((product) => {
          if (product !== id) {
            return product
          }
        })

        localStorage.setItem('basket', JSON.stringify(localBasket.value))
      } else {
        localBasket.value = [...localBasket.value, id]
        localStorage.setItem('basket', JSON.stringify(localBasket.value))
      }
    }
  }

  const updateProductInBasket = (): void => {
    productsInBasket.value = products.value.filter((product) =>
      localBasket.value.includes(product.id),
    )
  }

  const clearProductInBasket = (): void => {
    products.value = products.value.map((product) => {
      if (product.isAdded) {
        product.isAdded = false
        updateLocalBasket(product.id)
      }
      return product
    })

    productsInBasket.value = []
  }

  const clearProductInFavorite = (): void => {
    products.value = products.value.map((product) => {
      if (product.isFavorite) {
        product.isFavorite = false
        updateLocalFavorite(product.id)
      }
      return product
    })
  }

  return {
    products,
    productsInBasket,
    sortingProducts,
    activeOpenCard,
    localFavorite,
    localBasket,
    TAXPRODUCT,
    totalPrice,
    calculateTaxTotalPrice,
    getProductsFetch,
    onFavoriteProducts,
    onBasketProducts,
    updateLocalFavorite,
    updateLocalBasket,
    updateProductInBasket,
    clearProductInBasket,
    clearProductInFavorite,
    changeSorting,
    searchProduct,
  }
})
