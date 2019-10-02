import React, { useState } from 'react'
import css from './HeaderMobile.module.scss'
import Collapse from 'react-collapse'
import { MdMenu, MdClose } from 'react-icons/md'
import { MAIN_PHONE } from '../../constants/USER_DATA'
import LayoutMobile from '../Layout/LayoutMobile'

const HeaderMobile = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div className={css.container}>
      <LayoutMobile>
        <div className={css.header}>
          <div className={css.logo} />
          <a className={css.phone}>{MAIN_PHONE}</a>
          <div className={css.burger} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose /> : <MdMenu />}
          </div>
        </div>
      </LayoutMobile>
      <Collapse isOpened={isOpen}>
        <LayoutMobile className={css.wrapper}>
          <div className={css.item}>Стоимость и сроки</div>
          <div className={css.item}>Каталог и продукция</div>
          <div className={css.item}>Контактная информация</div>
          <a className={css.phone}>{MAIN_PHONE}</a>
        </LayoutMobile>
      </Collapse>
    </div>
  )
}

export default React.memo(HeaderMobile)
