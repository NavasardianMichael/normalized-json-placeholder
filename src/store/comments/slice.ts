import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { CommentsActionPayloads, CommentsSlice } from './types'

const initialState: CommentsSlice = {
  byId: {},
  allIds: [],
  editableId: 0,
  pendingStatus: PENDING_STATUSES.idle,
  errorMessage: '',
}

export const { reducer: commentsReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.comments,
  initialState,
  reducers: {
    initComments: (state, { payload }: PayloadAction<CommentsActionPayloads['initComments']>) => {
      return {
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
    setEditableCommentId: (state, { payload }: PayloadAction<CommentsActionPayloads['setEditableCommentId']>) => {
      state.editableId = payload
    },
  },
})

export const { initComments, setCommentOptions, setEditableCommentId } = actions

export default commentsReducer
