import { FC } from 'react'
import Title from 'antd/es/typography/Title'
import { UsersList } from './List'

export const Users: FC = () => {
  return (
    <div>
      <Title>Users</Title>
      <UsersList />
    </div>
  )
}
