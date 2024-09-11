import { AxiosError, isAxiosError } from 'axios'
import { getTodos } from 'api/todos/main'
import { User } from 'store/users/types'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/utils/store'
import { initTodos } from './slice'

export const getTodosByUserIdThunk = createAppAsyncThunk<void, User['id']>(
  `${STATE_SLICE_NAMES.todos}/getTodosByUserIdThunk`,
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const todosList = await getTodos(userId)
      dispatch(initTodos(todosList))
    } catch (e) {
      const error = e as Error | AxiosError
      const processedError = isAxiosError(error) ? error?.response?.data : error
      return rejectWithValue(processedError)
    }
  }
)
