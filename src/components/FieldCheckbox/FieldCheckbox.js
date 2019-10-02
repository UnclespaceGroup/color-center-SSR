import React from 'react'
import PropTypes from 'prop-types'
import css from './FieldCheckbox.module.scss'

const FieldCheckbox = ({ children, input }) => (
  <label className={css.container}>
    <input type={'checkbox'} {...input} />
    <span>{children}</span>
  </label>
)
FieldCheckbox.propTypes = {
  children: PropTypes.node
}

export default React.memo(FieldCheckbox)
