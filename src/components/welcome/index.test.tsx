import WelcomePage from '.'
import { render, screen } from '@testing-library/react'

describe('Welcome Page', () => {
  beforeEach(() => {
    render(<WelcomePage />)
  })

  it('should render title of the page', () => {
    expect(screen.getByTestId('welcome-page-title')).toBeVisible()
  })

  it('should render the login button', () => {
    expect(screen.getByTestId('welcome-page-login-btn')).toBeVisible()
  })
})
