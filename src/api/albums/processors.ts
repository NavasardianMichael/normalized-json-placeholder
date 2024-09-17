import { Album } from 'store/albums/types'
import { GetAlbumsAPI } from './types'

export const processGetAlbumsResponse: GetAlbumsAPI['processor'] = (result) => {
  return result.reduce(
    (acc, album) => {
      const processedAlbum = processAlbumResponse(album)
      acc.byId[processedAlbum.id] = processedAlbum
      acc.allIds.push(processedAlbum.id)
      if (!acc.idsByUserId[processedAlbum.userId]) acc.idsByUserId[processedAlbum.userId] = []
      acc.idsByUserId[processedAlbum.userId].push(processedAlbum.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
      idsByUserId: {},
    } as GetAlbumsAPI['processedResult']
  )
}

const processAlbumResponse = (album: GetAlbumsAPI['response'][number]): Album => {
  // API response not being processed, but the "processor" layer exits to have homogeneous entities and maintainable flow
  return album
}
