import { AxiosError } from 'axios'
import { getPosts } from 'api/posts/main'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initPosts } from './slice'

export const getPostsThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.posts}/getPostsThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const postsList = await getPosts()
      dispatch(initPosts(postsList))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
