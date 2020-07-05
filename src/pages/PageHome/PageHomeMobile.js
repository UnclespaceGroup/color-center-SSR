import React from 'react'
import css from 'pages/PageHome/pageHomeMobile.module.scss'
import MainBannerMobile from 'components/MainBanner/MainBannerMobile'
import Padding from 'components/Padding/Padding'
import AdvantagesMobile from 'components/Advantages/AdvantagesMobile'
import UsingMDFMobile from 'components/UsingMDF/UsingMDFMobile'
import iconGalka from 'static/svg/check-24px-white.svg'
import BannerMobile from 'components/Banner/BannerMobile'
import BlockColors from 'components/BlockColors/BlockColorsMobile'
import car from 'static/car.jpg'
import Bg from 'components/Bg/Bg'
import Footer from 'components/Footer/FooterMobile'
import Header from 'components/Header/HeaderMobile'
import Prices from 'components/Prices/PricesMobile'
import Contacts from 'components/Contacts/ContactsMobile'
import { ANCHOR_CONTACTS, ANCHOR_PRICE } from 'constants/ANCHORS'
import { text, bannerGuaranty } from 'pages/PageHome/PageHomeDesktop'
import { MAIN_PHONE_LINK } from 'constants/USER_DATA'
import usePageHome from 'pages/PageHome/usePageHome'

const PageHomeMobile = () => {
  const { usingMdf, advantages } = usePageHome()
  return (
    <div className={css.container}>
      <Header />
      <MainBannerMobile />
      <Padding value={60} />
      <AdvantagesMobile {...advantages} />
      <Padding value={60} />
      <UsingMDFMobile {...usingMdf} />
      <Padding value={60} />
      <BannerMobile title={'Гарантия качества'} text={bannerGuaranty} icon={iconGalka} />
      <Padding value={60} />
      <BlockColors />
      <Padding value={60} />
      <Bg img={car}>
        <BannerMobile bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'}
          text={
            <div>
              <p>Бесплатно по городу Сыктывкар</p>
              <p> Возможность доставки по Республике Коми</p>
              <p> Для заказа звоните {MAIN_PHONE_LINK}</p>
            </div>} />
      </Bg>
      <Padding value={60} />
      <Prices id={ANCHOR_PRICE} />
      <Padding value={60} />
      <BannerMobile title={'Заказать очень легко'} text={text} icon={iconGalka} />
      <Padding value={60} />
      <Contacts id={ANCHOR_CONTACTS} />
      <Padding value={60} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeMobile)
