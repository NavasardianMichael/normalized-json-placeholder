import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { UserSlice, UsersActionPayloads } from './types'

const initialState: UserSlice = {
  allIds: [],
  byId: {},
  editableId: 0,
  pendingStatus: PENDING_STATUSES.idle,
  errorMessage: '',
}

export const { reducer: usersReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.users,
  initialState,
  reducers: {
    initUsers: (state, { payload }: PayloadAction<UsersActionPayloads['initUsers']>) => {
      state = {
        ...state,
        ...payload,
      }
    },
    setUserOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<UsersActionPayloads['setUserOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
    setEditableUserId: (state, { payload }: PayloadAction<UsersActionPayloads['setEditableUserId']>) => {
      state.editableId = payload
    },
  },
})

export const { initUsers, setUserOptions, setEditableUserId } = actions

export default usersReducer
