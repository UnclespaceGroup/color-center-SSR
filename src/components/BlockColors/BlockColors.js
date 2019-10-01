import React from 'react'
import css from './BlockColors.module.scss'
import Layout from '../Layout/Layout'

const BlockColors = () => (
  <Layout className={css.container}>
    <div className={css.wrapper} >
      <div className={css.title}>Широкий выбор цвета</div>
      <div className={css.text}>ваы</div>
    </div>
    <div >
      <div className={css.img} />
    </div>
  </Layout>
)

export default React.memo(BlockColors)
