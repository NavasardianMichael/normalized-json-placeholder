import { FC } from 'react'
import { Divider, Flex } from 'antd'
import { selectAlbums } from 'store/albums/selectors'
import { selectPosts } from 'store/posts/selectors'
import { selectTodos } from 'store/todos/selectors'
import { User } from 'store/users/types'
import { useAppSelector } from 'hooks/useAppSelector'
import { DescriptionDetail } from './Detail'

type Props = {
  data: User
}

const userDetails: (keyof User)[] = ['name', 'email', 'address', 'phone', 'companyName']

export const Description: FC<Props> = ({ data }) => {
  const albums = useAppSelector(selectAlbums)
  const todos = useAppSelector(selectTodos)
  const posts = useAppSelector(selectPosts)

  return (
    <Flex gap="small" vertical style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      {userDetails.map((detailKey) => {
        return <DescriptionDetail key={detailKey} name={detailKey} value={data[detailKey]} />
      })}

      <Divider>Related Entities</Divider>
      <DescriptionDetail
        name="Albums"
        value={albums.idsByUserId[data.id].map((albumId) => albums.byId[albumId].title).join(', ')}
      />
      <DescriptionDetail
        name="Todos"
        value={todos.idsByUserId[data.id].map((todoId) => todos.byId[todoId].title).join(', ')}
      />
      <DescriptionDetail
        name="Posts"
        value={posts.idsByUserId[data.id].map((postId) => posts.byId[postId].title).join(', ')}
      />
    </Flex>
  )
}
