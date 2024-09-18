import { AxiosError } from 'axios'
import { getUsers } from 'api/users/main'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initUsers } from './slice'

export const getUsersThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.users}/getUsersThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const usersList = await getUsers()

      dispatch(initUsers(usersList))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
