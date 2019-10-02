import React, { useState } from 'react'
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
import TableOrders from '../../components/TableOrders/TableOrders'
import ModalOrder from '../ModalOrder/ModalOrder'
import OrderFeedbackForm from '../../components/OrderFeedbackForm/OrderFeedbackForm'
import SuccessForm from '../../components/SuccessForm/SuccessForm'
import sendMail from '../../utils/nodemailer'
import Button from '../../components/Button/Button'

const OrderFormContainer = () => {
  const [ formData, setFormData ] = useState([])
  const [ isOpenModal, setOpenModal ] = useState(false)
  const [ showSuccess, setShowSuccess ] = useState(false)

  // const formReduxValues = _.get(
  //   useSelector(state => state.toJS().finalForm[FORM_ORDER]),
  //   'values',
  //   {}
  // )
  console.log(formData)

  const send = () => {
    sendMail()
  }

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
      <Button classname={'purple'} onClick={send}>Отправить</Button>
      <Form
        form={FORM_ORDER}
        initialValues={{ }}
        onSubmit={(data) => { onAddData(data) }}
        render={({ form: { submit, reset, change }, pristine, hasValidationErrors, errors, ...props }) => console.log(props) || (
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
              render={({ form: { submit, reset }, pristine, hasValidationErrors, ...props }) => console.log(props) || (
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
