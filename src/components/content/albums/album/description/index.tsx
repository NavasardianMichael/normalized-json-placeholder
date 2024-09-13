import { FC } from 'react'
import { Divider, Flex, Image } from 'antd'
import { Album } from 'store/albums/types'
import { selectPhotos } from 'store/photos/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { DescriptionDetail } from './Detail'

type Props = {
  data: Album
}

const albumDetails: (keyof Album)[] = ['title']

export const Description: FC<Props> = ({ data }) => {
  const photos = useAppSelector(selectPhotos)

  return (
    <Flex gap="small" style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      <div>
        {albumDetails.map((detailKey) => {
          return <DescriptionDetail name={detailKey} value={data[detailKey]} />
        })}
      </div>

      <Divider>Related Entities</Divider>
      <div>
        {data.photoIds.map((photoId) => {
          const photo = photos.byId[photoId]
          return (
            <Image
              preview={true}
              alt={`Image of speech "${photo.title || '-'}"`}
              src={photo.url}
              style={{ width: '100%' }}
              fallback={photo.thumbnailUrl}
            />
          )
        })}
      </div>
    </Flex>
  )
}
