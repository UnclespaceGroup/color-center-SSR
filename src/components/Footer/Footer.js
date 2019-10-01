import React from 'react'
import css from './Footer.module.scss'
import img from '../../static/shkaf.jpg'
import Layout from '../Layout/Layout'
import { MAIN_PHONE } from '../../constants/USER_DATA'

const Footer = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>{MAIN_PHONE}</div>
          <p>Центр Цвета, Сыктывкар</p>
          <p style={{ marginTop: '2rem', marginBottom: '6rem' }}>Круглосуточно, без выходных</p>
          <div className={css.socials}>
            <a href={'tel:891286353333'} className={css.viber} />
            <a href={'tel:891286353333'} className={css.wa} />
            <a href={'tel:891286353333'} className={css.vk} />
          </div>
        </div>
        <div className={css.hr} />
        <div className={css.brand}>
          <span>Made by UncleSpace group</span>
          <div className={css.logo} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(Footer)
