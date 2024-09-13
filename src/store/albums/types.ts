import { Photo } from 'store/photos/types'
import { User } from 'store/users/types'
import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { ByUserIdShape, SliceCommonProps } from 'helpers/types/store'

export type AlbumsSlice = Normalized<Album> & ByUserIdShape<Album['id']> & SliceCommonProps<Album['id']>

export type Album = {
  id: number
  title: string
  userId: User['id']
  photoIds: Photo['id'][]
}

export type AlbumsActionPayloads = {
  initAlbums: Omit<AlbumsSlice, 'pendingStatus'>
  setAlbumOptions: PartialButRequired<Album, 'id'>
  setEditableAlbumId: Album['id']
}
