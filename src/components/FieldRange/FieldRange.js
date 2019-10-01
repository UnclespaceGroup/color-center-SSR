import React from 'react'
import css from './FieldRange.module.scss'

const FieldRange = ({ input, label, text, value, ...props }) => {
  console.log(input)
  const inputChange = name => val => {
    input.onChange({
      name: val
    })
  }
  return (
    <div className={css.container}>
      <label >{label}</label>
      <div className={css.wrapper}>
        <div className={css.input}>
          <div className={css.input__label}>Длина</div>
          <input value={input.aa} type={'number'} onChange={inputChange('aa')} />
          <section>мм</section>
        </div>
        <div className={css.input}>
          <div className={css.input__label}>Ширина</div>
          <input value={input.bb} type={'number'} onChange={inputChange('bb')} />
          <section>мм</section>
        </div>
        <div className={css.dropdown}>
        милиметры
        </div>
      </div>
      <div className={css.line} />
      <div className={css.text} >{text}</div>
    </div>
  )
}

export default React.memo(FieldRange)
