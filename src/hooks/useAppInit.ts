import { useEffect, useState } from 'react'
import { getAlbumsThunk } from 'store/albums/thunk'
import { getPhotosThunk } from 'store/photos/thunk'
import { getPostsThunk } from 'store/posts/thunk'
import { getTodosThunk } from 'store/todos/thunk'
import { getUsersThunk } from 'store/users/thunk'
import { useAppDispatch } from './useAppDispatch'

export const useAppInit = () => {
  const dispatch = useAppDispatch()
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initApp = async () => {
      const appData = await Promise.all([
        dispatch(getUsersThunk()),
        dispatch(getAlbumsThunk()),
        dispatch(getPhotosThunk()),
        dispatch(getTodosThunk()),
        dispatch(getPostsThunk()),
      ])

      if (appData) setIsInitialized(true)
    }
    initApp()
  }, [dispatch])

  return { isInitialized }
}
