import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TodosActionPayloads, TodosSlice } from './types'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'

const initialState: TodosSlice = {
  list: {
    allIds: [],
    byId: {},
  },
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: todosReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.todos,
  initialState,
  reducers: {
    initTodos: (state, { payload }: PayloadAction<TodosActionPayloads['initTodos']>) => {
      state.list = payload
    },
    setTodoOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<TodosActionPayloads['setTodoOptions']>
    ) => {
      state.list.byId[id] = {
        ...state.list.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initTodos, setTodoOptions } = actions

export default todosReducer
