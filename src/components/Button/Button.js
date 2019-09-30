import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({ children, to, classname }) => (
  <Link to={to} className={cn(css.container, css[classname])}>
    {children}
  </Link>
)
Button.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string
}

export default React.memo(Button)
