import { SerializedError } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'configs/store'
import { User } from 'store/users/types'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'

export type ThunkConfig = {
  state: RootState
  dispatch: AppDispatch
  rejectValue: SerializedError
}

export type StateSliceName = (typeof STATE_SLICE_NAMES)[keyof typeof STATE_SLICE_NAMES]

export type PendingStatus = (typeof PENDING_STATUSES)[keyof typeof PENDING_STATUSES]

export type SliceCommonProps<EntityId> = {
  pendingStatus: PendingStatus
  editableId: EntityId
  errorMessage: Error['message']
}

export type ByUserIdShape<EntityId> = {
  idsByUserId: Record<User['id'], EntityId[]>
}
