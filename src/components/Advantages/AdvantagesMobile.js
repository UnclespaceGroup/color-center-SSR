import React from 'react'
import css from './AdvantagesMobile.module.scss'
import Swiper from 'react-id-swiper'
import { items } from './Advantages'
// import 'react-id-swiper/lib/styles/css/swiper.css'

const params = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  slideClass: css.wrapper,
  spaceBetween: 60
}

const AdvantagesMobile = () => {
  return (
    <div >
      <Swiper
        {...params}
      >
        {
          items.map((item, key) => (
            <AdvantagesItem {...item} key={key} />
          ))
        }
      </Swiper>
    </div>
  )
}

const AdvantagesItem = ({ img, title, text }) => (
  <div className={css.wrapper} >
    <div className={css.icon} style={{ backgroundImage: `url(${img})` }} />
    <div className={css.title}>{title}</div>
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(AdvantagesMobile)
