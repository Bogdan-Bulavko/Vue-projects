// Pinia lib
import { defineStore, storeToRefs } from 'pinia'

// Vue lib
import { ref } from 'vue'

// Types
import type { Ref } from 'vue'
import type { User } from 'firebase/auth'
import type { ListOrders } from '@/types/order.types'
import { FirebaseError } from '@firebase/util'

// Firebase lib
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Firebase init
import { app, db } from '@/firebase'

// Pinia store
import { useActiveBlockStore } from './activeBlockStore'
import { useProductStore } from './productsStore'

export const useUserStore = defineStore('user', () => {
  const storeActiveBlock = useActiveBlockStore()

  const auth = getAuth(app)

  const user: Ref<User | null> = ref(null)

  const listOrders: Ref<ListOrders> = ref([])

  const formUpdateName: Ref<string> = ref('')
  const formUpdateEmail: Ref<string> = ref('')

  const storeProducts = useProductStore()

  const { clearProductInBasket, clearProductInFavorite } = storeProducts

  const { productsInBasket, calculateTaxTotalPrice } = storeToRefs(storeProducts)

  const formData: Ref<{ email: string; password: string; name: string }> = ref({
    email: '',
    password: '',
    name: '',
  })

  onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      user.value = userAuth
    }
  })

  const clearUserData = (): void => {
    user.value = null
    listOrders.value = []
    clearProductInBasket()
    clearProductInFavorite()
  }

  const placeAnOrder = async (): Promise<void> => {
    try {
      if (user.value === null) {
        throw 'Для оформления заказа вам нужно авторизоваться'
      }

      const now = new Date()

      const docRef = await addDoc(collection(db, `users/${user.value.uid}/orders`), {
        products: productsInBasket.value,
        totalPrice: calculateTaxTotalPrice.value,
        date: now.getTime(),
      })

      await updateDoc(docRef, { id: docRef.id })

      storeActiveBlock.onActiveNotification('Ваш заказ оформлен', 'checked.svg')

      clearProductInBasket()
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
    }
  }

  const getListOrders = async (): Promise<void> => {
    if (user.value !== null) {
      const querySnapshot = await getDocs(collection(db, `users/${user.value.uid}/orders`))
      const list: ListOrders = []

      querySnapshot.forEach((doc) => {
        list.push(doc.data())
      })

      list.sort((a, b) => {
        return b.date - a.date
      })

      listOrders.value = list
    }
  }

  const updateAccount = async (): Promise<void> => {
    try {
      const userAuth = auth.currentUser as User

      if (formUpdateName.value.length > 0) {
        await updateProfile(userAuth, {
          displayName: formUpdateName.value,
        })
        updateUserData('displayName', formUpdateName.value)
        storeActiveBlock.onActiveNotification('Изменения успешно сохранены!', 'checked.svg')
      }

      if (formUpdateEmail.value.length > 0) {
        await verifyBeforeUpdateEmail(userAuth, formUpdateEmail.value)

        storeActiveBlock.onActiveNotification(
          'Мы отправили вам письмо для подтверждения новой почты, подтвердите почту и войдите с новыми данными!',
          'checked.svg',
        )

        signOutUser()
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
    } finally {
      formUpdateName.value = ''
      formUpdateEmail.value = ''
    }
  }

  const updateUserData = (property: string, value: string): void => {
    const userAuth = auth.currentUser as User
    user.value = {
      ...userAuth,
      [property]: value,
    }
  }

  const sendlVerificationEmail = async (): Promise<void> => {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
      signOutUser()
      storeActiveBlock.onActiveNotification(
        'Мы отправили вам письмо для подтверждения почты, подтвердите для изменения статуса. После подверждения обновите страницу',
        'checked.svg',
      )
    }
  }

  const registerUser = async (): Promise<void> => {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        formData.value.email,
        formData.value.password,
      )

      storeActiveBlock.onActiveNotification('Вы успешно зарегистрировались!', 'checked.svg')
      user.value = firebaseUser.user

      if (formUpdateName.value !== '') {
        await updateProfile(firebaseUser.user, {
          displayName: formUpdateName.value,
        })
        formUpdateName.value = ''
      }

      setTimeout(() => {
        if (storeActiveBlock.activeBlockAboveContent !== '') {
          storeActiveBlock.onActiveBlockAboveContent()
          formData.value.email = ''
          formData.value.password = ''
        }
      }, 5000)
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
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
      setTimeout(() => {
        if (storeActiveBlock.activeBlockAboveContent !== '') {
          storeActiveBlock.onActiveBlockAboveContent()
        }
      }, 5000)
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
    }
  }

  const signOutUser = async (): Promise<void> => {
    try {
      storeActiveBlock.activeBlock = 'allProducts'
      clearUserData()
      await signOut(auth)
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
    }
  }

  const deleteProfile = async (): Promise<void> => {
    try {
      const userAuth = auth.currentUser as User

      storeActiveBlock.activeBlock = 'allProducts'

      const credential = EmailAuthProvider.credential(userAuth.email as string, 'kladenec')

      await reauthenticateWithCredential(userAuth, credential)

      const querySnapshot = await getDocs(collection(db, `users/${userAuth.uid}/orders`))

      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, `users/${userAuth.uid}/orders/${document.id}`))
      })

      clearUserData()

      await deleteUser(userAuth)

      storeActiveBlock.onActiveNotification('Ваш аккаунт удалён', 'checked.svg')
    } catch (err) {
      if (err instanceof FirebaseError) {
        storeActiveBlock.onActiveNotification(err.message, 'error.png')
      }
      console.log(err)
    }
  }

  return {
    formData,
    user,
    listOrders,
    formUpdateName,
    formUpdateEmail,
    placeAnOrder,
    getListOrders,
    registerUser,
    loginUser,
    updateAccount,
    sendlVerificationEmail,
    signOutUser,
    deleteProfile,
  }
})
