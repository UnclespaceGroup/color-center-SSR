import React from 'react'
import css from './BlockColorsMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import { text } from './BlockColors'

const BlockColors = () => (
  <Layout className={css.container}>
    <div className={css.img} />
    <div className={css.wrapper} >
      <div className={css.title}>Широкий выбор цвета</div>
      <div className={css.text}>{text}</div>
    </div>
  </Layout>
)

export default React.memo(BlockColors)
