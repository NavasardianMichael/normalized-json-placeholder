import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { Album } from 'store/albums/types'

export type PhotosSlice = Normalized<Photo> & {
  pendingStatus: PendingStatus
}

export type Photo = {
  id: number
  albumId: Album['id']
  title: string
  url: string
  thumbnailUrl: string
}

export type PhotosActionPayloads = {
  initPhotos: Omit<PhotosSlice, 'pendingStatus'>
  setPhotoOptions: PartialButRequired<Photo, 'id'>
}
