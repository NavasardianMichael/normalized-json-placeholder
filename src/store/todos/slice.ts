import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { TodosActionPayloads, TodosSlice } from './types'

const initialState: TodosSlice = {
  byId: {},
  allIds: [],
  idsByUserId: [],
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: todosReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.todos,
  initialState,
  reducers: {
    initTodos: (state, { payload }: PayloadAction<TodosActionPayloads['initTodos']>) => {
      state = {
        ...state,
        ...payload,
      }
    },
    setTodoOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<TodosActionPayloads['setTodoOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initTodos, setTodoOptions } = actions

export default todosReducer
