import React from 'react'
import ReactSelect from 'react-select'
import css from './FieldInlineSelect.module.scss'

const FieldInlineSelect = ({ input, label, text, placeholder, value, options, meta, width, ...props }) => {
  return (
    <div className={css.wrapper} style={{ width }}>
      <ReactSelect
        {...input}
        value={input.value && {
          value: input.value,
          label: input.value
        }}
        onChange={val => {
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
