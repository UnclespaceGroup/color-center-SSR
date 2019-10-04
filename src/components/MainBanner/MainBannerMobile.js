import React from 'react'
import css from './MainBannerMobile.module.scss'
import Bg from '../Bg/Bg'
import im from 'static/kuhni-pod-zakaz78.jpg'

import { title } from './MainBanner'

const MainBannerMobile = () => (
  <Bg img={im}>
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
          <ul>
            <li>Короткие сроки</li>
            <li>Гарантия качества</li>
            <li>Работаем с юридическими и физ. лицами</li>
          </ul>
        </div>
      </div>
    </div>
  </Bg>
)

export default React.memo(MainBannerMobile)
