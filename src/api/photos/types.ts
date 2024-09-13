import { Endpoint } from 'api/shared/types'
import { Photo, PhotosSlice } from 'store/photos/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetPhotosAPI = Endpoint<{
  response: PhotoResponse[]
  processed: Omit<PhotosSlice, keyof SliceCommonProps<Photo>>
}>

export type PhotoResponse = Photo
