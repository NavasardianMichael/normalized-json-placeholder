import { RootState } from 'configs/store'

export const selectComments = (state: RootState) => state.todos

export const selectCommentsPendingStatus = (state: RootState) => state.todos.pendingStatus
