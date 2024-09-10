import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { PostsActionPayloads, PostsSlice } from './types'

const initialState: PostsSlice = {
  byId: {},
  allIds: [],
  idsByUserId: [],
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: postsReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.posts,
  initialState,
  reducers: {
    initPosts: (state, { payload }: PayloadAction<PostsActionPayloads['initPosts']>) => {
      state = {
        ...state,
        ...payload,
      }
    },
    setPostOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<PostsActionPayloads['setPostOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
  },
})

export const { initPosts, setPostOptions } = actions

export default postsReducer
