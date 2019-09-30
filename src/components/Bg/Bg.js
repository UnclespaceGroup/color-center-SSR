import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Bg.module.scss'

const Bg = ({ children, img, className }) => (
  <div className={cn(css.container, className)} style={{ backgroundImage: `url(${img})` }}>
    {children}
  </div>
)
Bg.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
  className: PropTypes.string
}

export default React.memo(Bg)
