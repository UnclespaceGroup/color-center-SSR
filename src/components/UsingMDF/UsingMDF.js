import React from 'react'
import css from './UsingMDF.module.scss'
import Bg from '../Bg/Bg'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import cn from 'classnames'
import { ANCHOR_FORM } from 'constants/ANCHORS'
import { scrollWindowTo } from 'utils/scrollWindowTo'

const UsingMDF = ({ id, items = [], title }) => (
  <div id={id}>
    <Layout>
      <h2 className={css.mailTitle}>{title}</h2>
      <Padding value={80} />
    </Layout>
    <div className={css.container}>
      {
        items.map((item, key) => (
          <Bg key={key} img={item.img} className={cn(css[`item_${key}`], css.item)}>
            <div className={css.wrapper} >
              <div className={css.title}>{item.title}</div>
              <div className={css.text}>{item.text}</div>
            </div>
            <div className={css.button}><Button classname={'inline'} onClick={() => { scrollWindowTo(ANCHOR_FORM) }} >Заказать<MdKeyboardArrowRight /></Button></div>
          </Bg>
        ))
      }
    </div>
  </div>
)

export default React.memo(UsingMDF)
