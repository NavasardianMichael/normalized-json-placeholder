import { FC, MouseEventHandler, useCallback } from 'react'
import BinIcon from 'assets/icons/bin.svg'
import BaseButton from 'components/shared/base-button'
import Tooltip from 'components/shared/tooltip'
import { IS_TOUCH_DEVICE } from 'helpers/constants/device'
import { combineClassNames } from 'helpers/utils/commons'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useDateCategorizedChats } from 'hooks/useDateCategorizedChats'
import { selectAppOptions } from 'store/app/selectors'
import { setAppOptions, setIsNavbarOpened } from 'store/app/slice'
import { selectCurrentChatId, selectPendingChatId } from 'store/posts/selectors'
import { setCurrentChatThunk } from 'store/posts/thunk'
import { Chat } from 'store/posts/types'
import RemoveChatModal from './removeChatModal'
import styles from './styles.module.css'

const ChatsHistory: FC = () => {
  const dispatch = useAppDispatch()
  const currentChatId = useAppSelector(selectCurrentChatId)
  const pendingChatId = useAppSelector(selectPendingChatId)
  const { removeChatDialogId } = useAppSelector(selectAppOptions)

  const categorizedChats = useDateCategorizedChats()

  const handleChatClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      const { name: chatId } = e.currentTarget
      const a = setCurrentChatThunk(chatId)
      dispatch(a)
      if (IS_TOUCH_DEVICE) dispatch(setIsNavbarOpened(false))
    },
    [dispatch]
  )

  const setRemoveChatDialogId = useCallback(
    (id: Chat['id']) => {
      dispatch(setAppOptions({ removeChatDialogId: id }))
    },
    [dispatch]
  )

  const handleRemoveChatClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      setRemoveChatDialogId(e.currentTarget.name)
    },
    [setRemoveChatDialogId]
  )

  return (
    <div className={styles.chatsHistory}>
      {categorizedChats.map((category) => {
        const [name, chats] = category
        //TODO remove this when you wil fix the issue connected multiple temp chats, and left only checking for first one
        if (chats.every((chat) => chat.isTemp)) return

        return (
          <div key={name} className={styles.category}>
            <p className={styles.category}>{name}</p>
            <div className={styles.chats}>
              {chats
                .toSorted((a, b) => b.updatedDate - a.updatedDate) //TODO: Sorting for show new chat at first
                .map((chat) => {
                  const { id, title } = chat
                  return (
                    <Tooltip text={title} key={id}>
                      <div className={styles.chat} data-testid={`navbar-chat-item-${id}`}>
                        <BaseButton
                          name={id}
                          disabled={pendingChatId === id}
                          className={combineClassNames(styles.title, id === currentChatId && styles.active)}
                          onClick={handleChatClick}
                        >
                          <p className={styles.message}>{title}</p>
                        </BaseButton>
                        <BaseButton
                          className={styles.removeChatBtn}
                          onClick={handleRemoveChatClick}
                          name={chat.id}
                          data-testid={`navbar-remove-chat-btn-${id}`}
                        >
                          <BinIcon />
                        </BaseButton>
                      </div>
                    </Tooltip>
                  )
                })}
            </div>
          </div>
        )
      })}
      <RemoveChatModal dialogId={removeChatDialogId} setDialogId={setRemoveChatDialogId} />
    </div>
  )
}

export default ChatsHistory
