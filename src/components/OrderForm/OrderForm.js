import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cssDesktop from './OrderForm.module.scss'
import cssMobile from './OrderFormMobile.module.scss'
import LayoutDesktop from '../Layout/Layout'
import LayoutMobile from '../Layout/LayoutMobile'
import FieldInput from '../FieldInput/FieldInput'
import Padding from '../Padding/Padding'
import { Field } from 'react-final-form'
import cn from 'classnames'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import FieldSelect from '../FieldSelect/FieldSelect'
import FieldRange from '../FieldRange/FieldRange'
import Button from '../Button/Button'
import {
  FIELD_COLOR_CODE,
  FIELD_COLOR_SHADE,
  FIELD_COUNT,
  FIELD_LENGTH, FIELD_SIZE,
  FIELD_THICKNESS,
  FIELD_WIDTH
} from '../../constants/FORM_DATA'
import { required, requiredRange } from '../../utils/validators'
import { useSelector } from 'react-redux'

const OrderForm = ({ onSubmit, errors, hasValidationErrors }) => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  const css = isDesktop ? cssDesktop : cssMobile
  const Layout = isDesktop ? LayoutDesktop : LayoutMobile
  const [currentForm, setCurrentForm] = useState(0)
  const nextForm = () => { setCurrentForm(currentForm + 1) }
  const prevForm = () => { setCurrentForm(currentForm - 1) }
  const startPosForm = () => { setCurrentForm(0) }
  return (
    <div className={css.wrapper}>
      <Layout>
        <h2>Форма заказа</h2>
      </Layout>
      <div className={cn(css.container, css[`current_form_${currentForm}`])}>
        <Layout>
          <Padding value={40} />
          <div className={css.form}>
            <FormBlock step={1} disable={currentForm !== 0} prevStep={prevForm} nextStep={nextForm}
              buttonDisabled={!!errors[FIELD_COLOR_SHADE] || !!errors[FIELD_COLOR_CODE]} css={css}
            >
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
                name={FIELD_COLOR_SHADE}
                label={'Оттенок панели'}
                text={''}
                validate={required}
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
                name={FIELD_COLOR_CODE}
                label={'Цвет панели'}
                text={''}
                validate={required}
              />
            </FormBlock>

            <FormBlock step={2} disable={currentForm !== 1} prevStep={prevForm} nextStep={nextForm}
              buttonDisabled={!!errors[FIELD_THICKNESS] || !!errors[FIELD_SIZE]}
              css={css}
            >
              <Field
                type={'number'}
                component={FieldInput}
                name={FIELD_THICKNESS}
                label={'Толщина панели'}
                text={''}
                caption={'Милиметры'}
                validate={required}
              />
              <Field
                type={'text'}
                name={FIELD_SIZE}
                component={FieldRange}
                onChange={(val, prevVal) => console.log(val, prevVal)}
                names={[FIELD_LENGTH, FIELD_WIDTH]}
                label={'Размеры панели'}
                text={'Обязательно к заполнению'}
                validate={requiredRange}
              />
            </FormBlock>
            <FormBlock step={3} disable={currentForm !== 2} prevStep={prevForm} nextStep={prevForm}
              buttonDisabled={!!errors[FIELD_COUNT]}
              css={css}
            >
              <Field
                type={'number'}
                component={FieldInput}
                name={FIELD_COUNT}
                label={'Количество'}
                text={''}
                caption={'штук'}
                validate={required}
              />
              <Button className={css.btn} color={'purple'}
                disabled={hasValidationErrors}
                onClick={() => {
                  startPosForm()
                  onSubmit()
                }} >Сделать заказ</Button>
              <Button className={css.btn} classname={'inline__purple'} onClick={startPosForm}>В начало</Button>
            </FormBlock>
          </div>
        </Layout>
      </div>
    </div>
  )
}

const FormBlock = ({ children, disable, step, nextStep, prevStep, buttonDisabled, css }) => {
  const isDesktop = useSelector(state => state.toJS().IsDesktop)
  if (!isDesktop) return children
  return (
    <div className={cn(css.block, { [css.block__disabled]: disable })}>
      {children}
      <div className={css.step}>
        <div onClick={prevStep}>Шаг {step} / 3</div>
        {
          step !== 3
            ? <Button className={disable ? css.next__opacity : css.next} disabled={buttonDisabled} color={'purple'} onClick={nextStep}>Далее<MdArrowForward /></Button>
            : <Button leftIcon className={disable ? css.next__opacity : css.next} color={'inline__purple'} onClick={nextStep}><MdArrowBack />Назад</Button>
        }
      </div>
    </div>
  )
}

OrderForm.propTypes = {
  data: PropTypes.object
}

export default React.memo(OrderForm)
