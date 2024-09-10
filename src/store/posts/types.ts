import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { User } from 'store/users/types'

export type PostsSlice = Normalized<Post> & {
  idsByUserId: Record<User['id'], Post['id'][]>
  pendingStatus: PendingStatus
}

export type Post = {
  id: number
  userId: User['id']
  title: string
  body: string
}

export type PostsActionPayloads = {
  initPosts: Omit<PostsSlice, 'pendingStatus'>
  setPostOptions: PartialButRequired<Post, 'id'>
}
