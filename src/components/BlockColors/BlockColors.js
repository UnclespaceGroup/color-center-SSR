import React from 'react'
import css from './BlockColors.module.scss'
import Layout from '../Layout/Layout'

export const text = <div>
  <p>Цветовая гамма насчитывает более 50 основных цветов и оттенков.</p>
  <p>Доступны три основных типа цвета: металлик, глянцевый и матовый.</p>
  <p>Можно подобрать цвет под уже имеющуюся мебель в вашем доме</p>
</div>

const BlockColors = () => (
  <Layout className={css.container}>
    <div className={css.wrapper} >
      <div className={css.title}>Широкий выбор цвета</div>
      <div className={css.text}>
        {text}
      </div>
    </div>
    <div >
      <div className={css.img} />
    </div>
  </Layout>
)

export default React.memo(BlockColors)
