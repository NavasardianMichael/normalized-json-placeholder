import { AxiosError, isAxiosError } from 'axios'
import { getPhotos } from 'api/photos/main'
import { Post } from 'store/posts/types'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { initPhotos } from './slice'

export const getPhotosThunk = createAppAsyncThunk<void, Post['id']>(
  `${STATE_SLICE_NAMES.photos}/getPhotosThunk`,
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      const photosList = await getPhotos(postId)
      dispatch(initPhotos(photosList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
