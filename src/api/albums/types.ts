import { Endpoint } from 'api/shared/types'
import { Album, AlbumsSlice } from 'store/albums/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetAlbumsAPI = Endpoint<{
  response: AlbumResponse[]
  processed: Omit<AlbumsSlice, keyof SliceCommonProps<Album>>
}>

export type AlbumResponse = Album
