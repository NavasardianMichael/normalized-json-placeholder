import { configureStore } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import appReducer from 'store/app/slice'
import { postsReducer } from 'store/posts/slice'
import { usersReducer } from 'store/users/slice'

export const store = configureStore({
  reducer: {
    [STATE_SLICE_NAMES.app]: appReducer,
    [STATE_SLICE_NAMES.users]: usersReducer,
    [STATE_SLICE_NAMES.posts]: postsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
