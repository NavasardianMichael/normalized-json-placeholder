import { RootState } from 'configs/store'

export const selectComments = (state: RootState) => state.comments

export const selectCommentsPendingStatus = (state: RootState) => state.comments.pendingStatus

export const selectEditableCommentId = (state: RootState) => state.comments.editableId
