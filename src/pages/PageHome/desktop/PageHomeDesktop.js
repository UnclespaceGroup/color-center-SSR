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
import Prices from '../../../components/Prices/Prices'
import Contacts from '../../../components/Contacts/Contacts'
import { ANCHOR_CONTACTS, ANCHOR_FORM, ANCHOR_PRICE } from '../../../constants/ANCHORS'
import ModalWayOrder from '../../../containers/ModalWayOrder/ModalWayOrder'
import { useDispatch } from 'react-redux'
import { openWayOrdersModal } from '../../../actions/openWayOrdersModal'
import { MAIN_PHONE_LONG_LINK } from '../../../constants/USER_DATA'
import TableFormContainer from '../../../containers/TableFormContainer/TableFormContainer'

export const text = <div>
  <p>Просто позвоните нам на номер {MAIN_PHONE_LONG_LINK}</p>
  <p>Или заполните форму ниже</p>
</div>

export const bannerGuaranty = 'Покраска производится специализированным оборудованием при строгом соблюдении технологий'

const PageHomeDesktop = () => {
  const dispatch = useDispatch()
  const openWayOrderModal = (open) => {
    dispatch(openWayOrdersModal(open))
  } // TODO Поставить лого на хедер
  return (
    <div className={s.container}>
      <ModalWayOrder openWayOrderModal={openWayOrderModal} />
      <Header openWayOrderModal={openWayOrderModal} />
      <MainBanner />
      <Padding value={120} />
      <Advantages />
      <Padding value={160} />
      <UsingMDF openWayOrderModal={openWayOrderModal} />
      <Padding value={120} />
      <Banner title={'Гарантия качества'} text={bannerGuaranty} icon={iconGalka} />
      <Padding value={120} />
      <BlockColors />
      <Padding value={120} />
      <Bg img={car}>
        <Banner bgColor={'rgba(0,0,0,0.5)'} title={'Бесплатная доставка'} text={<div>Бесплатно по городу Сыктывкар<br /> Возможность доставки по Республике Коми</div>} />
      </Bg>
      <Padding value={120} />
      <Prices id={ANCHOR_PRICE} openWayOrderModal={openWayOrderModal} />
      <Padding value={120} />
      <Banner title={'Заказать очень легко'} text={text} />
      <Padding value={120} />
      <Contacts id={ANCHOR_CONTACTS} />
      <Padding value={120} />
      <TableFormContainer id={ANCHOR_FORM} />
      <Padding value={120} />
      <Footer />
    </div>
  )
}

export default React.memo(PageHomeDesktop)
