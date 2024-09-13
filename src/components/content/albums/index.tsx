import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { AlbumsList } from './List'

export const Albums: FC = () => {
  return (
    <div>
      <Title>Albums</Title>
      <AlbumsList />
    </div>
  )
}
