import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmount } from '../get-month-orders-amount'

export const getMonthOrderAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmount
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: -5,
  })
})
