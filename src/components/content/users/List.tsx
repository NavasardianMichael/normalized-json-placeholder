import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectEditableUserId, selectUsers, selectUsersPendingStatus } from 'store/users/selectors'
import { setEditableUserId } from 'store/users/slice'
import { User as UserType } from 'store/users/types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { PENDING_STATUSES } from 'helpers/constants/store'
import { User } from './user'

export const UsersList: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const editableId = useAppSelector(selectEditableUserId)
  const usersPendingStatus = useAppSelector(selectUsersPendingStatus)

  const handleEditUser: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (!e.currentTarget.dataset.userId) return

      const userId = +e.currentTarget.dataset.userId as UserType['id']
      dispatch(setEditableUserId(userId))
    },
    [dispatch]
  )

  if (!users.allIds.length) return null

  return (
    <Row gutter={[12, 12]} style={{ width: '100%', minWidth: 800 }}>
      {users.allIds.map((userId) => {
        const user = users.byId[userId]
        return (
          <Col key={user.id} xs={24} sm={8} xl={6}>
            <User
              data={user}
              onClick={handleEditUser}
              isPending={editableId === user.id && usersPendingStatus === PENDING_STATUSES.loading}
            />
          </Col>
        )
      })}
    </Row>
  )
}
