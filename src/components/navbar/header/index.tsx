import { FC, MouseEventHandler } from 'react'
import OpenNavBarIcon from 'assets/icons/arrow-right-to-bracket.svg'
import CreateNewChatIcon from 'assets/icons/edit.svg'
import BaseButton from 'components/shared/base-button'
import { IS_TOUCH_DEVICE } from 'helpers/constants/device'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { setAppOptions, setIsNavbarOpened } from 'store/app/slice'
import { selectPendingChatId } from 'store/posts/selectors'
import { addChat } from 'store/posts/slice'
import styles from './styles.module.css'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const pendingChatId = useAppSelector(selectPendingChatId)

  const handleCloseNavbar: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setIsNavbarOpened(false))
  }

  const createNewChat: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addChat())
    if (IS_TOUCH_DEVICE) dispatch(setAppOptions({ isNavbarOpened: false }))
  }

  return (
    <header className={styles.header}>
      <BaseButton
        className={styles.reversedIconButton}
        onClick={handleCloseNavbar}
        data-testid="navbar-header-actions-close-navbar"
      >
        <OpenNavBarIcon />
      </BaseButton>

      <BaseButton
        onClick={createNewChat}
        disabled={!!pendingChatId}
        data-testid="navbar-header-actions-create-new-chat"
      >
        <CreateNewChatIcon />
      </BaseButton>
    </header>
  )
}

export default Header
