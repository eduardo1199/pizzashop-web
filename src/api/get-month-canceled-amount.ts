import { api } from '@/lib/axios'

export interface GetOrderCanceledAmount {
  amount: number
  diffFromLastMonth: number
}

export async function getOrderCanceledAmount() {
  const response = await api.get<GetOrderCanceledAmount>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
