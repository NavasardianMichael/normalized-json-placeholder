import { AlbumsSlice } from 'store/albums/types'
import { Photo } from 'store/photos/types'
import { GetPhotosAPI } from './types'

export const processGetPhotos: GetPhotosAPI['processor'] = (response) => {
  return response.reduce(
    (acc, photo) => {
      const processedPhoto = processPhotoResponse(photo)
      acc.byId[processedPhoto.id] = processedPhoto
      acc.allIds.push(processedPhoto.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as GetPhotosAPI['processedResult']
  )
}

const processPhotoResponse = (photo: GetPhotosAPI['response'][number]): Photo => {
  // API response not being processed, but the "processor" layer exits to have homogeneous entities and maintainable flow
  return photo
}

export const processPhotoIdsByAlbumId = (photos: GetPhotosAPI['processedResult']): AlbumsSlice['idsByUserId'] => {
  return photos.allIds.reduce(
    (acc, photoId) => {
      const photo = photos.byId[photoId]
      if (!acc[photo.albumId]) acc[photo.albumId] = []
      acc[photo.albumId].push(photo.id)
      return acc
    },
    {} as AlbumsSlice['idsByUserId']
  )
}
