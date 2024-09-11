import { RootState } from 'configs/store'

export const selectUsers = (state: RootState) => state.users

export const selectEditableUserId = (state: RootState) => state.users.editableId

export const selectUsersPendingStatus = (state: RootState) => state.users.pendingStatus
