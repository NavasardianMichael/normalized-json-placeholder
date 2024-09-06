import { FC, MouseEventHandler, useCallback, useMemo } from 'react'
import BaseButton from 'components/shared/base-button'
import Modal from 'components/shared/modal'
import { combineClassNames } from 'helpers/utils/commons'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectChatsById } from 'store/posts/selectors'
import { deleteChatThunk } from 'store/posts/thunk'
import { Chat } from 'store/posts/types'
import styles from './styles.module.css'

type Props = {
  dialogId: Chat['id']
  setDialogId: (id: Chat['id']) => void
}

const RemoveChatModal: FC<Props> = ({ dialogId, setDialogId }) => {
  const dispatch = useAppDispatch()
  const chats = useAppSelector(selectChatsById)
  const currentChatBriefTitle = useMemo(() => {
    if (!chats[dialogId]) return ''
    let splitTitle = chats[dialogId]?.title.split(' ')

    const isNeededToShorten = splitTitle.length > 20
    if (isNeededToShorten) splitTitle = splitTitle.slice(0, 20)

    let joinedTitle = splitTitle.join(' ')
    if (isNeededToShorten) joinedTitle += '...'

    return joinedTitle
  }, [chats, dialogId])

  const closeModal = useCallback(() => {
    setDialogId('')
  }, [setDialogId])

  const handleCancelClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation()
    closeModal()
  }

  const handleDeleteChatClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation()
    dispatch(deleteChatThunk({ chatId: dialogId }))
    closeModal()
  }

  return (
    <Modal isOpened={!!dialogId} handleCloseClick={handleCancelClick}>
      <BaseButton onClick={handleCancelClick} className={styles.closeChatBtn} data-testid="remove-chat-modal_close-btn">
        &#10006;
      </BaseButton>
      <div className={styles.chatModal}>
        <div className={styles.hintBlock}>
          <h3 data-testid="remove-chat-modal_title">Delete chat?</h3>
          <p data-testid="remove-chat-modal_confirmation-info">
            Are you sure you want to delete the chat{' '}
            <span>
              <b>{currentChatBriefTitle}</b>
            </span>
          </p>
        </div>
        <div className={styles.actions}>
          <BaseButton
            className={combineClassNames(styles.action, styles.cancel)}
            onClick={handleCancelClick}
            data-testid="remove-chat-modal_cancel-btn"
          >
            Cancel
          </BaseButton>
          <BaseButton
            className={combineClassNames(styles.action, styles.delete)}
            onClick={handleDeleteChatClick}
            data-testid="remove-chat-approve-btn"
          >
            Delete
          </BaseButton>
        </div>
      </div>
    </Modal>
  )
}

export default RemoveChatModal
