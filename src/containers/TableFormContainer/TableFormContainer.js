import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TableFormDesktop from '../../components/TableForm/TableForm'
import TableFormMobile from '../../components/TableForm/TableFormMobile'
import { Form } from 'react-final-form'
import {
  FIELD_COLOR_CODE, FIELD_COLOR_SHADE,
  FIELD_RADIUS,
  FORM_FEEDBACK,
  FORM_TABLE_ORDER
} from '../../constants/FORM_DATA'
import FormStateToRedux from '../../helpers/FormStateToRedux'
import ModalOrderDesktop from '../Modal/Modal'
import ModalOrderMobile from '../Modal/ModalMobile'
import OrderFeedbackFormDesktop from '../../components/OrderFeedbackForm/OrderFeedbackForm'
import OrderFeedbackFormMobile from '../../components/OrderFeedbackForm/OrderFeedbackFormMobile'
import SuccessFormDesktop from '../../components/SuccessForm/SuccessForm'
import SuccessFormMobile from '../../components/SuccessForm/SuccessFormMobile'
import arrayMutators from 'final-form-arrays'
import axios from 'axios'
import { formatMessage, formatUserData } from '../../utils/formatMessage'
import ErrorPopupDesktop from '../../components/ErrorPopup/ErrorPopup'
import ErrorPopupMobile from '../../components/ErrorPopup/ErrorPopupMobile'
import moment from 'moment'
import { formatPushValues } from '../../utils/formUtills'

const TableFormContainer = ({ id }) => {
  // Определяем, мобильный или десктопный компонент рисовать
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const ModalOrder = isDesktop ? ModalOrderDesktop : ModalOrderMobile
  const SuccessForm = isDesktop ? SuccessFormDesktop : SuccessFormMobile
  const OrderFeedbackForm = isDesktop ? OrderFeedbackFormDesktop : OrderFeedbackFormMobile
  const TableForm = isDesktop ? TableFormDesktop : TableFormMobile
  const ErrorPopup = isDesktop ? ErrorPopupDesktop : ErrorPopupMobile

  // состояния
  const [ isOpenModal, setOpenModal ] = useState(false)
  const [ isOpenSuccess, setShowSuccess ] = useState(false)
  const [ orderData, setOrderData ] = useState()
  const [ error, setError ] = useState()
  const [ pending, setPending ] = useState(false)

  // Закрываем одну модалку, если открыта другая
  if (isOpenSuccess && isOpenModal) setOpenModal(false)

  // После заполнения формы
  const onSubmitForm = (data) => {
    setOrderData(data)
    setOpenModal(true)
  }

  // Отправка на сервер
  const onSubmitData = (data) => {
    setPending(true)
    axios.post('/send/', {
      message: formatMessage(orderData),
      user: formatUserData(data),
      title: `Вам новый заказ с сайта (${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')})`
    }).then(res => {
      setPending(false)
      if (res.data.status === 'OK') {
        clearForm()
        setShowSuccess(true)
      } else if (res.data.status === 'fail') {
        setError(true)
        console.log('Ошибка запроса', res.data)
      }
    }
    )
  }

  // Для очистки формы из вне
  let clearForm = () => {}

  return (
    <div id={id}>
      <Form
        form={FORM_TABLE_ORDER}
        mutators={{
          ...arrayMutators
        }}
        onSubmit={(data) => { onSubmitForm(data) }}
        render={({ handleSubmit, values, form: { submit, reset, change, mutators }, form, pristine, hasValidationErrors, errors, ...props }) => {
          clearForm = reset
          const pushNew = () => {
            mutators.push(FORM_TABLE_ORDER, formatPushValues(FORM_TABLE_ORDER, values, [FIELD_RADIUS, FIELD_COLOR_CODE, FIELD_COLOR_SHADE]))
          }
          return (
            <form>
              <FormStateToRedux form={FORM_TABLE_ORDER} />
              <TableForm
                hasValidationErrors={hasValidationErrors}
                errors={errors}
                values={values}
                onSubmit={handleSubmit}
                form={form}
                pushNew={pushNew}
                {...props}
              />
            </form>
          )
        }
        }
      />
      <ModalOrder
        isOpen={isOpenModal}
        closeModal={() => setOpenModal(false)}
      >
        <Form
          form={FORM_FEEDBACK}
          onSubmit={(data) => { onSubmitData(data) }}
          render={({ form: { submit, reset }, pristine, hasValidationErrors, ...props }) => (
            <form>
              <OrderFeedbackForm
                onSubmit={submit}
                disabled={pristine || hasValidationErrors || pending}
                pending={pending}
              />
            </form>
          )}
        />
      </ModalOrder>
      <ModalOrder
        isOpen={isOpenSuccess}
        closeModal={() => setShowSuccess(false)}
      >
        <SuccessForm onClose={() => setShowSuccess(false)} />
      </ModalOrder>
      <ErrorPopup isOpen={error} onClose={() => { setError(false) }} />
    </div>
  )
}

export default React.memo(TableFormContainer)
