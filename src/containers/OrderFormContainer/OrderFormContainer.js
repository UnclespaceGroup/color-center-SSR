import React from 'react'
import OrderForm from '../../components/OrderForm/OrderForm'
import { Form } from 'react-final-form'

const OrderFormContainer = () => (
  <>
    <Form
      form={'orderForm'}
      onSubmit={() => {}}
      render={({ form: { change } }) => (
        <OrderForm />
      )
      }
    />
  </>
)

export default React.memo(OrderFormContainer)
