import { User } from 'store/users/types'
import { GetUsersAPI } from './types'

export const processGetUsersResponse: GetUsersAPI['processor'] = (response) => {
  return response.reduce(
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
  const { id, email, address, company, name, phone } = user
  return {
    id,
    address: `${address.suite}, ${address.street}, ${address.city}`,
    companyName: company.name,
    email,
    name,
    phone,
  }
}
