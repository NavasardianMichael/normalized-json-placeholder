import axiosInstance from 'configs/axios'
import { GetCommentsByPostIdAPI } from './types'
import { processGetCommentsByPostIdResponse } from './processors'

export const getCommentsByPostId: GetCommentsByPostIdAPI['api'] = async (postId) => {
  const { data } = await axiosInstance.get<GetCommentsByPostIdAPI['response']>(`/comments/${postId}`)

  const processedComments = processGetCommentsByPostIdResponse(data)

  return processedComments
}
