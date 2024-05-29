import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      createdAt: new Date(),
      id: 'custom-user-id',
      name: 'Jonh doe',
      email: 'jonh.doe@gmail.com',
      phone: '651651651651',
      updatedAt: null,
      role: 'manager',
    })
  },
)
