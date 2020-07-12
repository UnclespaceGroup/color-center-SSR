import React, { useState } from 'react'
import css from './HeaderMobile.module.scss'
import Collapse from 'react-collapse'
import { MdMenu, MdClose } from 'react-icons/md'
import { MAIN_PHONE_LONG } from 'constants/USER_DATA'
import LayoutMobile from '../Layout/LayoutMobile'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { ANCHOR_CONTACTS, ANCHOR_PRICE } from 'constants/ANCHORS'

const HeaderMobile = ({ openWayOrderModal }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const click = (to) => () => {
    setIsOpen(false)
    scrollWindowTo(to)
  }
  return (
    <>
      <div className={css.container}>
        <LayoutMobile>
          <div className={css.header}>
            <div className={css.logo} >Центр цвета</div>
            <div className={css.burger} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <MdClose /> : <MdMenu />}
            </div>
          </div>
        </LayoutMobile>
        <Collapse isOpened={isOpen}>
          <LayoutMobile className={css.wrapper}>
            <div>
              <div className={css.item} onClick={click(ANCHOR_PRICE)}>Цены</div>
              <div className={css.item} onClick={click(ANCHOR_CONTACTS)}>Как заказать</div>
            </div>
            <div className={css.bottom}>
              <div className={css.item}>г. Сыктывкар</div>
              <a className={css.phone} href={`tel:${MAIN_PHONE_LONG}`}>{MAIN_PHONE_LONG}</a>
            </div>
          </LayoutMobile>
        </Collapse>
      </div>
      {
        <div className={isOpen ? css.back__active : css.back} onClick={() => setIsOpen(false)} />
      }
    </>
  )
}

export default React.memo(HeaderMobile)
