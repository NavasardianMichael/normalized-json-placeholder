import { RootState } from 'configs/store'

export const selectUsers = (state: RootState) => state.users

export const selectUsersPendingStatus = (state: RootState) => state.users.pendingStatus

export const selectEditableUserId = (state: RootState) => state.users.editableId
