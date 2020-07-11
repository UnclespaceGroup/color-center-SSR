import React from 'react'
import css from './UsingMDF.module.scss'
import Bg from '../Bg/Bg'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import cn from 'classnames'

const UsingMDF = ({ id, items = [], title, className }) => (
  <div id={id} className={className}>
    <Layout>
      <h2 className={css.mailTitle}>{title}</h2>
      <Padding value={80} />
    </Layout>
    <div className={css.container}>
      {
        items.map((item, key) => (
          <Bg key={key} img={item.img} className={cn(css[`item_${key}`])}>
            <div className={css.itemContainer}>
              <div className={css.wrapper} >
                <div className={css.title}>{item.title}</div>
                <div className={css.text}>{item.text}</div>
              </div>
            </div>
          </Bg>
        ))
      }
    </div>
  </div>
)

export default React.memo(UsingMDF)
