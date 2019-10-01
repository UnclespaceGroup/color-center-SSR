import React from 'react'
import ReactSelect from 'react-select'
import css from './FieldSelect.module.scss'

const FieldSelect = ({ input, label, text, value, options, ...props }) => (
  <div className={css.container}>
    <label>{label}</label>
    <ReactSelect
      {...input}
      options={options}
      placeholder={''}
      classNamePrefix={'select'}
    />
    <div className={css.line} />
    <div className={css.text} >{text}</div>
  </div>
)

export default React.memo(FieldSelect)
