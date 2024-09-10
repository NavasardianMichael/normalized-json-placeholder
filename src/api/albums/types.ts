import { Endpoint } from 'api/shared/types'
import { Album, AlbumsSlice } from 'store/albums/types'

export type GetAlbumsAPI = Endpoint<{
  response: AlbumResponse[]
  processed: Omit<AlbumsSlice, 'pendingStatus'>
}>

export type AlbumResponse = Album
