import React from 'react'
import css from './OrderFeedbackFormMobile.module.scss'
import { Field } from 'react-final-form'
import FieldInput from '../FieldInput/FieldInput'
import { FIELD_AGREE, FIELD_NAME, FIELD_PHONE } from '../../constants/FORM_DATA'
import Button from '../Button/Button'
import Padding from '../Padding/Padding'
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox'
import { required } from '../../utils/validators'

const OrderFeedbackForm = ({ onSubmit, disabled }) => (
  <div className={css.container}>
    <Padding value={40} />
    <h2>Отправить заявку</h2>
    <Padding value={16} />
    <Field
      component={FieldInput}
      name={FIELD_NAME}
      label={'Ваше имя'}
      validate={required}
    />
    <Padding value={16} />
    <Field
      component={FieldInput}
      name={FIELD_PHONE}
      type={'number'}
      label={'Номер телефона'}
      validate={required}
    />
    <Padding value={16} />
    <Field
      component={FieldCheckbox}
      name={FIELD_AGREE}
      validate={required}
    >
      Я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений
    </Field>
    <Padding value={40} />
    <Button className={css.button} onClick={onSubmit} classname={'purple'} disabled={disabled} >Заказать</Button>
    <Padding value={60} />
  </div>
)

export default React.memo(OrderFeedbackForm)
