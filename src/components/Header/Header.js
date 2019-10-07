import React, { useState } from 'react'
import css from './Header.module.scss'
import cn from 'classnames'
import { MAIN_PHONE, MAIN_PHONE_LONG, MAIN_PHONE_LONG_LINK } from '../../constants/USER_DATA'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { ANCHOR_CONTACTS, ANCHOR_FORM, ANCHOR_PRICE, ANCHOR_USING_MDF } from '../../constants/ANCHORS'
import { MdMenu, MdClose } from 'react-icons/md'
import Collapse from 'react-collapse'

const Header = ({ openWayOrderModal }) => {
  const [ open, setOpen ] = useState(false)
  const scrollToHandle = (anchor) => {
    setOpen(false)
    scrollWindowTo(anchor)
  }
  return (
    <>
      <div className={cn(css.container, { [css.open]: open })}>
        <div className={css.header}>
          <div className={css.logo} >Центр цвета</div>
          <div className={css.right}>
            <div className={css.item} onClick={() => { scrollWindowTo(ANCHOR_PRICE) }}>Цены</div>
            <div className={css.item} onClick={() => { scrollWindowTo(ANCHOR_CONTACTS) }}>Контакты</div>
            <div className={css.item} onClick={() => { openWayOrderModal(true) }} >Как заказать</div>
            <a className={css.phone} href={`tel:${MAIN_PHONE_LONG}`}>{MAIN_PHONE}</a>
            <div className={css.burger} onClick={() => setOpen(!open)}>{ open ? <MdClose /> : <MdMenu />}</div>
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
              <div className={css.content__item} onClick={() => { openWayOrderModal(true) }} >Способы заказа МДФ панели</div>
            </div>
          </div>
        </Collapse>
      </div>
      { open && <div className={css.back} onClick={() => setOpen(false)} />}
    </>
  )
}

export default React.memo(Header)
