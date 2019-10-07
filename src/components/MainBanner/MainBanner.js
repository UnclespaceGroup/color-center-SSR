import React from 'react'
import css from './MainBanner.module.scss'
import Bg from '../Bg/Bg'
import im from 'static/kuhni-pod-zakaz78.jpg'
import Button from '../Button/Button'
import { scrollWindowTo } from '../../utils/scrollWindowTo'
import { ANCHOR_FORM } from '../../constants/ANCHORS'
import Padding from '../Padding/Padding'
import SocialIcons from '../SocialIcons/SocialIcons'

export const title = 'Продажа крашенных МДФ фасадов собственного производства в Сыктывкаре'

const MainBanner = () => (
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
          <Padding value={20} />
          <Button className={css.btn} classname={'inline'} onClick={() => { scrollWindowTo(ANCHOR_FORM) }}>Заказать</Button>
        </div>
      </div>
      <div className={css.social}><SocialIcons /></div>
    </div>
  </Bg>
)

export default React.memo(MainBanner)
