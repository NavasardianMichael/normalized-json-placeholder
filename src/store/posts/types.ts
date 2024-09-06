import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { User } from 'store/users/types'

export type PostsSlice = {
  list: Normalized<Post>
  pendingStatus: PendingStatus
}

export type Post = {
  id: number
  userId: User['id']
  title: string
  body: string
}

export type PostsActionPayloads = {
  initPosts: PostsSlice['list']
  setPostOptions: PartialButRequired<Post, 'id'>
}
