import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { CommentsActionPayloads, CommentsSlice } from './types'

const initialState: CommentsSlice = {
  byId: {},
  allIds: [],
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: commentsReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.comments,
  initialState,
  reducers: {
    initComments: (state, { payload }: PayloadAction<CommentsActionPayloads['initComments']>) => {
      state = {
        ...state,
        ...payload,
      }
    },
    setCommentOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<CommentsActionPayloads['setCommentOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initComments, setCommentOptions } = actions

export default commentsReducer
