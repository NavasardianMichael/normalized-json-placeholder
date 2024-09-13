import { RootState } from 'configs/store'

export const selectTodos = (state: RootState) => state.todos

export const selectTodosPendingStatus = (state: RootState) => state.todos.pendingStatus

export const selectEditableTodoId = (state: RootState) => state.todos.editableId
