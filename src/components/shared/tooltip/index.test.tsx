import Tooltip from '.'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Tooltip', () => {
  const tooltipContent = 'Test tooltip content'
  const paragraphContent = 'Test paragraph with tooltip'

  beforeEach(() => {
    render(
      <Tooltip text={tooltipContent}>
        <p data-testid="paragraph">{paragraphContent}</p>
      </Tooltip>
    )
  })

  it('should render descendants of tooltip', () => {
    const paragraphElement = screen.getByTestId('paragraph')
    expect(paragraphElement).toBeVisible()
  })

  it('should not render tooltip content initially', () => {
    const tooltipContentElement = screen.queryByTestId('tooltip-content')
    expect(tooltipContentElement).not.toBeInTheDocument()
  })

  it('should render tooltip content when its descendant is hovered', () => {
    const paragraphElement = screen.getByTestId('paragraph')
    fireEvent.mouseOver(paragraphElement)
    waitFor(
      () => {
        const tooltipContentElement = screen.getByTestId('tooltip-content')
        expect(tooltipContentElement).toBeVisible()
      },
      { timeout: 500 }
    )
  })
})
