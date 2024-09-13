import { Endpoint } from 'api/shared/types'
import { User, UserSlice } from 'store/users/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetUsersAPI = Endpoint<{
  response: UserResponse[]
  processed: Omit<UserSlice, keyof SliceCommonProps<User['id']>>
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
