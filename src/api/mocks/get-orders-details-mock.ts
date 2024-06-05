import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailParams,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    totalInCents: 200,
    customer: {
      name: 'Jonh Doe',
      email: 'jonh.doe@gmail.com',
      phone: '1321316516541',
    },
    status: 'pending',
    createdAt: new Date().toDateString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 100,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-1',
        priceInCents: 100,
        product: { name: 'Pizza Marguerita' },
        quantity: 1,
      },
    ],
  })
})
