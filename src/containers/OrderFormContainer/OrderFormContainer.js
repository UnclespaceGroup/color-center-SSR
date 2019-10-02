import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import OrderForm from '../../components/OrderForm/OrderForm'
import { Form } from 'react-final-form'
import {
  FIELD_COLOR_CODE,
  FIELD_COLOR_SHADE, FIELD_COUNT,
  // FIELD_LENGTH,
  FIELD_SIZE, FIELD_THICKNESS, FORM_FEEDBACK,
  // FIELD_WIDTH,
  FORM_ORDER
} from '../../constants/FORM_DATA'
import FormStateToRedux from '../../helpers/FormStateToRedux'
import TableOrdersDesktop from '../../components/TableOrders/TableOrders'
import TableOrdersMobile from '../../components/TableOrders/TableOrdersMobile'
import ModalOrderDesktop from '../ModalOrder/ModalOrder'
import ModalOrderMobile from '../ModalOrder/ModalOrderMobile'
import OrderFeedbackFormDesktop from '../../components/OrderFeedbackForm/OrderFeedbackForm'
import OrderFeedbackFormMobile from '../../components/OrderFeedbackForm/OrderFeedbackFormMobile'
import SuccessFormDesktop from '../../components/SuccessForm/SuccessForm'
import SuccessFormMobile from '../../components/SuccessForm/SuccessFormMobile'

const OrderFormContainer = () => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const TableOrders = isDesktop ? TableOrdersDesktop : TableOrdersMobile
  const ModalOrder = isDesktop ? ModalOrderDesktop : ModalOrderMobile
  const SuccessForm = isDesktop ? SuccessFormDesktop : SuccessFormMobile
  const OrderFeedbackForm = isDesktop ? OrderFeedbackFormDesktop : OrderFeedbackFormMobile
  const [ formData, setFormData ] = useState([])
  const [ isOpenModal, setOpenModal ] = useState(false)
  const [ showSuccess, setShowSuccess ] = useState(false)

  const onAddData = (data) => {
    const currentData = {
      [FIELD_COLOR_SHADE]: data[FIELD_COLOR_SHADE]?.label,
      [FIELD_COLOR_CODE]: data[FIELD_COLOR_CODE]?.label,
      [FIELD_COUNT]: data[FIELD_COUNT],
      [FIELD_THICKNESS]: data[FIELD_THICKNESS],
      ...data[FIELD_SIZE]
    }
    setFormData(formData.concat([currentData]))
  }

  const onSubmitData = () => {
    setShowSuccess(true)
  }

  const deleteItem = (id) => {
    const newData = _.filter((formData, key) => key !== id)
    setFormData(newData)
  }

  return (
    <>
      <Form
        form={FORM_ORDER}
        initialValues={{ }}
        onSubmit={(data) => { onAddData(data) }}
        render={({ form: { submit, reset, change }, pristine, hasValidationErrors, errors, ...props }) => (
          <form>
            <FormStateToRedux form={FORM_ORDER} />
            <OrderForm
              hasValidationErrors={hasValidationErrors}
              errors={errors}
              onSubmit={data => {
                submit(data)
                reset()
              }}
            />
          </form>
        )
        }
      />
      <TableOrders onButtonClick={() => setOpenModal(true)} items={formData} deleteItem={deleteItem} />
      <ModalOrder
        isOpen={isOpenModal}
        closeModal={() => setOpenModal(false)}
      >
        {
          !showSuccess
            ? <Form
              form={FORM_FEEDBACK}
              initialValues={{}}
              onSubmit={(data) => { onSubmitData(data) }}
              render={({ form: { submit, reset }, pristine, hasValidationErrors, ...props }) => (
                <form>
                  <OrderFeedbackForm
                    onSubmit={submit}
                    disabled={pristine || hasValidationErrors}
                  />
                </form>
              )}
            />
            : <SuccessForm onClose={() => setOpenModal(false)} />
        }
      </ModalOrder>
    </>
  )
}

export default React.memo(OrderFormContainer)
