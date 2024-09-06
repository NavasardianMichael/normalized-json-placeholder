import Content from '.'
import { screen } from '@testing-library/react'
import { renderWithMockStore } from 'test/mockStore'
import styles from './styles.module.css'

describe('App Content', () => {
  beforeEach(() => {
    renderWithMockStore(<Content />)
  })
  it('should render without crashing', () => {
    expect(screen.getByTestId('app-content')).toBeInTheDocument()
  })

  it('should have a container class', () => {
    expect(screen.getByTestId('app-content')).toHaveClass(styles.content)
  })
})
