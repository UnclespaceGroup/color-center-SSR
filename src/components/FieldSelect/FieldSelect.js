import React from 'react'
import ReactSelect from 'react-select'
import cssDesktop from './FieldSelect.module.scss'
import cssMobile from './FieldSelectMobile.module.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'

const FieldSelect = ({ input, label, text, value, options, meta, ...props }) => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const css = isDesktop ? cssDesktop : cssMobile
  const error = (meta.touched && meta.error) ? meta.error : null
  const success = !meta.pristine && !meta.error
  return (
    <div className={css.container}>
      <label>{label}</label>
      <ReactSelect
        {...input}
        options={options}
        placeholder={''}
        classNamePrefix={'select'}
      />
      <div className={cn(error ? css['line__error'] : success ? css['line__success'] : css['line'])} />
      <div className={css.text} >{text}</div>
      <div className={css.errors}>
        {
          error && <span>{error}</span>
        }
      </div>
    </div>
  )
}

export default React.memo(FieldSelect)
