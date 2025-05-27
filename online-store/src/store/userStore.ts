// Pinia lib
import { defineStore } from 'pinia'

// Vue lib
import { ref } from 'vue'

// Types
import type { Ref } from 'vue'

// Firebase lib
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'

// Firebase init
import { app } from '/src/firebase'

// Pinia store
import { useActiveBlockStore } from './activeBlockStore'

export const useUserStore = defineStore('user', () => {
  const storeActiveBlock = useActiveBlockStore()

  const user: Ref<null | User> = ref(null)
  const formData: Ref<{ email: string; password: string; name: string }> = ref({
    email: '',
    password: '',
    name: '',
  })

  const registerUser = async (): Promise<void> => {
    const auth = getAuth(app)

    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        formData.value.email,
        formData.value.password,
      )

      if (formData.value.name !== '') {
        firebaseUser.user.displayName = formData.value.name
      }

      storeActiveBlock.onActiveNotification('Вы успешно зарегистрировались!', 'checked.svg')
      user.value = firebaseUser.user
    } catch (err) {
      const errorMessage = err.message
      storeActiveBlock.onActiveNotification(errorMessage, 'error.png')
    } finally {
      setTimeout(() => {
        if (storeActiveBlock.activeBlockAboveContent !== '') {
          storeActiveBlock.onActiveBlockAboveContent()
        }

        storeActiveBlock.onActiveNotification()
      }, 5000)
    }
  }

  const loginUser = async (): Promise<void> => {
    const auth = getAuth(app)

    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        formData.value.email,
        formData.value.password,
      )

      storeActiveBlock.onActiveNotification('Вы успешно авторизовались!', 'checked.svg')
      user.value = firebaseUser.user
    } catch (err) {
      const errorMessage = err.message
      storeActiveBlock.onActiveNotification(errorMessage, 'error.png')
    } finally {
      setTimeout(() => {
        if (storeActiveBlock.activeBlockAboveContent !== '') {
          storeActiveBlock.onActiveBlockAboveContent()
        }

        storeActiveBlock.onActiveNotification()
      }, 5000)
    }
  }
  return { formData, user, registerUser, loginUser }
})
