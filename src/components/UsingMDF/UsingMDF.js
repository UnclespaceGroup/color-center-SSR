import React from 'react'
import css from './UsingMDF.module.scss'
import Bg from '../Bg/Bg'
import im1 from 'static/panel2.jpg'
import im2 from 'static/kitchen.jpg'
import im3 from 'static/window.jpeg'
import im4 from 'static/shkaf.jpg'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import cn from 'classnames'

const items = [
  {
    title: 'Покрытие стен',
    text: <div>Не требует ровной поверхности<br /> Дополнительная тепло- и шумоизоляция</div>,
    button: <Button classname={'inline'} >Узнать больше<MdKeyboardArrowRight /></Button>,
    img: im1
  },
  {
    title: 'Кухонная мебель',
    text: '',
    button: <Button classname={'inline'} >Узнать больше<MdKeyboardArrowRight /></Button>,
    img: im2
  },
  {
    title: 'Подоконники и проемы',
    text: '',
    button: <Button classname={'inline'} >Узнать больше<MdKeyboardArrowRight /></Button>,
    img: im3
  },
  {
    title: 'Шкафы и тумбы',
    text: '',
    button: <Button classname={'inline'} >Узнать больше<MdKeyboardArrowRight /></Button>,
    img: im4
  }
]

const UsingMDF = () => (
  <>
    <Layout>
      <h2>Применение МДФ панелей</h2>
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
            <div className={css.button}>{item.button}</div>
          </Bg>
        ))
      }
    </div>
  </>
)

export default React.memo(UsingMDF)