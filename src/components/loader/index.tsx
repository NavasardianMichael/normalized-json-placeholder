import { FC } from 'react'
import styles from './styles.module.css'

export const Loader: FC = () => {
  return (
    <div className={styles.loader} data-testid="loader">
      <div className={styles.spinnerWrap}>
        <div className={styles.spinner}>
          <div className={styles.spinnerBox1}>
            <div className={styles.spinnerItem11} />
            <div className={styles.spinnerItem12} />
          </div>
          <div className={styles.spinnerBox2}>
            <div className={styles.spinnerItem21} />
            <div className={styles.spinnerItem22} />
          </div>
        </div>
      </div>
    </div>
  )
}
