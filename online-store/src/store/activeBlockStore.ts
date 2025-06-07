// Pinia lib
import { defineStore } from 'pinia'

// Types
import type { Ref } from 'vue'
import type { Product } from 'src/types/product.types'

// Vue lib
import { ref } from 'vue'

// Pinia store
import { useProductStore } from '/src/store/productsStore'

export const useActiveBlockStore = defineStore('activeBlock', () => {
  const storeProducts = useProductStore()

  const activeBlock: Ref<string> = ref('allProducts')
  const activeBlockAboveContent: Ref<string> = ref('')
  const activeBlockInProfile: Ref<string> = ref('personalAccount')
  const activeNotification: Ref<boolean> = ref(false)

  const textNotification: Ref<string> = ref('')
  const imageNotification: Ref<string | undefined> = ref('')

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

  const onActiveNotification = (text?: string, image?: string): void => {
    if (text) {
      textNotification.value = text
      imageNotification.value = image
      setTimeout(() => onActiveNotification(), 3000)
      console.log(textNotification.value, imageNotification.value)
    }
    activeNotification.value = !activeNotification.value
  }

  return {
    activeBlock,
    activeBlockInProfile,
    onActiveBlock,
    activeBlockAboveContent,
    onActiveBlockAboveContent,
    activeNotification,
    textNotification,
    imageNotification,
    onActiveNotification,
  }
})
