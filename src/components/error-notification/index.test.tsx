import { act } from 'react'
import ErrorNotification from '.'
import { screen } from '@testing-library/react'
import { setChatSliceOptions } from 'store/posts/slice'
import { renderWithMockStore } from 'test/mockStore'

describe('Error Notification', () => {
  beforeEach(() => {
    const {
      store: { dispatch },
    } = renderWithMockStore(<ErrorNotification />)
    act(() => dispatch(setChatSliceOptions({ errorMessage: 'test error' })))
  })

  it('should render error message', () => {
    expect(screen.getByTestId('error-notification')).toBeVisible()
  })

  it('should render error message text', () => {
    expect(screen.getByTestId('error-notification')).toHaveTextContent(
      'Something Went Wrong.Please Reload the Page and Try Again.'
    )
  })
})
