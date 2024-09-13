import { AxiosError, isAxiosError } from 'axios'
import { getAlbums } from 'api/albums/main'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { initAlbums } from './slice'

export const getAlbumsThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.albums}/getAlbumsThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const albumsList = await getAlbums()
      dispatch(initAlbums(albumsList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
