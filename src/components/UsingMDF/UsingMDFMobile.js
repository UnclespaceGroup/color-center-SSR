import React from 'react'
import css from './UsingMDFMobile.module.scss'
import Bg from '../Bg/Bg'
import LayoutMobile from '../Layout/LayoutMobile'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { ANCHOR_FORM } from 'constants/ANCHORS'
import { scrollWindowTo } from 'utils/scrollWindowTo'

const UsingMDF = ({ items = [] }) => (
  <LayoutMobile>
    <h2 className={css.mainTitle}>Применение МДФ панелей</h2>
    <Padding value={20} />
    <div className={css.container}>
      {
        items.map((item, key) => (
          <Bg key={key} img={item.img} className={css.bg} >
            <div className={css.item}>
              <div >
                <div className={css.title}>{item.title}</div>
                <div className={css.text}>{item.text}</div>
              </div>
              <div className={css.button}><Button classname={'inline'} onClick={() => { scrollWindowTo(ANCHOR_FORM) }} >Заказать<MdKeyboardArrowRight /></Button></div>
            </div>
          </Bg>
        ))
      }
    </div>
  </LayoutMobile>
)

export default React.memo(UsingMDF)
