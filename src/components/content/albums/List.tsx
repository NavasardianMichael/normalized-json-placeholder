import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectAlbums, selectAlbumsPendingStatus, selectEditableAlbumId } from 'store/albums/selectors'
import { setEditableAlbumId } from 'store/albums/slice'
import { Album as AlbumType } from 'store/albums/types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { PENDING_STATUSES } from 'helpers/constants/store'
import { Album } from './album'

export const AlbumsList: FC = () => {
  const dispatch = useAppDispatch()
  const albums = useAppSelector(selectAlbums)
  const editableId = useAppSelector(selectEditableAlbumId)
  const albumsPendingStatus = useAppSelector(selectAlbumsPendingStatus)

  const handleEditAlbum: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (!e.currentTarget.dataset.albumId) return

      const albumId = +e.currentTarget.dataset.albumId as AlbumType['id']
      dispatch(setEditableAlbumId(albumId))
    },
    [dispatch]
  )

  if (!albums.allIds.length) return null

  return (
    <Row gutter={[12, 12]} style={{ width: '100%', minWidth: 800 }}>
      {albums.allIds.map((albumId) => {
        const album = albums.byId[albumId]
        return (
          <Col key={album.id} xs={24} sm={8} xl={6}>
            <Album
              data={album}
              onClick={handleEditAlbum}
              isPending={editableId === album.id && albumsPendingStatus === PENDING_STATUSES.loading}
            />
          </Col>
        )
      })}
    </Row>
  )
}
