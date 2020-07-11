import React from 'react'
import css from './UsingMDFMobile.module.scss'
import Bg from '../Bg/Bg'
import Padding from '../Padding/Padding'

const UsingMDF = ({ items = [], className }) => (
  <div className={className}>
    <h2 className={css.mainTitle}>Применение МДФ панелей</h2>
    <Padding value={20} />
    <div className={css.container}>
      {
        items.map((item, key) => (
          <Bg key={key} img={item.img} className={css.bg} >
            <div className={css.item}>
              <div className={css.title}>{item.title}</div>
              <div className={css.text}>{item.text}</div>
            </div>
          </Bg>
        ))
      }
    </div>
  </div>
)

export default React.memo(UsingMDF)
