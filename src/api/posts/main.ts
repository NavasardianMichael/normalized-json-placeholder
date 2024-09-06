import axiosInstance from 'configs/axios'
import { processGetPostsResponse } from './processors'
import { GetPostsAPI } from './types'

export const getPosts: GetPostsAPI['api'] = async () => {
  const { data } = await axiosInstance.get<GetPostsAPI['response']>(`/posts`)

  const processedUsers = processGetPostsResponse(data)

  return processedUsers
}
