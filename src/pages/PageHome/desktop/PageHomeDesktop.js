import React from 'react'
import s from './pageHomeDesktop.module.scss'
import MainBanner from '../../../components/MainBanner/MainBanner'
import Advantages from '../../../components/Advantages/Advantages'
import Padding from '../../../components/Padding/Padding'
import UsingMDF from '../../../components/UsingMDF/UsingMDF'
import Banner from '../../../components/Banner/Banner'
import iconGalka from 'static/svg/check-24px-white.svg'
import BlockColors from '../../../components/BlockColors/BlockColors'
import car from 'static/car.jpg'
import Bg from '../../../components/Bg/Bg'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import OrderFormContainer from '../../../containers/OrderFormContainer/OrderFormContainer'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <Header />
    <MainBanner />
    <Padding value={120} />
    <Advantages />
    <Padding value={160} />
    <UsingMDF />
    <Padding value={120} />
    <Banner title={'Гарантия качества'} text={'Покраска производятся в специально оборудованном помещении в строгом соблюдении технологий'} icon={iconGalka} />
    <Padding value={120} />
    <BlockColors />
    <Padding value={120} />
    <Bg img={car}>
      <Banner bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'} text={'Бесплатно по городу Сыктывкар. Возможность доставки по республике Коми'} />
    </Bg>
    <Padding value={120} />
    <OrderFormContainer />
    <Padding value={120} />
    <Footer />
  </div>
)

export default React.memo(PageHomeDesktop)
