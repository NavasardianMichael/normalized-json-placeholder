import { AxiosError } from 'axios'
import { getTodos } from 'api/todos/main'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk, processThunkError } from 'helpers/utils/store'
import { initTodos } from './slice'

export const getTodosThunk = createAppAsyncThunk<void, void>(
  `${STATE_SLICE_NAMES.todos}/getTodosThunk`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const todosList = await getTodos()
      dispatch(initTodos(todosList))
    } catch (e) {
      const processedError = processThunkError(e as Error | AxiosError, dispatch)
      rejectWithValue(processedError)
    }
  }
)
