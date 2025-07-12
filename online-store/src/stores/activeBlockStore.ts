// Pinia lib
import { defineStore } from 'pinia'

// Types
import type { Ref } from 'vue'
import type { Product } from '@/types/product.types'

// Vue lib
import { ref } from 'vue'
import { useProductStore } from './productsStore'

// Pinia store

export const useActiveBlockStore = defineStore('activeBlock', () => {
  const storeProducts = useProductStore()

  const activeBlock: Ref<string> = ref('allProducts')
  const activeBlockAboveContent: Ref<string> = ref('')
  const activeBlockInProfile: Ref<string> = ref('personalAccount')
  const activeNotification: Ref<boolean> = ref(false)

  const listNotification: Ref<{ text: string; image: string; id: number }[]> = ref([])

  const onActiveBlock = (e: Event): void => {
    const target = e.currentTarget as HTMLElement
    const dataAtribute: string | undefined = target.dataset.id

    switch (dataAtribute) {
      case 'allProducts':
        activeBlock.value = dataAtribute
        break
      case 'bookmarks':
        activeBlock.value = dataAtribute
        break
      case 'profile':
        activeBlock.value = dataAtribute
        if (activeBlockInProfile.value === 'personalOrders' && dataAtribute === 'profile') {
          activeBlockInProfile.value = 'personalAccount'
        }
        break
      case 'personalAccount':
        activeBlockInProfile.value = dataAtribute
        break
      case 'personalOrders':
        activeBlockInProfile.value = dataAtribute
        break
    }
  }

  const assignActiveBlock = (block: string): void => {
    if (activeBlockAboveContent.value === block) {
      activeBlockAboveContent.value = ''
    } else {
      activeBlockAboveContent.value = block
    }
  }

  const onActiveBlockAboveContent = (e?: Event, product?: Product): void => {
    if (e) {
      const target = e.currentTarget as HTMLElement
      const dataAtribute: string | undefined = target.dataset.id

      switch (dataAtribute) {
        case 'basket':
          assignActiveBlock('basket')
          break
        case 'cardProduct':
          assignActiveBlock('cardProduct')
          if (product) {
            storeProducts.activeOpenCard = product
          }
          break
        case 'formLogin':
          assignActiveBlock('formLogin')
          break
        case 'formRegistration':
          assignActiveBlock('formRegistration')
          break
      }
    } else {
      activeBlockAboveContent.value = ''
    }
  }

  const onActiveNotification = (text: string, image: string): void => {
    listNotification.value.push({
      text: text,
      image: image,
      id: listNotification.value.length,
    })
  }

  const onDeactivateNotification = (id: number): void => {
    listNotification.value = listNotification.value.filter((notification) => id !== notification.id)
  }

  return {
    activeBlock,
    activeBlockInProfile,
    onActiveBlock,
    activeBlockAboveContent,
    onActiveBlockAboveContent,
    activeNotification,
    listNotification,
    onActiveNotification,
    onDeactivateNotification,
  }
})
