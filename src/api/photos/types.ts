import { Endpoint } from 'api/shared/types'
import { Photo, PhotosSlice } from 'store/photos/types'

export type GetPhotosAPI = Endpoint<{
  response: PhotoResponse[]
  processed: Omit<PhotosSlice, 'pendingStatus'>
}>

export type PhotoResponse = Photo
