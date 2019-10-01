import React from 'react'
import css from './FieldInput.module.scss'

const FieldInput = ({ input, label, text, value, caption, ...props }) => (
  <div className={css.container}>
    <label>{label}</label>
    <input {...input} {...props} />
    { caption && <div className={css.caption}>{caption}</div>}
    <div className={css.line} />
    <div className={css.text} >{text}</div>
  </div>
)

export default React.memo(FieldInput)
