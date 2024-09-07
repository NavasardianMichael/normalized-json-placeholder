import { configureStore } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import appReducer from 'store/app/slice'
import commentsReducer from 'store/comments/slice'
import { postsReducer } from 'store/posts/slice'
import todosReducer from 'store/todos/slice'
import { usersReducer } from 'store/users/slice'

export const store = configureStore({
  reducer: {
    [STATE_SLICE_NAMES.app]: appReducer,
    [STATE_SLICE_NAMES.users]: usersReducer,
    [STATE_SLICE_NAMES.posts]: postsReducer,
    [STATE_SLICE_NAMES.comments]: commentsReducer,
    [STATE_SLICE_NAMES.todos]: todosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
