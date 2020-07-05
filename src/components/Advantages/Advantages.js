import React from 'react'
import css from './Advantages.module.scss'
import Layout from '../Layout/Layout'

const Advantages = ({ items = [] }) => (
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
