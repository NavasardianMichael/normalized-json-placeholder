import axiosInstance from 'configs/axios'
import { processGetPhotos } from './processors'
import { GetPhotosAPI } from './types'

export const getPhotos: GetPhotosAPI['api'] = async () => {
  const { data } = await axiosInstance.get<GetPhotosAPI['response']>(`/photos`)

  const processedPhotos = processGetPhotos(data)

  return processedPhotos
}
