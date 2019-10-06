import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './FieldInlineInput.module.scss'

const FieldInlineInput = ({ input, placeholder, measurement, type, width, meta, test }) => {
  const empty = input.value.length < 2
  const error = (meta.modified && meta.error) || (meta.touched && meta.error)
  return (
    <div className={cn(css.container, { [ css.hide ]: !measurement }, { [css.text]: type !== 'number' }, { [css.error]: error })} style={{ width }}>
      <input type={type}
        placeholder={placeholder}
        onChange={e => {
          input.onChange(e.target.value)
        }}
        value={input.value}
      />
      { measurement && <div className={css.fake} >
        <div className={css.fake__value}>{input.value}</div>
        <span className={css.measurement} style={{ marginLeft: empty && '2rem' }} >{measurement}</span>
      </div>}
    </div>
  )
}
FieldInlineInput.propTypes = {
  measurement: PropTypes.node,
  placeholder: PropTypes.any
}

export default React.memo(FieldInlineInput)
