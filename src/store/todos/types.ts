import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { PendingStatus } from 'helpers/types/store'
import { User } from 'store/users/types'

export type TodosSlice = Normalized<Todo> & {
  idsByUserId: Record<User['id'], Todo['id'][]>
  pendingStatus: PendingStatus
}

export type Todo = {
  id: number
  userId: User['id']
  title: string
  completed: boolean
}

export type TodosActionPayloads = {
  initTodos: Omit<TodosSlice, 'pendingStatus'>
  setTodoOptions: PartialButRequired<Todo, 'id'>
}
