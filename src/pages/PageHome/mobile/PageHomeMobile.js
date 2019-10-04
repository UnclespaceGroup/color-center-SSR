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
import Prices from '../../../components/Prices/PricesMobile'
// import OrderFormContainer from '../../../containers/OrderFormContainer/OrderFormContainer'
import Contacts from '../../../components/Contacts/ContactsMobile'
import { ANCHOR_CONTACTS, ANCHOR_PRICE } from '../../../constants/ANCHORS'
import { useDispatch } from 'react-redux'
import { openWayOrdersModal } from '../../../actions/openWayOrdersModal'
import ModalWayOrder from '../../../containers/ModalWayOrder/ModalWayOrderMobile'

import { text, bannerGuaranty } from '../desktop/PageHomeDesktop'

const PageHomeMobile = () => {
  const dispatch = useDispatch()
  const openWayOrderModal = (open) => {
    dispatch(openWayOrdersModal(open))
  }
  return (
    <div className={css.container}>
      <Header openWayOrderModal={openWayOrderModal} />
      <ModalWayOrder openWayOrderModal={openWayOrderModal} />
      <MainBannerMobile />
      <Padding value={60} />
      <AdvantagesMobile />
      <Padding value={60} />
      <UsingMDFMobile openWayOrderModal={openWayOrderModal} />
      <Padding value={60} />
      <BannerMobile title={'Гарантия качества'} text={bannerGuaranty} icon={iconGalka} />
      <Padding value={60} />
      <BlockColors />
      <Padding value={60} />
      <Bg img={car}>
        <BannerMobile bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'} text={'Бесплатно по городу Сыктывкар. Возможность доставки по республике Коми'} />
      </Bg>
      <Padding value={60} />
      <Prices openWayOrderModal={openWayOrderModal} id={ANCHOR_PRICE} />
      <Padding value={60} />
      <BannerMobile title={'Заказать очень легко'} text={text} icon={iconGalka} />
      <Padding value={60} />
      {/* <OrderFormContainer /> */}
      <Padding value={0} />
      <Contacts id={ANCHOR_CONTACTS} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeMobile)
