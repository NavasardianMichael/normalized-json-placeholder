import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { CommentsActionPayloads, CommentsSlice } from './types'

const initialState: CommentsSlice = {
  list: {
    allIds: [],
    byId: {},
  },
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: commentsReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.comments,
  initialState,
  reducers: {
    initComments: (state, { payload }: PayloadAction<CommentsActionPayloads['initComments']>) => {
      state.list = payload
    },
    setCommentOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<CommentsActionPayloads['setCommentOptions']>
    ) => {
      state.list.byId[id] = {
        ...state.list.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initComments, setCommentOptions } = actions

export default commentsReducer
