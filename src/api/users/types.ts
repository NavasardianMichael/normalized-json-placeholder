import { Endpoint } from 'api/shared/types'
import { UserSlice } from 'store/users/types'

export type GetUsersAPI = Endpoint<{
  response: UserResponse[]
  processed: UserSlice['list']
}>

export type UserResponse = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
