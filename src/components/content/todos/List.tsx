import { FC, MouseEventHandler, useCallback } from 'react'
import { Col, Row } from 'antd'
import { selectEditableTodoId, selectTodos, selectTodosPendingStatus } from 'store/todos/selectors'
import { setEditableTodoId } from 'store/todos/slice'
import { Todo as TodoType } from 'store/todos/types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { PENDING_STATUSES } from 'helpers/constants/store'
import { Todo } from './todo'

export const TodosList: FC = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)
  const editableId = useAppSelector(selectEditableTodoId)
  const todosPendingStatus = useAppSelector(selectTodosPendingStatus)

  const handleEditTodo: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (!e.currentTarget.dataset.todoId) return

      const todoId = +e.currentTarget.dataset.todoId as TodoType['id']
      dispatch(setEditableTodoId(todoId))
    },
    [dispatch]
  )

  if (!todos.allIds.length) return null

  return (
    <Row gutter={[12, 12]} style={{ width: '100%', minWidth: 800 }}>
      {todos.allIds.map((todoId) => {
        const todo = todos.byId[todoId]
        return (
          <Col key={todo.id} xs={24} sm={8} xl={6}>
            <Todo
              data={todo}
              onClick={handleEditTodo}
              isPending={editableId === todo.id && todosPendingStatus === PENDING_STATUSES.loading}
            />
          </Col>
        )
      })}
    </Row>
  )
}
