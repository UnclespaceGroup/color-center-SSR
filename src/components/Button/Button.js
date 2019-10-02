import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({ children, to, onClick, leftIcon, classname, color, className, disabled }) => {
  const _className = cn(
    css.container,
    className,
    css[classname], css[color],
    { [css.leftIcon]: leftIcon },
    { [css.disabled]: disabled }
  )

  return to
    ? <Link to={to} className={_className}>
      {children}
    </Link>

    : <div onClick={onClick} className={_className}>
      {children}
    </div>
}
Button.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  leftIcon: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default React.memo(Button)
