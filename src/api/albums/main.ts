import axiosInstance from 'configs/axios'
import { processGetAlbumsResponse } from './processors'
import { GetAlbumsAPI } from './types'

export const getAlbums: GetAlbumsAPI['api'] = async () => {
  const { data } = await axiosInstance.get<GetAlbumsAPI['response']>(`/albums`)

  const processedAlbums = processGetAlbumsResponse(data)

  return processedAlbums
}
