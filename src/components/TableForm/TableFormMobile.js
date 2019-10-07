import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import css from './TableFormMobile.module.scss'
import Layout from '../Layout/LayoutMobile'
import Button from '../Button/Button'
import Padding from '../Padding/Padding'
import FieldInlineInput from '../InlineFields/FieldInlineInput/FieldInlineInputMobile'
import FieldInlineSelect from '../InlineFields/FieldInlineSelect/FieldInlineSelectMobile'
import { FIELD_COUNT, FORM_TABLE_ORDER } from 'constants/FORM_DATA'
import { Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import {
  FIELD_COLOR_CODE,
  FIELD_COLOR_SHADE, FIELD_LENGTH,
  FIELD_RADIUS,
  FIELD_THICKNESS,
  FIELD_WIDTH, FIELDS_PARAMS
} from '../../constants/FORM_DATA'
import { createPrice } from '../../utils/formUtills'

const TableForm = ({ values, onSubmit, form: { mutators: { push, pop } }, submitFailed, pushNew, ...props }) => {
  useMemo(() => {
    if (!Object.keys(values).length) push(FORM_TABLE_ORDER, undefined)
  }, [values])
  return (
    <div className={css.container}>
      <Layout >
        <h2>Таблица заказа</h2>
        <Padding value={20} />
        <div className={css.text} >
          Заполните таблицу и нажмите сделать заказ
        </div>
        <Padding value={20} />
        <FieldArray name={FORM_TABLE_ORDER} >
          {({ fields }) =>
            fields.map((item, index) => (
              <div key={index} className={css.block}>
                <h3>Форма заказа #{index + 1}</h3>
                <Padding value={10} />
                <div >
                  <div className={css.label}>Количество</div>
                  <Field
                    component={FieldInlineInput}
                    name={`${item}.${FIELD_COUNT}`}
                    {...FIELDS_PARAMS[0]}
                  />
                </div>
                <div>
                  <div className={css.label}>Длина</div>
                  <Field
                    component={FieldInlineInput}
                    name={`${item}${FIELD_LENGTH}`}
                    {...FIELDS_PARAMS[1]}
                  />
                </div>
                <div >
                  <div className={css.label}>Ширина</div>
                  <Field
                    component={FieldInlineInput}
                    name={`${item}.${FIELD_WIDTH}`}
                    {...FIELDS_PARAMS[2]}
                  />
                </div>
                <div>
                  <div className={css.label}>Толщина</div>
                  <Field
                    component={FieldInlineInput}
                    name={`${item}.${FIELD_THICKNESS}`}
                    {...FIELDS_PARAMS[3]}
                  />
                </div>
                <div>
                  <div className={css.label}>Радиус торца</div>
                  <Field
                    component={FieldInlineSelect}
                    name={`${item}.${FIELD_RADIUS}`}
                    {...FIELDS_PARAMS[4]}
                  />
                </div>
                <div>
                  <div className={css.label}>Цвет</div>
                  <Field
                    component={FieldInlineInput}
                    name={`${item}.${FIELD_COLOR_CODE}`}
                    {...FIELDS_PARAMS[5]}
                  />
                </div>
                <div>
                  <div className={css.label}>Оттенок</div>
                  <Field
                    component={FieldInlineSelect}
                    name={`${item}.${FIELD_COLOR_SHADE}`}
                    {...FIELDS_PARAMS[6]}
                  />
                </div>
                <div className={css.footer}>
                  <div className={css.price}><div>Стоимость</div> <span>{createPrice(fields.value[index])} ₽</span></div>
                  <Button className={css.close} classname={'purple'} onClick={() => fields.remove(index)}>
                  Стереть
                  </Button>
                </div>
              </div>
            )
            )
          }
        </FieldArray>
        <Button classname={'purple'} className={css.add}
          onClick={() => {
            pushNew()
          }}
        >Добавить строчку</Button>
        <Padding value={24} />
        { submitFailed && <div className={css.error}>Заполнены не все поля</div> }
        <Button classname={'purple'} className={css.btn} onClick={onSubmit}>Сделать заказ</Button>
      </Layout>
    </div>
  )
}
TableForm.propTypes = {
  items: PropTypes.array
}

export default TableForm
