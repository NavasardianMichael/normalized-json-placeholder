import { Endpoint } from 'api/shared/types'
import { Post, PostsSlice } from 'store/posts/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetPostsAPI = Endpoint<{
  response: PostResponse[]
  processed: Omit<PostsSlice, keyof SliceCommonProps<Post>>
}>

export type PostResponse = Post
