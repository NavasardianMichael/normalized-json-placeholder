import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { TodosActionPayloads, TodosSlice } from './types'

const initialState: TodosSlice = {
  byId: {},
  allIds: [],
  idsByUserId: [],
  editableId: 0,
  pendingStatus: PENDING_STATUSES.idle,
  errorMessage: '',
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
    setEditableTodoId: (state, { payload }: PayloadAction<TodosActionPayloads['setEditableTodoId']>) => {
      state.editableId = payload
    },
  },
})

export const { initTodos, setTodoOptions, setEditableTodoId } = actions

export default todosReducer
