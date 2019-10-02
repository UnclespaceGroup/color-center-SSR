import React from 'react'
import cn from 'classnames'
import cssDesktop from './FieldInput.module.scss'
import cssMobile from './FieldInputMobile.module.scss'
import { useSelector } from 'react-redux'

const FieldInput = ({ input, label, text, value, caption, meta, ...props }) => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const css = isDesktop ? cssDesktop : cssMobile
  const error = (meta.touched && meta.error) ? meta.error : null
  const success = !meta.pristine && !meta.error
  return (
    <div className={css.container}>
      <label>{label}</label>
      <input {...input} {...props} />
      { caption && <div className={css.caption}>{caption}</div>}
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

export default React.memo(FieldInput)
