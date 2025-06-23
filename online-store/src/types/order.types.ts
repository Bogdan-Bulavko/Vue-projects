import type { DocumentData } from 'firebase/firestore'

export interface Order {
  products: DocumentData[]
  id: string
  totalPrice: number
  date: number
}

export type ListOrders = Order[]
