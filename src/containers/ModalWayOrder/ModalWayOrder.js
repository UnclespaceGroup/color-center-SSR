import React from 'react'
import css from './ModalWayOrder.module.scss'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'
import Padding from '../../components/Padding/Padding'
import { MAIN_PHONE, MAIN_PHONE_LONG_LINK } from '../../constants/USER_DATA'
import Button from '../../components/Button/Button'
import { MdClose } from 'react-icons/md'

const ModalWayOrder = ({ openWayOrderModal }) => {
  const isOpen = useSelector(state => state.toJS().modalWayOrderIsOpen)
  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => { openWayOrderModal(false) }}
    >
      <div className={css.container}>
        <Padding value={50} />
        <h2>Как сделать заказ </h2>
        <Padding value={45} />
        Заказать МДФ панель, или узнать больше вы сможете следующими способами:
        <Padding value={20} />
        <ul>
          <li>Просто позвонить по номеру <b><a href={`tel:${MAIN_PHONE}`}>{MAIN_PHONE}</a></b> (В сыктывкаре),<br /> или {MAIN_PHONE_LONG_LINK} (по республике Коми и России)</li>
          <li>Приехать к нам по адресу <b>г.Сыктывкар, Индустриальная, 1/18</b>, и лично все обсудить</li>
        </ul>
        <Padding value={50} />
        <Button classname={'purple'} onClick={() => { openWayOrderModal(false) }} >Закрыть<MdClose /></Button>
        <Padding value={50} />
        <div className={css.footer} >
        </div>
      </div>
    </Modal>
  )
}

export default React.memo(ModalWayOrder)
