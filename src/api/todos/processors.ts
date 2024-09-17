import { Todo } from 'store/todos/types'
import { GetTodosAPI } from './types'

export const processGetTodosByPostIdResponse: GetTodosAPI['processor'] = (result) => {
  return result.reduce(
    (acc, todo) => {
      const processedTodo = processTodoResponse(todo)
      acc.byId[processedTodo.id] = processedTodo
      acc.allIds.push(processedTodo.id)
      if (!acc.idsByUserId[processedTodo.userId]) acc.idsByUserId[processedTodo.userId] = []
      acc.idsByUserId[processedTodo.userId].push(processedTodo.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
      idsByUserId: [],
    } as GetTodosAPI['processedResult']
  )
}

const processTodoResponse = (todo: GetTodosAPI['response'][number]): Todo => {
  // API response not being processed, but the "processor" layer exits to have homogeneous entities and maintainable flow
  return todo
}
