import React from 'react'
import css from './UsingMDFMobile.module.scss'
import Bg from '../Bg/Bg'
import im1 from 'static/panel2.jpg'
import im2 from 'static/kitchen.jpg'
import im3 from 'static/window.jpeg'
import im4 from 'static/shkaf.jpg'
import LayoutMobile from '../Layout/LayoutMobile'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'
import { MdKeyboardArrowRight } from 'react-icons/md'

const items = [
  {
    title: 'Покрытие стен',
    text: <div>Не требует ровной поверхности<br /> Дополнительная тепло- и шумоизоляция</div>,
    img: im1
  },
  {
    title: 'Кухонная мебель',
    text: '',
    img: im2
  },
  {
    title: 'Подоконники и проемы',
    text: '',
    img: im3
  },
  {
    title: 'Шкафы и тумбы',
    text: '',
    img: im4
  }
]

const UsingMDF = ({ openWayOrderModal }) => (
  <>
    <LayoutMobile>
      <h2>Применение МДФ панелей</h2>
      <Padding value={20} />
    </LayoutMobile>
    <div className={css.container}>
      {
        items.map((item, key) => (
          <Bg key={key} img={item.img} className={css.bg} >
            <div className={css.item}>
              <div >
                <div className={css.title}>{item.title}</div>
                <div className={css.text}>{item.text}</div>
              </div>
              <div className={css.button}><Button classname={'inline'} onClick={() => { openWayOrderModal(true) }} >Узнать больше<MdKeyboardArrowRight /></Button></div>
            </div>
          </Bg>
        ))
      }
    </div>
  </>
)

export default React.memo(UsingMDF)
