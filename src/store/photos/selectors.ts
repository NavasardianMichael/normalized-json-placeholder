import { RootState } from 'configs/store'

export const selectPhotos = (state: RootState) => state.photos

export const selectPhotosPendingStatus = (state: RootState) => state.photos.pendingStatus

export const selectEditablePhotoId = (state: RootState) => state.photos.editableId
