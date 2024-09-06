import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { UserSlice, UsersActionPayloads } from './types'

const initialState: UserSlice = {
  list: {
    allIds: [],
    byId: {},
  },
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: usersReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.users,
  initialState,
  reducers: {
    initUsers: (state, { payload }: PayloadAction<UsersActionPayloads['initUsers']>) => {
      state.list = payload
    },
    setUserOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<UsersActionPayloads['setUserOptions']>
    ) => {
      state.list.byId[id] = {
        ...state.list.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initUsers, setUserOptions } = actions

export default usersReducer
