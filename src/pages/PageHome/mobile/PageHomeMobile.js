import React from 'react'
import css from './pageHomeMobile.module.scss'
import MainBannerMobile from '../../../components/MainBanner/MainBannerMobile'
import Padding from '../../../components/Padding/Padding'
import AdvantagesMobile from '../../../components/Advantages/AdvantagesMobile'
import UsingMDFMobile from '../../../components/UsingMDF/UsingMDFMobile'
import iconGalka from '../../../static/svg/check-24px-white.svg'
import BannerMobile from '../../../components/Banner/BannerMobile'
import BlockColors from '../../../components/BlockColors/BlockColorsMobile'
import car from '../../../static/car.jpg'
import Bg from '../../../components/Bg/Bg'
import Footer from '../../../components/Footer/FooterMobile'
import Header from '../../../components/Header/HeaderMobile'
// import OrderFormContainer from '../../../containers/OrderFormContainer/OrderFormContainer'

const PageHomeMobile = () => (
  <div className={css.container}>
    <Header />
    <MainBannerMobile />
    <Padding value={60} />
    <AdvantagesMobile />
    <Padding value={120} />
    <UsingMDFMobile />
    <Padding value={60} />
    <BannerMobile title={'Гарантия качества'} text={'Покраска производятся в специально оборудованном помещении в строгом соблюдении технологий'} icon={iconGalka} />
    <Padding value={60} />
    <BlockColors />
    <Padding value={60} />
    <Bg img={car}>
      <BannerMobile bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'} text={'Бесплатно по городу Сыктывкар. Возможность доставки по республике Коми'} />
    </Bg>
    <Padding value={60} />
    {/* <OrderFormContainer /> */}
    <Padding value={0} />
    <Footer />
  </div>
)

export default React.memo(PageHomeMobile)
