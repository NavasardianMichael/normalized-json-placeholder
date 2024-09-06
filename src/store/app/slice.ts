import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { AppActionPayloads, AppSlice } from './types'

const initialState: AppSlice = {
  isNavbarOpened: false,
  removeChatDialogId: '',
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
    toggleNavbar: (state) => {
      state.isNavbarOpened = !state.isNavbarOpened
    },
    setIsNavbarOpened: (state, { payload }: PayloadAction<AppActionPayloads['setIsNavbarOpened']>) => {
      state.isNavbarOpened = payload
    },
  },
})

export const { setAppOptions, toggleNavbar, setIsNavbarOpened } = actions

export default appReducer
