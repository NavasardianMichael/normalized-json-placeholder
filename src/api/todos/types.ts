import { Endpoint } from 'api/shared/types'
import { Todo, TodosSlice } from 'store/todos/types'
import { SliceCommonProps } from 'helpers/types/store'

export type GetTodosAPI = Endpoint<{
  payload: Todo['id']
  response: TodoResponse[]
  processed: Omit<TodosSlice, keyof SliceCommonProps<Todo['id']>>
}>

export type TodoResponse = Todo
