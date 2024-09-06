import { Chat } from 'store/posts/types'

export type AppSlice = {
  isNavbarOpened: boolean
  removeChatDialogId: Chat['id']
}

export type AppActionPayloads = {
  setAppOptions: Partial<AppSlice>
  setIsNavbarOpened: AppSlice['isNavbarOpened']
}
