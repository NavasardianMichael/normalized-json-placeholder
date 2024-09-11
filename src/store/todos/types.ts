import { User } from 'store/users/types'
import { Normalized, PartialButRequired } from 'helpers/types/commons'
import { ByUserIdShape, SliceCommonProps } from 'helpers/types/store'

export type TodosSlice = Normalized<Todo> & ByUserIdShape<Todo['id']> & SliceCommonProps<Todo['id']>

export type Todo = {
  id: number
  userId: User['id']
  title: string
  completed: boolean
}

export type TodosActionPayloads = {
  initTodos: Omit<TodosSlice, keyof SliceCommonProps<Todo['id']>>
  setTodoOptions: PartialButRequired<Todo, 'id'>
}
