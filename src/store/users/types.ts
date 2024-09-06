import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'

export type UserSlice = {
  list: Normalized<User>
  pendingStatus: PendingStatus
}

export type User = {
  id: number
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
  }
  phone: string
  website: string
  companyName: string
}

export type UsersActionPayloads = {
  initUsers: UserSlice['list']
  setUserOptions: PartialButRequired<User, 'id'>
}
