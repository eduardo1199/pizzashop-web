import { api } from '@/lib/axios'

export interface DeliveryOrder {
  orderId: string
}

export async function deliveryOrder({ orderId }: DeliveryOrder) {
  await api.patch(`/orders/${orderId}/deliver`)
}
