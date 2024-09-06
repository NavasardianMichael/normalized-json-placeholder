import React from 'react'
import { InteractionStatus } from '@azure/msal-browser'
import { useMsal } from '@azure/msal-react'
import { Loader } from 'components/loader'
import BaseButton from 'components/shared/base-button'
import { loginRequest } from 'configs/msal'
import styles from './styles.module.css'

const WelcomePage: React.FC = () => {
  const { instance, inProgress } = useMsal()

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e)
    })
  }

  if (inProgress !== InteractionStatus.None) return <Loader />

  return (
    <div className={styles.welcomePage}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h1 className={styles.primaryText} data-testid="welcome-page-title">
            Welcome to
            <span className={styles.firstPart}> Breakthrough</span>
            <span className={styles.secondPart}>BOT</span>
          </h1>
        </div>
        <BaseButton className={styles.loginBtn} onClick={handleLogin} data-testid="welcome-page-login-btn">
          Login
        </BaseButton>
      </div>
    </div>
  )
}

export default WelcomePage
