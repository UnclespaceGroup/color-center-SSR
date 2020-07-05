import React from 'react'
import MainBanner from 'components/MainBanner/MainBanner'
import Advantages from 'components/Advantages/Advantages'
import Padding from 'components/Padding/Padding'
import UsingMDF from 'components/UsingMDF/UsingMDF'
import Banner from 'components/Banner/Banner'
import iconGalka from 'static/svg/check-24px-white.svg'
import BlockColors from 'components/BlockColors/BlockColors'
import car from 'static/car.jpg'
import Bg from 'components/Bg/Bg'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Prices from 'components/Prices/Prices'
import Contacts from 'components/Contacts/Contacts'
import { ANCHOR_CONTACTS, ANCHOR_PRICE, ANCHOR_USING_MDF } from 'constants/ANCHORS'
import { MAIN_PHONE_LINK, MAIN_PHONE_LONG_LINK } from 'constants/USER_DATA'
import s from 'pages/PageHome/pageHomeDesktop.module.scss'
import usePageHome from 'pages/PageHome/usePageHome'

export const text = <div>
  <p>Просто позвоните нам на номер {MAIN_PHONE_LONG_LINK}</p>
  <p>Или заполните форму ниже</p>
</div>

export const bannerGuaranty = <div>
  <p>Покраска производится специализированным оборудованием при строгом соблюдении технологий
  </p>
  <address>{MAIN_PHONE_LINK}</address>
</div>

const PageHomeDesktop = () => {
  const { usingMdf, advantages } = usePageHome()
  return (
    <div className={s.container}>
      <Header />
      <MainBanner />
      <Padding value={120} />
      <Advantages {...advantages} />
      <Padding value={160} />
      <UsingMDF {...usingMdf} id={ANCHOR_USING_MDF} />
      <Padding value={120} />
      <Banner title={'Гарантия качества'} text={bannerGuaranty} icon={iconGalka} />
      <Padding value={120} />
      <BlockColors />
      <Padding value={120} />
      <Bg img={car}>
        <Banner bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'}
          text={
            <div>
              <p>Бесплатно по городу Сыктывкар</p>
              <p> Возможность доставки по Республике Коми</p>
              <p> Для заказа звоните {MAIN_PHONE_LINK}</p>
            </div>} />
      </Bg>
      <Padding value={120} />
      <Prices id={ANCHOR_PRICE} />
      <Padding value={120} />
      <Banner title='Заказать очень легко' text={text} />
      <Padding value={120} />
      <Contacts id={ANCHOR_CONTACTS} />
      <Padding value={120} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeDesktop)
