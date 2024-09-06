import Portal from '.'
import { render, screen } from '@testing-library/react'

describe('Portal', () => {
  beforeEach(() => {
    render(
      <Portal id="test-portal">
        <h1 data-testid="test-portal-title">Test portal</h1>
      </Portal>
    )
  })
  it('should render a portal', () => {
    expect(screen.getByTestId('test-portal')).toBeVisible()
  })

  it('should render an element in the portal', () => {
    expect(screen.getByTestId('test-portal-title')).toHaveTextContent('Test portal')
  })
})
