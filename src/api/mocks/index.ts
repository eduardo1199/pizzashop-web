import { setupWorker } from 'msw/browser'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrderAmountMock } from './get-day-orders-amount-mock'
import { getMonthOrderAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue'
import { registerRestaurantMock } from './register-restarant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrderAmountMock,
  getMonthOrderAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
)
