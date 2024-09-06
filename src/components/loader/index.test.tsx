import { Loader } from '.'
import { render, screen } from '@testing-library/react'

describe('Loader', () => {
  it('should render the loader', () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeVisible()
  })
})
