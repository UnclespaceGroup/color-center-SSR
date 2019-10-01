import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './OrderForm.module.scss'
import Layout from '../Layout/Layout'
import FieldInput from '../FieldInput/FieldInput'
import Padding from '../Padding/Padding'
import { Field } from 'react-final-form'
import cn from 'classnames'
import { MdArrowForward } from 'react-icons/md'
import FieldSelect from '../FieldSelect/FieldSelect'
import FieldRange from '../FieldRange/FieldRange'
import Button from '../Button/Button'

const OrderForm = ({ data }) => {
  const [currentForm, setCurrentForm] = useState(0)
  const nextForm = () => { setCurrentForm(currentForm + 1) }
  const prevForm = () => { setCurrentForm(currentForm - 1) }
  return (
    <>
      <Layout>
        <h2>Форма заказа</h2>
      </Layout>
      <div className={cn(css.container, css[`current_form_${currentForm}`])}>
        <Layout>
          <Padding value={40} />
          <div className={css.form}>
            <FormBlock step={1} disable={currentForm !== 0} prevStep={prevForm} nextStep={nextForm}>
              <Field
                component={FieldSelect}
                options={[
                  {
                    label: 'Металлик',
                    value: '1'
                  },
                  {
                    label: 'Глянцевый',
                    value: '2'
                  },
                  {
                    label: 'Матовый',
                    value: '3'
                  }
                ]}
                name={'selectTypeColor'}
                label={'Оттенок панели'}
                text={''}
              />
              <Field
                type={'text'}
                component={FieldSelect}
                options={[
                  {
                    label: <div>dkdjcnc</div>,
                    value: '#FF3A34'
                  },
                  {
                    label: '#555FFF',
                    value: '#555FFF'
                  },
                  {
                    label: '#FF00FF',
                    value: '#FF00FF'
                  },
                  {
                    label: '#00FF00',
                    value: '#00FF00'
                  }
                ]}
                name={'selectColor'}
                label={'Цвет панели'}
                text={''}
              />
            </FormBlock>

            <FormBlock step={2} disable={currentForm !== 1} prevStep={prevForm} nextStep={nextForm}>
              <Field
                type={'number'}
                component={FieldInput}
                name={'tolshina'}
                label={'Толщина панели'}
                text={''}
                caption={'Милиметры'}
              />
              <Field
                type={'text'}
                component={FieldRange}
                onChange={(val, prevVal) => console.log(val, prevVal)}
                name={'sizes'}
                label={'Размеры панели'}
                text={'Обязательно к заполнению'}
              />
            </FormBlock>
            <FormBlock step={3} disable={currentForm !== 2} prevStep={prevForm} nextStep={nextForm}>
              <Field
                type={'number'}
                component={FieldInput}
                name={'tolshina'}
                label={'Количество'}
                text={''}
                caption={'штук'}
              />
              <Button className={css.btn} color={'purple'}>Сделать заказ</Button>
              <Button className={css.btn} classname={'inline__purple'} onClick={() => setCurrentForm(0)}>В начало</Button>
            </FormBlock>
          </div>
        </Layout>
      </div>
    </>
  )
}

const FormBlock = ({ children, disable, step, nextStep, prevStep }) => (
  <div className={cn(css.block, { [css.block__disabled]: disable })}>
    {children}
    <div className={css.step}>
      <div onClick={prevStep}>Шаг {step} / 3</div>
      {<Button className={disable ? css.next__opacity : css.next} color={'purple'} onClick={nextStep}>Далее<MdArrowForward /></Button>}
    </div>
  </div>
)

OrderForm.propTypes = {
  data: PropTypes.object
}

export default React.memo(OrderForm)
