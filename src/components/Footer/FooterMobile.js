import React from 'react'
import css from './FooterMobile.module.scss'
import img from '../../static/shkaf.jpg'
import Layout from '../Layout/LayoutMobile'
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
            <a href={`tel:${MAIN_PHONE}`} className={css.viber} />
            <a href={`tel:${MAIN_PHONE}`} className={css.wa} />
            <a href={`tel:${MAIN_PHONE}`} className={css.vk} />
          </div>
        </div>
        <div className={css.hr} />
        <div className={css.brand}>
          <div className={css.logo} />
          <span>Made by UncleSpace group</span>
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(Footer)
