import React from 'react'
import css from './FooterMobile.module.scss'
import img from '../../static/shkaf.jpg'
import Layout from '../Layout/LayoutMobile'
import { MAIN_PHONE_LINK, MAIN_PHONE_LONG, VK_LINK } from '../../constants/USER_DATA'
import Padding from '../Padding/Padding'

const Footer = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>{MAIN_PHONE_LINK}</div>
          <p>Центр Цвета, Сыктывкар</p>
          <Padding value={40} />
          <div className={css.socials}>
            <a href={`tel:${MAIN_PHONE_LONG}`} className={css.viber} />
            <a href={`tel:${MAIN_PHONE_LONG}`} className={css.wa} />
            <a href={VK_LINK} className={css.vk} />
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
