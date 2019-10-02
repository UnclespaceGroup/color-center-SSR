import React from 'react'
import PropTypes from 'prop-types'
import css from './LayoutMobile.module.scss'
import cn from 'classnames'

const LayoutMobile = ({ children, className }) => (
  <div className={cn(css.layout, className)}>{children}</div>
)
LayoutMobile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
export default React.memo(LayoutMobile)
