import { http, HttpResponse } from 'msw'

import { GetOrderCanceledAmount } from '../get-month-canceled-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetOrderCanceledAmount
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
