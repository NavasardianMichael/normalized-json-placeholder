import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import appReducer from 'store/app/slice'
import chatsReducer from 'store/posts/slice'
import userReducer from 'store/users/slice'
import mockState from './mockState'

export const createMockStore = () =>
  configureStore({
    preloadedState: mockState,
    reducer: {
      [STATE_SLICE_NAMES.app]: appReducer,
      [STATE_SLICE_NAMES.user]: userReducer,
      [STATE_SLICE_NAMES.chats]: chatsReducer,
    },
  })

export type RootMockState = ReturnType<typeof createMockStore>

export const renderWithMockStore = (ui: React.ReactElement, store: RootMockState = createMockStore()) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    renderedUI: render(ui, { wrapper: Wrapper }),
    store,
  }
}
