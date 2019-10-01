import React from 'react'
import css from './FieldRange.module.scss'

const FieldRange = ({ input, label, text, value, names = ['a', 'b'], ...props }) => {
  const inputChange = name => val => {
    input.onChange({
      ...input.value,
      [name]: val.target.value
    })
  }
  console.log(input)
  return (
    <div className={css.container}>
      <label >{label}</label>
      <div className={css.wrapper}>
        <div className={css.input}>
          <div className={css.input__label}>Длина</div>
          <input value={input.value[names[0]]} type={'number'} onChange={inputChange(names[0])} />
          <section>мм</section>
        </div>
        <div className={css.input}>
          <div className={css.input__label}>Ширина</div>
          <input value={input.value[names[1]]} type={'number'} onChange={inputChange(names[1])} />
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
