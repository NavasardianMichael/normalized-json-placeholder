import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { User } from 'store/users/types'

export type AlbumsSlice = Normalized<Album> & {
  idsByUserId: Record<User['id'], Album['id'][]>
  pendingStatus: PendingStatus
}

export type Album = {
  id: number
  userId: User['id']
  title: string
}

export type AlbumsActionPayloads = {
  initAlbums: Omit<AlbumsSlice, 'pendingStatus'>
  setAlbumOptions: PartialButRequired<Album, 'id'>
}
