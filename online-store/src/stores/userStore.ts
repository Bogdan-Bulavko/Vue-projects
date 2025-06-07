// Pinia lib
import { defineStore } from 'pinia'

// Vue lib
import { ref } from 'vue'

// Types
import type { Ref } from 'vue'

// Firebase lib
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'

// Firebase init
import { app } from '/src/firebase'

// Pinia store
import { useActiveBlockStore } from './activeBlockStore'

export const useUserStore = defineStore('user', () => {
  const storeActiveBlock = useActiveBlockStore()

  const auth = getAuth(app)

  const user: Ref<User | null> = ref(null)

  const formData: Ref<{ email: string; password: string; name: string }> = ref({
    email: '',
    password: '',
    name: '',
  })

  const updateAccount = async (
    displayName: string | undefined | null = user.value?.displayName,
  ): Promise<void> => {
    try {
      const userAuth = auth.currentUser as User

      await updateProfile(userAuth, {
        displayName: displayName,
      })

      user.value = userAuth
      storeActiveBlock.onActiveNotification('Изменения успешно сохранены!', 'checked.svg')
    } catch (err) {
      const errorMessage = err.message
      storeActiveBlock.onActiveNotification(errorMessage, 'error.png')
    }
  }

  const registerUser = async (): Promise<void> => {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        formData.value.email,
        formData.value.password,
      )

      if (formData.value.name !== '') {
        updateAccount(formData.value.name)
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
      }, 5000)
    }
  }

  const loginUser = async (): Promise<void> => {
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        formData.value.email,
        formData.value.password,
      )

      user.value = firebaseUser.user
      storeActiveBlock.onActiveNotification('Вы успешно авторизовались!', 'checked.svg')
    } catch (err) {
      const errorMessage = err.message
      storeActiveBlock.onActiveNotification(errorMessage, 'error.png')
    } finally {
      setTimeout(() => {
        if (storeActiveBlock.activeBlockAboveContent !== '') {
          storeActiveBlock.onActiveBlockAboveContent()
        }
      }, 5000)
    }
  }

  const authenticationUser = (): void => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        user.value = userAuth
        storeActiveBlock.onActiveNotification('Вы успешно аунтефицировались', 'checked.svg')
      } else {
        user.value = null
      }
    })
  }

  const signOutUser = async (): Promise<void> => {
    try {
      storeActiveBlock.activeBlock = 'allProducts'
      user.value = null
      await signOut(auth)
      storeActiveBlock.onActiveNotification('Выход из учетной записи', 'checked.svg')
    } catch (err) {
      const errorMessage = err.message
      storeActiveBlock.onActiveNotification(errorMessage, 'error.png')
    }
  }
  return {
    formData,
    user,
    registerUser,
    loginUser,
    authenticationUser,
    updateAccount,
    signOutUser,
  }
})
