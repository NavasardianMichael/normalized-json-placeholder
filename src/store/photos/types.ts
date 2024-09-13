import { Album } from 'store/albums/types'
import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { SliceCommonProps } from 'helpers/types/store'

export type PhotosSlice = Normalized<Photo> & SliceCommonProps<Photo['id']>

export type Photo = {
  id: number
  albumId: Album['id']
  title: string
  url: string
  thumbnailUrl: string
}

export type PhotosActionPayloads = {
  initPhotos: Omit<PhotosSlice, keyof SliceCommonProps<Photo['id']>>
  setPhotoOptions: PartialButRequired<Photo, 'id'>
  setEditablePhotoId: Photo['id']
}
