import { RootState } from 'configs/store'

export const selectComments = (state: RootState) => state.comments

export const selectCommentsPendingStatus = (state: RootState) => state.comments.pendingStatus
