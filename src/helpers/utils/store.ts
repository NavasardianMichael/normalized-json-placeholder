import { Action, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { AppDispatch } from 'configs/store'
import { setAppOptions } from 'store/app/slice'
import { StateSliceName, ThunkConfig } from 'helpers/types/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>()

export const isFulfilledAction = (action: Action) => action.type.endsWith('/fulfilled')

export const isPendingAction = (action: Action) => action.type.endsWith('/pending')

export const isRejectedAction = (action: Action) => action.type.endsWith('/rejected')

export const getSliceActionGroup = (name: StateSliceName) => {
  return (groupName: string) => {
    return (action: Action) => action.type.startsWith(name) && action.type.endsWith(groupName)
  }
}

export const processThunkError = (err: Error | AxiosError, dispatch: AppDispatch): Error | AxiosError => {
  const error = err as Error | AxiosError
  console.error({ error })
  const processedError = isAxiosError(error) ? error?.response?.data : error
  dispatch(setAppOptions({ errorMessage: processedError.message }))
  return processedError
}
