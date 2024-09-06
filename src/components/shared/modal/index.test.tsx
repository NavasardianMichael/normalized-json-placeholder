import Modal from '.'
import { render, screen } from '@testing-library/react'

describe('Modal', () => {
  const handleCloseClick = vi.fn()
  it('should not render the content of a closed modal', () => {
    render(
      <Modal isOpened={false} handleCloseClick={handleCloseClick}>
        <h1 data-testid="test-modal-title">Test Modal</h1>
      </Modal>
    )
    expect(screen.queryByTestId('modal-portal-root')).not.toBeInTheDocument()
  })

  it('should render the modal content', () => {
    render(
      <Modal isOpened={true} handleCloseClick={handleCloseClick}>
        <h1 data-testid="test-modal-title">Test Modal</h1>
      </Modal>
    )
  })

  //   TODO: Testing Modal more like e2e
  //   it('should not render the content of a closed modal', () => {
  //     const headerOpenNavbarBtn = screen.getByTestId('header-actions_open-navbar')
  //     fireEvent.click(headerOpenNavbarBtn)

  //     const navbarChatItem = screen.getByTestId('navbar-chat-item')

  //     fireEvent.mouseOver(navbarChatItem)

  //     const removeChatBtn = screen.getByTestId('remove-chat-btn')
  //     fireEvent.click(removeChatBtn)

  //     expect(screen.queryByTestId('modal-portal-root')).toBeVisible()
  //   })
})
