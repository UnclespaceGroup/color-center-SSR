import React, { useState } from 'react'
import css from './Header.module.scss'
import cn from 'classnames'
import { MAIN_PHONE_LINK, MAIN_PHONE_LONG_LINK } from 'constants/USER_DATA'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { ANCHOR_CONTACTS, ANCHOR_FORM, ANCHOR_PRICE, ANCHOR_USING_MDF, ANCHOR_HOW_ORDER } from 'constants/ANCHORS'
import Collapse from 'react-collapse'
import { Link } from 'react-router-dom'
import { PAGE_HOME, PAGE_PRICE } from 'constants/ROUTES'

const Header = () => {
  const [ open, setOpen ] = useState(false)
  const scrollToHandle = (anchor) => {
    setOpen(false)
    scrollWindowTo(anchor)
  }
  return (
    <>
      <div className={cn(css.container, { [css.open]: open })}>
        <div className={css.header}>
          <Link to={PAGE_HOME} className={css.logo} >Центр цвета</Link>
          <div className={css.right}>
            <Link className={css.item} to={PAGE_HOME}>Главная</Link>
            <Link className={css.item} to={PAGE_PRICE}>Цены</Link>
            <a className={css.item} onClick={() => { scrollWindowTo(ANCHOR_HOW_ORDER) }}>Как заказать</a>
            <div className={css.item}><b>г. Сыктывкар</b></div>
            <div className={css.phone}>{MAIN_PHONE_LINK}</div>
          </div>
        </div>
        <Collapse isOpened={open}>
          <div className={css.content}>
            <div className={css.content__side} >
              <div className={css.label}>Номер телефона для звонков по России<br /> и Республике Коми</div>
              <div className={css.phone}>{MAIN_PHONE_LONG_LINK}</div>
            </div>
            <div className={css.content__menu}>
              <div className={css.content__item} onClick={() => { scrollToHandle(ANCHOR_USING_MDF) }}>Применение МДФ панелей</div>
              <div className={css.content__item} onClick={() => { scrollToHandle(ANCHOR_PRICE) }}>Стоимость и сроки</div>
              <div className={css.content__item} onClick={() => { scrollToHandle(ANCHOR_CONTACTS) }}>Контактная информация</div>
              <div className={css.content__item} onClick={() => { scrollToHandle(ANCHOR_FORM) }}>Форма заказа</div>
              <div className={css.content__item}>Способы заказа МДФ панели</div>
            </div>
          </div>
        </Collapse>
      </div>
      { open && <div className={css.back} onClick={() => setOpen(false)} />}
    </>
  )
}

export default React.memo(Header)
