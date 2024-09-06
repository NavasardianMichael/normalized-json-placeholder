import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { SpeechesList } from './List'

export const Speeches: FC = () => {
  return (
    <div>
      <Title>Speeches</Title>
      <SpeechesList />
    </div>
  )
}
