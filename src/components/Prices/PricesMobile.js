import React from 'react'
import css from './PricesMobile.module.scss'
import Button from '../Button/Button'
import Layout from '../Layout/LayoutMobile'
import ReactTooltip from 'react-tooltip'
import { MdInfo } from 'react-icons/md'
import Padding from '../Padding/Padding'
import Swiper from 'react-id-swiper'

const items = [
  {
    title: 'Матовая эмаль',
    features: [
      'Срок работы <span>12 дней</span>',
      'Гарантия <span>2 года</span>'
    ],
    price: '3900',
    info: 'Доставка бесплатна',
    text: 'МДФ панель матового цвета'
  },
  {
    title: 'Глянцевая эмаль',
    features: [
      'Срок работы <span>12 дней</span>',
      'Гарантия <span>2 года</span>'
    ],
    price: '5400',
    text: 'Глянцевая МДФ панель'
  },
  {
    title: 'Металлик',
    features: [
      'Срок работы <span>15 дней</span>',
      'Гарантия <span>2 года</span>'
    ],
    price: '5600',
    text: 'МДФ панель цвета металлик'
  },
  {
    title: 'Перламутр',
    features: [
      'Срок работы <span>15 дней</span>',
      'Гарантия <span>2 года</span>'
    ],
    price: '5800',
    text: 'МДФ панель перламутрового цвета'
  },
  {
    title: 'Услуги покраски',
    features: [
      '<span>Покраска пластиковых деталей</span>',
      '<span>Полировка панелей</span>'
    ],
    price: '800'
  }
]

const params = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  effect: 'coverflow',
  centeredSlides: true,
  slideClass: css.slide,
  containerClass: css.container,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const Prices = ({ id, openWayOrderModal }) => (
  <div id={id}>
    <Layout >
      <h2>Цены на заказ МДФ</h2>
    </Layout>
    <Padding value={20} />
    <Swiper {...params}>
      {
        items.map((item, key) => (
          <div key={key}>
            <Price key={key} mini={key > 1} {...item} openWayOrderModal={openWayOrderModal} />
          </div>
        ))
      }
    </Swiper>
  </div>
)

const Price = ({ title, price, features = [], mini, tooltip, text, openWayOrderModal }) => (
  <div className={mini ? css.wrapper__mini : css.wrapper} >
    { tooltip && <div className={css.info} data-tip='' data-for='test' >
      <MdInfo />
    </div>}
    <ReactTooltip id='test'>{tooltip}</ReactTooltip>
    <div>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
      {
        features.map((item, key) => (
          <div className={css.item} key={key} dangerouslySetInnerHTML={{ __html: item }} />
        ))
      }
    </div>
    <div className={css.footer}>
      <div className={css.price}>{price} <span>руб./м<sup>2</sup></span></div>
      <Button className={css.btn} onClick={() => { openWayOrderModal(true) }} classname={'purple'}>Заказать</Button>
    </div>
  </div>
)

export default React.memo(Prices)
