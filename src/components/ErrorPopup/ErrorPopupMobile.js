import React from 'react'
import PropTypes from 'prop-types'
import css from './ErrorPopupMobile.module.scss'
import { MAIN_PHONE_LONG_LINK } from '../../constants/USER_DATA'
import Padding from '../Padding/Padding'
import { MdClose, MdInfo } from 'react-icons/md'
import Button from '../Button/Button'

const ErrorPopup = ({ isOpen, onClose }) => (
  <div className={isOpen ? css.container__active : css.container}>
    <div className={css.wrapper}>
      <div className={css.close} onClick={onClose}><MdClose /></div>
      <div className={css.icon}><MdInfo /></div>
      <Padding value={20} />
      <div className={css.title}>Произошла ошибка с сервером</div>
      <Padding value={20} />
      <p>Повторите попытку позже, или позвоните нам по номеру {MAIN_PHONE_LONG_LINK}</p>
      <Padding value={20} />
      <Button classname={'purple'} onClick={onClose}>Закрыть</Button>
    </div>
  </div>
)
ErrorPopup.propTypes = {
  isOpen: PropTypes.bool
}

export default React.memo(ErrorPopup)
