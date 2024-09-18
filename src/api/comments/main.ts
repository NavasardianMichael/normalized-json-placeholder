import axiosInstance from 'configs/axios'
import { processGetCommentsByPostIdResponse } from './processors'
import { GetCommentsByPostIdAPI } from './types'

export const getCommentsByPostId: GetCommentsByPostIdAPI['api'] = async (postId) => {
  const { data } = await axiosInstance.get<GetCommentsByPostIdAPI['response']>(`/comments/${postId}`)

  const processedComments = processGetCommentsByPostIdResponse(data)

  return processedComments
}
