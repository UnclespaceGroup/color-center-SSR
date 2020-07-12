import React from 'react'
import css from 'pages/PageHome/pageHomeMobile.module.scss'
import MainBannerMobile from 'components/MainBanner/MainBannerMobile'
import Padding from 'components/Padding/Padding'
import AdvantagesMobile from 'components/Advantages/AdvantagesMobile'
import UsingMDFMobile from 'components/UsingMDF/UsingMDFMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import BlockColors from 'components/BlockColors/BlockColorsMobile'
import Footer from 'components/Footer/FooterMobile'
import Header from 'components/Header/HeaderMobile'
import Contacts from 'components/Contacts/ContactsMobile'
import { ANCHOR_CONTACTS } from 'constants/ANCHORS'
import usePageHome from 'pages/PageHome/usePageHome'
import List from 'components/List/List'
import ImageWithTextMobile from 'components/ImageWithText/ImageWithTextMobile'

const PageHomeMobile = () => {
  const {
    usingMdf,
    advantages,
    guarantee,
    delivery,
    mainBanner,
    products
  } = usePageHome()
  return (
    <div>
      <Header />
      <MainBannerMobile {...mainBanner} />
      <Padding value={60} />
      <h2 className={css.title}>{products?.title}</h2>
      <List items={products?.items} itemClassName={css.imageWithContent} >
        <ImageWithTextMobile />
      </List>
      <UsingMDFMobile className={css.usingMdf} {...usingMdf} />
      <AdvantagesMobile className={css.advantages} {...advantages} />
      <BannerMobile className={css.banner} {...guarantee} />
      <BlockColors />
      <BannerMobile className={css.banner} {...delivery} />
      <Contacts id={ANCHOR_CONTACTS} />
      <Padding value={60} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeMobile)
