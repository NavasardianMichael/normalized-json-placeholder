import { AxiosError } from 'axios'
import { getCommentsByPostId } from 'api/comments/main'
import { Post } from 'store/posts/types'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initComments } from './slice'

export const getCommentsByPostIdThunk = createAppAsyncThunk<void, Post['id']>(
  `${STATE_SLICE_NAMES.comments}/getCommentsByPostIdThunk`,
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      const commentsList = await getCommentsByPostId(postId)
      dispatch(initComments(commentsList))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
