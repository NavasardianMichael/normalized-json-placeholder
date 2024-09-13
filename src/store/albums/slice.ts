import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PENDING_STATUSES, STATE_SLICE_NAMES } from 'helpers/constants/store'
import { AlbumsActionPayloads, AlbumsSlice } from './types'

const initialState: AlbumsSlice = {
  byId: {},
  allIds: [],
  idsByUserId: [],
  editableId: 0,
  pendingStatus: PENDING_STATUSES.idle,
  errorMessage: '',
}

export const { reducer: albumsReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.albums,
  initialState,
  reducers: {
    initAlbums: (state, { payload }: PayloadAction<AlbumsActionPayloads['initAlbums']>) => {
      state = {
        ...state,
        ...payload,
      }
    },
    setAlbumOptions: (
      state,
      { payload: { id, ...restOptions } }: PayloadAction<AlbumsActionPayloads['setAlbumOptions']>
    ) => {
      state.byId[id] = {
        ...state.byId[id],
        ...restOptions,
      }
    },
    setEditableAlbumId: (state, { payload }: PayloadAction<AlbumsActionPayloads['setEditableAlbumId']>) => {
      state.editableId = payload
    },
  },
})

export const { initAlbums, setAlbumOptions, setEditableAlbumId } = actions

export default albumsReducer
