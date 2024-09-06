import { FC, useEffect, useRef } from 'react'
import { combineClassNames } from 'helpers/utils/commons'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectAppOptions } from 'store/app/selectors'
import { setIsNavbarOpened } from 'store/app/slice'
import ChatsHistory from './chats-history'
import Header from './header'
import styles from './styles.module.css'

const Navbar: FC = () => {
  const dispatch = useAppDispatch()
  const { isNavbarOpened, removeChatDialogId } = useAppSelector(selectAppOptions)
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const closeNavbarOnOutsideClick: (this: Document, ev: MouseEvent) => void = (e) => {
      if (!removeChatDialogId && !navbarRef?.current?.contains?.(e.target as HTMLElement)) {
        dispatch(setIsNavbarOpened(false))
      }
    }

    document.addEventListener('click', closeNavbarOnOutsideClick)

    return () => {
      document.removeEventListener('click', closeNavbarOnOutsideClick)
    }
  }, [dispatch, removeChatDialogId])

  return (
    <nav
      className={combineClassNames(styles.navbar, !isNavbarOpened && styles.closed)}
      ref={navbarRef}
      data-testid="navbar"
    >
      <Header />
      <ChatsHistory />
    </nav>
  )
}

export default Navbar
