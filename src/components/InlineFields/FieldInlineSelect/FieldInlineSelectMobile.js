import React from 'react'
import ReactSelect from 'react-select'
import css from './FieldInlineSelectMobile.module.scss'

const FieldInlineSelect = ({ input, label, text, placeholder, value, options, meta, ...props }) => {
  return (
    <div className={css.wrapper} >
      <ReactSelect
        {...input}
        value={input.value && {
          value: input.value,
          label: input.value
        }}
        onChange={val => {
          console.log(val)
          input.onChange(val.value)
        }}
        options={options}
        placeholder={placeholder}
        classNamePrefix={'select'}
      />
    </div>
  )
}

export default React.memo(FieldInlineSelect)
