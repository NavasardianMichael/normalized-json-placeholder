import { AxiosError } from 'axios'
import { getAlbums } from 'api/albums/main'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initAlbums } from './slice'

export const getAlbumsThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.albums}/getAlbumsThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const albumsList = await getAlbums()
      dispatch(initAlbums(albumsList))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
