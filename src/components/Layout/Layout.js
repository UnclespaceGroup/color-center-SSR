import React from 'react'
import PropTypes from 'prop-types'
import css from './Layout.module.scss'
import cn from 'classnames'

const Layout = ({ children, className, id }) => (
  <div className={cn(css.layout, className)} id={id}>{children}</div>
)
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
export default React.memo(Layout)
