import { Comment } from 'store/comments/types'
import { GetCommentsByPostIdAPI } from './types'

export const processGetCommentsByPostIdResponse: GetCommentsByPostIdAPI['processor'] = (response) => {
  return response.reduce(
    (acc, comment) => {
      const processedComment = processCommentResponse(comment)
      acc.byId[processedComment.id] = processedComment
      acc.allIds.push(processedComment.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as GetCommentsByPostIdAPI['processedResult']
  )
}

const processCommentResponse = (comment: GetCommentsByPostIdAPI['response'][number]): Comment => {
  // API response not being processed, but the "processor" layer exits to have homogeneous entities and maintainable flow
  return comment
}
