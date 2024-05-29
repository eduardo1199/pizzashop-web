import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      amount: 9,
      product: 'Pizza 01',
    },
    {
      amount: 8,
      product: 'Pizza 03',
    },
    {
      amount: 15,
      product: 'Pizza 02',
    },
    {
      amount: 55,
      product: 'Pizza 05',
    },
    {
      amount: 20,
      product: 'Pizza 07',
    },
  ])
})
