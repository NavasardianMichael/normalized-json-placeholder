import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { SpeakersList } from './List'

export const Speakers: FC = () => {
  return (
    <div>
      <Title>Speakers</Title>
      <SpeakersList />
    </div>
  )
}
