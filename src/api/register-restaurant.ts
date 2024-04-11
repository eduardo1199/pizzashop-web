import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  email: string
  restaurantName: string
  phone: string
  managerName: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
