import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { Post } from 'store/posts/types'

export type CommentsSlice = {
  list: Normalized<Comment>
  pendingStatus: PendingStatus
}

export type Comment = {
  id: number
  postId: Post['id']
  name: string
  email: string
  body: string
}

export type CommentsActionPayloads = {
  initComments: CommentsSlice['list']
  setCommentOptions: PartialButRequired<Comment, 'id'>
}
