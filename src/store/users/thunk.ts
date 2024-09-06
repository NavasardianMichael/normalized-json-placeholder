import { getUsers } from 'api/users/main'
import { AxiosError, isAxiosError } from 'axios'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { initUsers } from './slice'

export const getUsersThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.users}/getUsersThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const usersList = await getUsers()
      dispatch(initUsers(usersList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
