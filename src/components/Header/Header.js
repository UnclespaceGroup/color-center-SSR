import React from 'react'
import css from './Header.module.scss'
import { MAIN_PHONE } from '../../constants/USER_DATA'

const Header = () => (
  <div className={css.container}>
    <div className={css.header}>
      <div className={css.logo} />
      <div className={css.right}>
        <div className={css.item}>Стоимость и сроки</div>
        <div className={css.item}>Каталог и продукция</div>
        <div className={css.item}>Контактная информация</div>
        <a className={css.phone}>{MAIN_PHONE}</a>
      </div>
    </div>
  </div>
)

export default React.memo(Header)
