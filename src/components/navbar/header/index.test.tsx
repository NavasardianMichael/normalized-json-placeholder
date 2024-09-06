import Header from '.'
import { screen } from '@testing-library/react'
import { renderWithMockStore } from 'test/mockStore'

describe('Navbar Header', () => {
  beforeEach(() => {
    renderWithMockStore(<Header />)
  })

  it('should render close chat button in the header', () => {
    expect(screen.getByTestId('navbar-header-actions-close-navbar')).toBeVisible()
  })

  it('should render create new chat button in the header', () => {
    expect(screen.getByTestId('navbar-header-actions-create-new-chat')).toBeVisible()
  })
})
