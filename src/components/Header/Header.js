import React from 'react'
import css from './Header.module.scss'
import { MAIN_PHONE, MAIN_PHONE_LONG } from '../../constants/USER_DATA'
import { scrollTo } from 'utils/scrollTo'
import { ANCHOR_CONTACTS, ANCHOR_PRICE } from '../../constants/ANCHORS'

const Header = ({ openWayOrderModal }) => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.logo} >Центр цвета</div>
        <div className={css.right}>
          <div className={css.item} onClick={() => { scrollTo(ANCHOR_PRICE) }}>Стоимость и сроки</div>
          <div className={css.item} onClick={() => { scrollTo(ANCHOR_CONTACTS) }}>Контактная информация</div>
          <div className={css.item} onClick={() => { openWayOrderModal(true) }} >Как заказать</div>
          <a className={css.phone} href={`tel:${MAIN_PHONE_LONG}`}>{MAIN_PHONE}</a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
