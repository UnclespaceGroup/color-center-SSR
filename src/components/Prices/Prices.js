import React from 'react'
import css from './Prices.module.scss'
import Button from '../Button/Button'
import Layout from '../Layout/Layout'
import ReactTooltip from 'react-tooltip'
import { MdInfo } from 'react-icons/md'
import Padding from '../Padding/Padding'

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

const Prices = () => (
  <Layout className={css.container}>
    <h2>Цены на заказ МДФ</h2>
    <Padding value={60} />
    <div className={css.row}>
      {
        items.map((item, key) => (
          <Price key={key} mini={key > 1} {...item} />
        ))
      }
    </div>
  </Layout>
)

const Price = ({ title, price, features = [], mini, tooltip, text }) => (
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
      <Button className={css.btn} classname={'purple'}>Заказать</Button>
    </div>
  </div>
)

export default React.memo(Prices)
