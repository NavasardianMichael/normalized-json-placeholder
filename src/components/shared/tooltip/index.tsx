import React, { FC, PropsWithChildren, useRef, useState } from 'react'
import { IS_TOUCH_DEVICE } from 'helpers/constants/device'
import styles from './styles.module.css'

type Props = {
  text: string
}

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, text }) => {
  const [show, setShow] = useState<boolean>(false)
  const [showTop, setShowTop] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const y = e.screenY
    const screenHeight = window.innerHeight
    if ((y * 100) / screenHeight > 80) {
      setShowTop(true)
    }
    timeoutId.current = setTimeout(() => {
      setShow(true)
    }, 500)
  }

  const onMouseLeave = () => {
    timeoutId.current && clearTimeout(timeoutId.current)
    setShow(false)
  }

  if (IS_TOUCH_DEVICE) return <>{children}</>

  return (
    <div className={styles.tooltipContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {show && (
        <div
          style={showTop ? { bottom: '105%' } : { top: '105%' }}
          className={styles.tooltip}
          data-testid="tooltip-content"
        >
          <span className={showTop ? styles.tooltipArrowDown : styles.tooltipArrowUp} />
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
