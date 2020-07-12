import React from 'react'
import usePagePrice from 'pages/PagePrice/usePagePrice'
import _ from 'lodash'
import css from './pagePriceMobile.module.scss'
import Bg from 'components/Bg/Bg'
import LayoutMobile from 'components/Layout/LayoutMobile'
import FooterMobile from 'components/Footer/FooterMobile'
import HeaderMobile from 'components/Header/HeaderMobile'
import { ANCHOR_HOW_ORDER } from 'constants/ANCHORS'
import ContactsMobile from 'components/Contacts/ContactsMobile'

const PagePriceMobile = () => {
  const { items, advantages, banner } = usePagePrice()
  return (
    <div>
      <HeaderMobile />
      { banner &&
      <Bg img={banner.img}>
        <div className={css.bannerWrapper}>
          <LayoutMobile>
            <h1>{banner.title}</h1>
            <p>{banner.text}</p>
          </LayoutMobile>
        </div>
      </Bg>}
      <LayoutMobile className={css.container}>
        {
          _.map(items, ({ title, categories }, key) => (
            <div key={key}>
              <h2 className={css.titleH2}>{title}</h2>
              {
                _.map(categories, ({ products, title: catTitle }, catKey) => (
                  <div key={catKey}>
                    <h3 className={css.titleH3}>{catTitle}</h3>
                    <div className={css.table}>
                      {
                        _.map(products, (product, prodKey) => (
                          <div key={prodKey} className={css.tableBlock}>
                            <div className={css.tableTitle}>Наименование</div>
                            <div className={css.tableValue} dangerouslySetInnerHTML={{ __html: product.title }} />
                            <div className={css.tableTitle}>Цена, руб.</div>
                            <div className={css.tableValue}>{product.price}</div>
                            <div className={css.tableTitle}>Срок, дней</div>
                            <div className={css.tableValue}>{product.term}</div>
                          </div>

                        ))
                      }
                    </div>
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
      </LayoutMobile>
      <ContactsMobile id={ANCHOR_HOW_ORDER} />
      <FooterMobile />
    </div>
  )
}
export default React.memo(PagePriceMobile)
