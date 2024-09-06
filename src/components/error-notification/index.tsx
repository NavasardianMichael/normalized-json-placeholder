import { FC } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectErrorMessage } from 'store/posts/selectors'
import styles from './styles.module.css'

const ErrorNotification: FC = () => {
  const errorMessage = useAppSelector(selectErrorMessage)

  if (!errorMessage) return

  return (
    <div className={styles.errorNotification} data-testid="error-notification">
      <p className={styles.errorMessage}>
        Something Went Wrong.
        <br />
        Please <a href=".">Reload the Page</a> and Try Again.
      </p>
    </div>
  )
}

export default ErrorNotification
