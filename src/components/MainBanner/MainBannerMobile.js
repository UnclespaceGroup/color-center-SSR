import React from 'react'
import css from './MainBanner.module.scss'
import Bg from '../Bg/Bg'
import im from 'static/katalog.jpg'

const MainBannerMobile = () => (
  <Bg img={im}>
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <h1 className={css.title}>Закажите МДФ панель в Сыктывкаре</h1>
          <ul>
            <li>Бесплатная доставка</li>
            <li>Точечный подбор цвета</li>
            <li>Гарантия качества</li>
          </ul>
        </div>
      </div>
    </div>
  </Bg>
)

export default React.memo(MainBannerMobile)
