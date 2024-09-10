import { Photo } from 'store/photos/types'
import { GetPhotosAPI } from './types'

export const processGetPhotos: GetPhotosAPI['processor'] = (result) => {
  return result.reduce(
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
