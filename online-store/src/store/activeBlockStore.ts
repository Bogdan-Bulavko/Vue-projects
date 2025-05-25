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
    }
  }

  const onActiveBlockAboveContent = (e: Event, product?: Product): void => {
    const target = e.currentTarget as HTMLElement
    const dataAtribute: string | undefined = target.dataset.id

    switch (dataAtribute) {
      case 'basket':
        if (activeBlockAboveContent.value === 'basket') {
          activeBlockAboveContent.value = ''
        } else {
          activeBlockAboveContent.value = dataAtribute
        }
        break
      case 'cardProduct':
        if (activeBlockAboveContent.value === 'cardProduct') {
          activeBlockAboveContent.value = ''
        } else {
          activeBlockAboveContent.value = dataAtribute
        }
        if (product) {
          storeProducts.activeOpenCard = product
        }
        break
    }
  }

  return { activeBlock, onActiveBlock, activeBlockAboveContent, onActiveBlockAboveContent }
})
