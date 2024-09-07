import { AxiosError, isAxiosError } from 'axios'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { Post } from 'store/posts/types'
import { initComments } from './slice'
import { getCommentsByPostId } from 'api/comments/main'

export const getCommentsByPostIdThunk = createAppAsyncThunk<void, Post['id']>(
  `${STATE_SLICE_NAMES.comments}/getCommentsByPostIdThunk`,
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      const commentsList = await getCommentsByPostId(postId)
      dispatch(initComments(commentsList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
