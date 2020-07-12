import React from 'react'
import Header from 'components/Header/Header'
import usePagePrice from 'pages/PagePrice/usePagePrice'
import Footer from 'components/Footer/Footer'
import _ from 'lodash'
import css from './pagePriceDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import Bg from 'components/Bg/Bg'
import Contacts from 'components/Contacts/Contacts'
import { ANCHOR_HOW_ORDER } from 'constants/ANCHORS'

const PagePriceDesktop = () => {
  const { items, advantages, banner } = usePagePrice()
  return (
    <div>
      <Header />
      { banner &&
      <Bg img={banner.img} className={css.banner}>
        <div className={css.bannerWrapper}>
          <Layout>
            <h1>{banner.title}</h1>
            <p>{banner.text}</p>
          </Layout>
        </div>
      </Bg>}
      <Layout>
        <div className={css.container}>
          {
            _.map(items, ({ title, categories }, key) => (
              <div key={key}>
                <h2 className={css.titleH2}>{title}</h2>
                {
                  _.map(categories, ({ products, title: catTitle }, catKey) => (
                    <div key={catKey}>
                      <h3 className={css.titleH3}>{catTitle}</h3>
                      <table className={css.table}>
                        <thead>
                          <tr>
                            <th>Наименование</th>
                            <th>Цена, руб.</th>
                            <th>Срок, дней</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            _.map(products, (product, prodKey) => (
                              <tr key={prodKey}>
                                <td dangerouslySetInnerHTML={{ __html: product.title }} />
                                <td>{product.price}</td>
                                <td>{product.term}</td>
                              </tr>

                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  ))
                }
              </div>
            ))
          }
          <div className={css.advantages}>
            <h2 className={css.titleH2}>Дополнительные сведения</h2>
            <ul>
              {
                _.map(advantages, (item, key) => (
                  <li key={key}>
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
      <Contacts id={ANCHOR_HOW_ORDER} />
      <Footer />
    </div>
  )
}
export default React.memo(PagePriceDesktop)
