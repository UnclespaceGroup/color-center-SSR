import React from 'react'
import PropTypes from 'prop-types'
import css from './FieldCheckbox.module.scss'

const FieldCheckbox = ({ children, input, ...props }) => (
  <label className={css.container}>
    <input {...input} {...props} value={input.value || false} />
    <span>{children}</span>
  </label>
)
FieldCheckbox.propTypes = {
  children: PropTypes.node
}

export default React.memo(FieldCheckbox)
