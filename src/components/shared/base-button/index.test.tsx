import BaseButton from '.'
import { render, screen } from '@testing-library/react'
import styles from './styles.module.css'

describe('Generic Base Button', () => {
  render(
    <BaseButton data-testid="base-button" disabled>
      Test Button
    </BaseButton>
  )
  const baseButton = screen.getByTestId('base-button')

  it('should render button', () => {
    expect(baseButton).toBeVisible()
  })

  it('should render children', () => {
    expect(baseButton).toHaveTextContent('Test Button')
  })

  it('should disabled state work', () => {
    expect(baseButton).toBeDisabled()
  })

  it('should have been applied its specific className', () => {
    expect(baseButton).toHaveClass(styles.baseButton)
  })
})
