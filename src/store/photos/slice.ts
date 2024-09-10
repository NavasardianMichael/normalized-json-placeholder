import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { PhotosActionPayloads, PhotosSlice } from './types'

const initialState: PhotosSlice = {
  byId: {},
  allIds: [],
  pendingStatus: PENDING_STATUSES.idle,
}

export const { reducer: photosReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.photos,
  initialState,
  reducers: {
    initPhotos: (state, { payload }: PayloadAction<PhotosActionPayloads['initPhotos']>) => {
      state = {
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
  },
})

export const { initPhotos, setPhotoOptions } = actions

export default photosReducer
