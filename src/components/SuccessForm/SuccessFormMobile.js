import React from 'react'
import css from './SuccessFormMobile.module.scss'
import Button from '../Button/Button'
import Padding from '../Padding/Padding'

const SuccessForm = ({ onClose }) => (
  <div className={css.container}>
    <Padding value={80} />
    <h2>Заявка успешно отправлена</h2>
    <Padding value={50} />
    <div>
      Скоро мы свяжемся с вами
    </div>
    <Padding value={50} />
    <Button classname={'purple'} className={css.btn} onClick={onClose}>Закрыть</Button>
    <Padding value={100} />
  </div>
)

export default React.memo(SuccessForm)
