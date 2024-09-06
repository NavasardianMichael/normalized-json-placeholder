import Navbar from '.'
import { screen } from '@testing-library/react'
import { renderWithMockStore } from 'test/mockStore'
import styles from './styles.module.css'

describe('Navbar', () => {
  renderWithMockStore(<Navbar />)
  const navbar = screen.getByTestId('navbar')

  it('should render navbar', () => {
    expect(navbar).toBeVisible()
  })

  it('should be closed initially', () => {
    expect(navbar).toHaveClass(styles.closed)
  })
})
