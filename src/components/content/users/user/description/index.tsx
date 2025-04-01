import { FC } from 'react'
import { selectAlbums } from 'store/albums/selectors'
import { selectPosts } from 'store/posts/selectors'
import { selectTodos } from 'store/todos/selectors'
import { User as UserType } from 'store/users/types'
import { useAppSelector } from 'hooks/useAppSelector'

type Props = {
  data: UserType
}

const DETAIL_KEYS: (keyof UserType)[] = ['name', 'email', 'address', 'phone', 'companyName']

export const User: FC<Props> = ({ data }) => {
  const albums = useAppSelector(selectAlbums)
  const todos = useAppSelector(selectTodos)
  const posts = useAppSelector(selectPosts)

  return (
    <>
      {/* Here are listed the details, which directly characterize the user */}
      {DETAIL_KEYS.map((key) => {
        return (
          <p key={key}>
            {key}: {data[key]}
          </p>
        )
      })}

      {/* And here are listed the details, retrieved from related entities */}
      <p>Albums: {albums.idsByUserId[data.id].map((albumId) => albums.byId[albumId].title).join(', ')}</p>
      <p>Todos: {todos.idsByUserId[data.id].map((todoId) => todos.byId[todoId].title).join(', ')}</p>
      <p>Posts: {posts.idsByUserId[data.id].map((postId) => posts.byId[postId].title).join(', ')}</p>
    </>
  )
}
