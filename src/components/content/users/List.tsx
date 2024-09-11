import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectEditableUserId, selectUsers, selectUsersPendingStatus } from 'store/users/selectors'
import { User } from 'store/users/types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { PENDING_STATUSES } from 'helpers/constants/store'
import { Conference } from './conference'

export const UsersList: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const editableId = useAppSelector(selectEditableUserId)
  const usersPendingStatus = useAppSelector(selectUsersPendingStatus)

  const handleEditConference: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const userId = e.currentTarget.dataset.userId as User['id']
      dispatch(setEditableConferenceId(userId))
    },
    [dispatch]
  )

  if (!users.allIds.length) return null

  return (
    <Row gutter={[12, 12]} style={{ width: '100%', minWidth: 800 }}>
      {users.allIds.map((userId) => {
        const conference = users.byId[userId]
        return (
          <Col key={conference.id} xs={24} sm={8} xl={6}>
            <Conference
              data={conference}
              onClick={handleEditConference}
              isPending={editableId === conference.id && usersPendingStatus === PENDING_STATUSES.loading}
            />
          </Col>
        )
      })}
    </Row>
  )
}
