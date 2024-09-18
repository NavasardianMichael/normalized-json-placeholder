import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { AppActionPayloads, AppSlice } from './types'

const initialState: AppSlice = {
  errorMessage: '',
}

export const { reducer: appReducer, actions } = createSlice({
  name: STATE_SLICE_NAMES.app,
  initialState,
  reducers: {
    setAppOptions: (state, { payload }: PayloadAction<AppActionPayloads['setAppOptions']>) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { setAppOptions } = actions

export default appReducer
