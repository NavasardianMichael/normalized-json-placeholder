import axiosInstance from 'configs/axios'
import { processGetTodosByPostIdResponse } from './processors'
import { GetTodosAPI } from './types'

export const getTodos: GetTodosAPI['api'] = async () => {
  const { data } = await axiosInstance.get<GetTodosAPI['response']>(`/todos`)

  const processedTodos = processGetTodosByPostIdResponse(data)

  return processedTodos
}
