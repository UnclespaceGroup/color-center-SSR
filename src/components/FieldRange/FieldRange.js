import React from 'react'
import cssDesktop from './FieldRange.module.scss'
import cssMobile from './FieldRangeMobile.module.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'

const FieldRange = ({ input, label, text, value, names = ['a', 'b'], meta, ...props }) => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const css = isDesktop ? cssDesktop : cssMobile
  const inputChange = name => val => {
    input.onChange({
      ...input.value,
      [name]: val.target.value
    })
  }
  const error = ((input.value[names[0]] && input.value[names[1]]) && (!meta.pristine && meta.error)) ? meta.error : null
  const success = !meta.pristine && !meta.error
  return (
    <div className={css.container}>
      <label >{label}</label>
      <div className={css.wrapper}>
        <div className={css.input}>
          <div className={css.input__label}>Длина</div>
          <input value={input.value[names[0]] || ''} type={'number'} onChange={inputChange(names[0])} />
          <section>мм</section>
        </div>
        <div className={css.input}>
          <div className={css.input__label}>Ширина</div>
          <input value={input.value[names[1]] || ''} type={'number'} onChange={inputChange(names[1])} />
          <section>мм</section>
        </div>
        <div className={css.dropdown}>
        милиметры
        </div>
      </div>
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

export default React.memo(FieldRange)
