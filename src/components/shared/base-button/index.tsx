import { DetailedHTMLProps, FC, PropsWithChildren } from 'react'
import { combineClassNames } from 'helpers/utils/commons'
import styles from './styles.module.css'

const BaseButton: FC<
  PropsWithChildren<DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>
> = ({ children, className, ...restProps }) => {
  return (
    <button {...restProps} className={combineClassNames(className, styles.baseButton)}>
      {children}
    </button>
  )
}

export default BaseButton
