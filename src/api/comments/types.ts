import { Endpoint } from 'api/shared/types'
import { Comment, CommentsSlice } from 'store/comments/types'
import { Post } from 'store/posts/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetCommentsByPostIdAPI = Endpoint<{
  payload: Post['id']
  response: CommentResponse[]
  processed: Omit<CommentsSlice, keyof SliceCommonProps<Comment>>
}>

export type CommentResponse = Comment
