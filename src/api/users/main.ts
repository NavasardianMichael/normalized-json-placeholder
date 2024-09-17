import axiosInstance from 'configs/axios'
import { processGetUsersResponse } from './processors'
import { GetUsersAPI } from './types'

export const getUsers: GetUsersAPI['api'] = async () => {
  const { data } = await axiosInstance.get<GetUsersAPI['response']>(`/users`)

  const processedUsers = processGetUsersResponse(data)
  console.log({ processedUsers })

  return processedUsers
}
