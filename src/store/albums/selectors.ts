import { RootState } from 'configs/store'

export const selectAlbums = (state: RootState) => state.albums

export const selectAlbumsPendingStatus = (state: RootState) => state.albums.pendingStatus
