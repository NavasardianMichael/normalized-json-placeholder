import { User } from 'store/users/types'
import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { ByUserIdShape, SliceCommonProps } from 'helpers/types/store'

export type PostsSlice = Normalized<Post> & ByUserIdShape<Post['id']> & SliceCommonProps<Post['id']>

export type Post = {
  id: number
  userId: User['id']
  title: string
  body: string
}

export type PostsActionPayloads = {
  initPosts: Omit<PostsSlice, keyof SliceCommonProps<Post['id']>>
  setPostOptions: PartialButRequired<Post, 'id'>
}
