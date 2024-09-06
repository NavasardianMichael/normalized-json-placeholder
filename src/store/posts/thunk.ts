import { getPosts } from 'api/posts/main'
import { AxiosError, isAxiosError } from 'axios'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { initPosts } from './slice'

export const getPostsThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.posts}/getPostsThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const postsList = await getPosts()
      dispatch(initPosts(postsList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
