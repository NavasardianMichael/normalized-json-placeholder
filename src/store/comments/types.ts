import { Post } from 'store/posts/types'
import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { SliceCommonProps } from 'helpers/types/store'

export type CommentsSlice = Normalized<Comment> & SliceCommonProps<Comment['id']>

export type Comment = {
  id: number
  postId: Post['id']
  name: string
  email: string
  body: string
}

export type CommentsActionPayloads = {
  initComments: Omit<CommentsSlice, keyof SliceCommonProps<Comment['id']>>
  setCommentOptions: PartialButRequired<Comment, 'id'>
}
