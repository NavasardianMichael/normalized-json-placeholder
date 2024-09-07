import { Endpoint } from 'api/shared/types'
import { Comment, CommentsSlice } from 'store/comments/types'
import { Post } from 'store/posts/types'

export type GetCommentsByPostIdAPI = Endpoint<{
  payload: Post['id']
  response: CommentResponse[]
  processed: CommentsSlice['list']
}>

export type CommentResponse = Comment
