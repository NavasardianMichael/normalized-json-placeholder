import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { ConferencesList } from './List'

export const Conferences: FC = () => {
  return (
    <div>
      <Title>Conferences</Title>
      <ConferencesList />
    </div>
  )
}
