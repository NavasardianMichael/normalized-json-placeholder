import { AxiosError } from 'axios'
import { getPhotos } from 'api/photos/main'
import { processPhotoIdsByAlbumId } from 'api/photos/processors'
import { setPhotoIdsByAlbumId } from 'store/albums/slice'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initPhotos } from './slice'

export const getPhotosThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.photos}/getPhotosThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const photosList = await getPhotos()
      dispatch(initPhotos(photosList))

      const photoIdsByAlbumId = processPhotoIdsByAlbumId(photosList)
      dispatch(setPhotoIdsByAlbumId(photoIdsByAlbumId))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
