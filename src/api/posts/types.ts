import { Endpoint } from 'api/shared/types'
import { Post, PostsSlice } from 'store/posts/types'

export type GetPostsAPI = Endpoint<{
  response: PostResponse[]
  processed: PostsSlice['list']
}>

export type PostResponse = Post
