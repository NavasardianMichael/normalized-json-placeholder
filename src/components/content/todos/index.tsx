import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { TodosList } from './List'

export const Todos: FC = () => {
  return (
    <div>
      <Title>Todos</Title>
      <TodosList />
    </div>
  )
}
