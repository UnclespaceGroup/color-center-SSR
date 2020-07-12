import React from 'react'
import MainBanner from 'components/MainBanner/MainBanner'
import Advantages from 'components/Advantages/Advantages'
import Padding from 'components/Padding/Padding'
import UsingMDF from 'components/UsingMDF/UsingMDF'
import Banner from 'components/Banner/Banner'
import BlockColors from 'components/BlockColors/BlockColors'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Contacts from 'components/Contacts/Contacts'
import { ANCHOR_HOW_ORDER, ANCHOR_USING_MDF } from 'constants/ANCHORS'
import css from 'pages/PageHome/pageHomeDesktop.module.scss'
import usePageHome from 'pages/PageHome/usePageHome'
import List from 'components/List/List'
import ImageWithTextDesktop from 'components/ImageWithText/ImageWithTextDesktop'

const PageHomeDesktop = () => {
  const { usingMdf, advantages, products, guarantee, delivery, mainBanner } = usePageHome()
  return (
    <div className={css.container}>
      <Header />
      <MainBanner {...mainBanner} />
      <Padding value={120} />
      <h2 className={css.title}>{products?.title}</h2>
      <List items={products?.items} itemClassName={css.imageWithContent} >
        <ImageWithTextDesktop />
      </List>
      <UsingMDF className={css.using} {...usingMdf} id={ANCHOR_USING_MDF} />
      <Advantages className={css.advantages} {...advantages} />
      <Banner className={css.banner} {...guarantee} />
      <BlockColors />
      <Banner className={css.banner} {...delivery} />
      <Contacts id={ANCHOR_HOW_ORDER} />
      <Padding value={120} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeDesktop)
