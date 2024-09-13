import { FC, MouseEventHandler } from 'react'
import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Album as AlbumType } from 'store/albums/types'
import { Description } from './description'

type Props = {
  data: AlbumType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: boolean
}

export const Album: FC<Props> = ({ data, onClick, isPending }) => {
  if (isPending)
    return (
      <Skeleton
        title
        active
        avatar={{ size: 'large', shape: 'square' }}
        paragraph={{ rows: 5 }}
        style={{ padding: 8, border: '1px solid #f0f0f0', borderRadius: 8 }}
      />
    )

  return (
    <>
      <Card hoverable onClick={onClick} data-album-id={data.id}>
        <Meta title={data.title} description={<Description data={data} />} />
      </Card>
    </>
  )
}
