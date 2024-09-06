import RemoveChatModal from '.'
import { screen } from '@testing-library/react'
import mockState from 'test/mockState'
import { renderWithMockStore } from 'test/mockStore'

describe('Close Button of Remove Chat Modal', () => {
  const chats = mockState.chats.list
  const chatId = chats.allIds.find((chatId) => !chats.byId[chatId].isTemp)?.[0]

  beforeEach(() => {
    renderWithMockStore(<RemoveChatModal dialogId={chatId!} setDialogId={() => {}} />)
  })

  it('should render close button in the modal', () => {
    expect(screen.getByTestId('remove-chat-modal_close-btn')).toBeVisible()
  })

  it('should render title of the modal', () => {
    expect(screen.getByTestId('remove-chat-modal_title')).toBeVisible()
  })

  it('should render cancel button of the modal', () => {
    expect(screen.getByTestId('remove-chat-modal_cancel-btn')).toBeVisible()
  })

  it('should render approve delete button of the modal', () => {
    expect(screen.getByTestId('remove-chat-approve-btn')).toBeVisible()
  })
})
