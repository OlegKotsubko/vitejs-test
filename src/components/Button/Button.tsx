import { FC } from 'react'
import classNames from 'classnames'

import { IButton } from './IButton'
import styles from './Button.module.scss'

const Button: FC<IButton> = function Button({
  onClick,
  className,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.block, className)}
    >
      {children}
    </button>
  )
}

export default Button
