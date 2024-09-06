import { Post } from 'store/posts/types'
import { GetPostsAPI } from './types'

export const processGetPostsResponse: GetPostsAPI['processor'] = (result) => {
  return result.reduce(
    (acc, post) => {
      const processedPost = processPostResponse(post)
      acc.byId[processedPost.id] = processedPost
      acc.allIds.push(processedPost.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as GetPostsAPI['processedResult']
  )
}

const processPostResponse = (post: GetPostsAPI['response'][number]): Post => {
  // API response not being processed, but the "processor" layer exits to have homogeneous entities and maintainable flow
  return post
}
