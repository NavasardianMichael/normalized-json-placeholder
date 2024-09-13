import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { SliceCommonProps } from 'helpers/types/store'

export type UserSlice = Normalized<User> & SliceCommonProps<User['id']>

export type User = {
  id: number
  name: string
  email: string
  address: string
  phone: string
  companyName: string
}

export type UsersActionPayloads = {
  initUsers: Omit<UserSlice, keyof SliceCommonProps<User['id']>>
  setUserOptions: PartialButRequired<User, 'id'>
  setEditableUserId: User['id']
}
