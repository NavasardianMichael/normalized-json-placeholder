import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { User } from 'store/users/types'

export type TodosSlice = {
  list: Normalized<Todo>
  pendingStatus: PendingStatus
}

export type Todo = {
  id: number
  userId: User['id']
  title: string
  completed: boolean
}

export type TodosActionPayloads = {
  initTodos: TodosSlice['list']
  setTodoOptions: PartialButRequired<Todo, 'id'>
}
