import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { PhotosActionPayloads, PhotosSlice } from './types'

const initialState: PhotosSlice = {
  byId: {},
  allIds: [],
  editableId: 0,
  pendingStatus: PENDING_STATUSES.idle,
  errorMessage: '',
}

export const { reducer: photosReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.photos,
  initialState,
  reducers: {
    initPhotos: (state, { payload }: PayloadAction<PhotosActionPayloads['initPhotos']>) => {
      return {
        ...state,
        ...payload,
      }
    },
    setPhotoOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<PhotosActionPayloads['setPhotoOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
    setEditablePhotoId: (state, { payload }: PayloadAction<PhotosActionPayloads['setEditablePhotoId']>) => {
      state.editableId = payload
    },
  },
})

export const { initPhotos, setPhotoOptions, setEditablePhotoId } = actions

export default photosReducer
