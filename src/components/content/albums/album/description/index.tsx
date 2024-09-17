import { FC } from 'react'
import { Divider, Flex } from 'antd'
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
  console.log({ data })

  return (
    <>
      <Flex gap="small" style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
        <div>
          {albumDetails.map((detailKey) => {
            return <DescriptionDetail key={detailKey} name={detailKey} value={data[detailKey]} />
          })}
        </div>
      </Flex>
      <Divider>Photos</Divider>
      <div style={{ display: 'flex' }}>
        {data.photoIds.map((photoId) => {
          const photo = photos.byId[photoId]
          return (
            <img
              key={photoId}
              style={{ flex: '1' }}
              alt={`Image of speech "${photo.title || '-'}"`}
              loading="lazy"
              src={photo.thumbnailUrl}
              // fallback={photo.thumbnailUrl}
            />
          )
        })}
      </div>
    </>
  )
}
