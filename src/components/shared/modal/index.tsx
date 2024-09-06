import { DetailedHTMLProps, FC, MouseEventHandler, PropsWithChildren } from 'react'
import { combineClassNames } from 'helpers/utils/commons'
import Portal from '../portal'
import styles from './styles.module.css'

type Props = {
  isOpened: boolean
  handleCloseClick: MouseEventHandler<HTMLElement>
}

const Modal: FC<PropsWithChildren<Props & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({
  children,
  className,
  isOpened,
  handleCloseClick,
  ...restProps
}) => {
  if (!isOpened) return

  return (
    <Portal id="modal-portal-root">
      <div className={styles.modal}>
        <div
          {...restProps}
          className={combineClassNames(className, styles.content, isOpened && styles.open)}
          aria-hidden={!isOpened}
          data-testid="modal-portal-content"
        >
          {children}
        </div>
        {isOpened && <div className={styles.overlay} onClick={handleCloseClick}></div>}
      </div>
    </Portal>
  )
}

export default Modal
