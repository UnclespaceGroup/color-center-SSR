import React, { useState } from 'react'
import _ from 'lodash'
import OrderForm from '../../components/OrderForm/OrderForm'
import { Form } from 'react-final-form'
import {
  FIELD_COLOR_CODE,
  FIELD_COLOR_SHADE, FIELD_COUNT,
  // FIELD_LENGTH,
  FIELD_SIZE, FIELD_THICKNESS,
  // FIELD_WIDTH,
  FORM_ORDER
} from '../../constants/FORM_DATA'
// import { useSelector } from 'react-redux'
import FormStateToRedux from '../../helpers/FormStateToRedux'
import TableOrders from '../../components/TableOrders/TableOrders'

// const colorOptions = [
//   {
//     label: <div>dkdjcnc</div>,
//     value: '#FF3A34'
//   },
//   {
//     label: '#555FFF',
//     value: '#555FFF'
//   },
//   {
//     label: '#FF00FF',
//     value: '#FF00FF'
//   },
//   {
//     label: '#00FF00',
//     value: '#00FF00'
//   }
// ]
// const colorTypeOptions = [
//   {
//     label: 'Металлик',
//     value: '1'
//   },
//   {
//     label: 'Глянцевый',
//     value: '2'
//   },
//   {
//     label: 'Матовый',
//     value: '3'
//   }
// ]

const OrderFormContainer = () => {
  const [ formData, setFormData ] = useState([])

  // const formReduxValues = _.get(
  //   useSelector(state => state.toJS().finalForm[FORM_ORDER]),
  //   'values',
  //   {}
  // )
  console.log(formData)

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
        render={({ form: { submit, reset } }) => (
          <form>
            <FormStateToRedux form={FORM_ORDER} />
            <OrderForm onSubmit={data => {
              submit(data)
              reset()
            }
            } />
          </form>
        )
        }
      />
      <TableOrders items={formData} deleteItem={deleteItem} />
    </>
  )
}

export default React.memo(OrderFormContainer)
