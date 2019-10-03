import React from 'react'
import css from './Advantages.module.scss'
import Layout from '../Layout/Layout'
import im1 from 'static/svg/volume_off-24px.svg'
import im2 from 'static/svg/eco-24px.svg'
import im3 from 'static/svg/time.svg'
import im4 from 'static/svg/house-24px.svg'
import im5 from 'static/svg/build.svg'
import im6 from 'static/svg/landscape-24px.svg'

export const items = [
  {
    img: im1,
    title: 'Тепло и звукоизоляция',
    text: 'Защищает вас от шума на улице, сделает квартиру теплее'
  },
  {
    img: im2,
    title: 'Экологически чисто',
    text: 'Стружка цеппляется лингнином, выделяемом из древисины'
  },
  {
    img: im6,
    title: 'Широкое использование',
    text: 'МДФ панели можно использовать как для корпусной мебели, так и комнатного декора'
  },
  {
    img: im3,
    title: 'Надежность',
    text: 'Полировка панели вернет ей первозданный вид'
  },
  {
    img: im4,
    title: 'Легко ухаживать',
    text: 'МДФ не боятся влаги, больших температур, химических моющих средств'
  },
  {
    img: im5,
    title: 'Просто восстановить',
    text: 'Вы всегда сможете обратиться к нам, за повторной покраской МДФ панели'
  }
]

const Advantages = () => (
  <Layout >
    <div className={css.container}>
      {
        items.map((item, key) => (
          <AdvantagesItem {...item} key={key} />
        ))
      }
    </div>
  </Layout>
)

const AdvantagesItem = ({ img, title, text }) => (
  <div className={css.wrapper} >
    <div className={css.icon} style={{ backgroundImage: `url(${img})` }} />
    <div className={css.title}>{title}</div>
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(Advantages)
