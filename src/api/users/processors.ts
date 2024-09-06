import { User } from 'store/users/types'
import { GetUsersAPI } from './types'

export const processGetUsersResponse: GetUsersAPI['processor'] = (result) => {
  return result.reduce(
    (acc, user) => {
      const processedUser = processUserResponse(user)
      acc.byId[processedUser.id] = processedUser
      acc.allIds.push(processedUser.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as GetUsersAPI['processedResult']
  )
}

const processUserResponse = (user: GetUsersAPI['response'][number]): User => {
  return {
    id: user.id,
    address: user.address,
    companyName: user.company.name,
    email: user.email,
    name: user.name,
    phone: user.phone,
    website: user.website,
  }
}
