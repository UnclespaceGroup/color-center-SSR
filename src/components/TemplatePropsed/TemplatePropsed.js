import React from 'react'
import PropTypes from 'prop-types'
import css from './TemplatePropsed.module.scss'

const TemplatePropsed = ({ children }) => (
  <div className={css.container}>
    {children}
  </div>
)
TemplatePropsed.propTypes = {
  children: PropTypes.node
}

export default React.memo(TemplatePropsed)
