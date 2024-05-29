import { http, HttpResponse } from 'msw'

import { GetManagerRestaurantResponse } from '../get-manager-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagerRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    id: 'custom-restaurant-id',
    name: 'Pizza shop',
    updatedAt: null,
    description: 'Custom restaurant description.',
    managerId: 'custom-user-id',
  })
})
