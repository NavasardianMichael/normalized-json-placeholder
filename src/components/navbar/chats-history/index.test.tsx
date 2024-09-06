import ChatsHistory from '.'
import { screen } from '@testing-library/react'
import mockState from 'test/mockState'
import { renderWithMockStore } from 'test/mockStore'

describe('Chats History in Navbar', () => {
  it('should render all chats except of temporary ones', () => {
    const chats = mockState.chats.list
    renderWithMockStore(<ChatsHistory />)

    chats.allIds.forEach((chatId) => {
      const element = screen.queryByTestId(`navbar-chat-item-${[chatId]}`)
      const { isTemp } = chats.byId[chatId]
      if (isTemp || chatId.startsWith('temp-chat_')) return expect(element).not.toBeInTheDocument()
      expect(element).toBeVisible()
    })
  })
})
