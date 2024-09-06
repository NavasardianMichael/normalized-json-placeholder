import { FC } from 'react'
import Chat from './chat'
import Header from './header'
import styles from './styles.module.css'

const Content: FC = () => {
  return (
    <div className={styles.content} data-testid="app-content">
      <Header />
      <Chat />
    </div>
  )
}

export default Content
