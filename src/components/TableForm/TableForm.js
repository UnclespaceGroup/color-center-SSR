import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import css from './TableForm.module.scss'
import Layout from '../Layout/Layout'
import { MdClose } from 'react-icons/md'
import Button from '../Button/Button'
import Padding from '../Padding/Padding'
import FieldInlineInput from '../InlineFields/FieldInlineInput/FieldInlineInput'
import FieldInlineSelect from '../InlineFields/FieldInlineSelect/FieldInlineSelect'
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

const TableForm = ({ values, dirty, onSubmit, hasValidationErrors, onButtonClick, form: { reset, mutators: { push, pop } }, pushNew, price, ...props }) => {
  useMemo(() => {
    if (!Object.keys(values).length) push(FORM_TABLE_ORDER, undefined)
  }, [values])
  return (
    <div className={css.container}>
      <Layout >
        <h3>Таблица заказа</h3>
        <Padding value={20} />
        <div className={css.text} >
        Заполните таблицу и нажмите сделать заказ
        </div>
        <Padding value={20} />
        <table>
          <thead>
            <tr>
              <th>Количество</th>
              <th>Длина</th>
              <th>Ширина</th>
              <th>Толщина</th>
              <th>Радиус торца</th>
              <th>Цвет</th>
              <th>Оттенок</th>
              <th>Стоимость</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <FieldArray name={FORM_TABLE_ORDER} >
              {({ fields }) =>
                fields.map((item, index) => (
                  <tr key={index}>
                    <td >
                      <Field
                        component={FieldInlineInput}
                        name={`${item}.${FIELD_COUNT}`}
                        {...FIELDS_PARAMS[0]}
                      />
                    </td>
                    <td className={css.double} style={{ width: FIELDS_PARAMS[1].width }}>
                      <div>
                        <Field
                          component={FieldInlineInput}
                          name={`${item}${FIELD_LENGTH}`}
                          {...FIELDS_PARAMS[1]}
                        />
                      </div>
                    </td>
                    <td >
                      <Field
                        component={FieldInlineInput}
                        name={`${item}.${FIELD_WIDTH}`}
                        {...FIELDS_PARAMS[2]}
                      />
                    </td>
                    <td >
                      <Field
                        component={FieldInlineInput}
                        name={`${item}.${FIELD_THICKNESS}`}
                        {...FIELDS_PARAMS[3]}
                      />
                    </td>
                    <td >
                      <Field
                        component={FieldInlineSelect}
                        name={`${item}.${FIELD_RADIUS}`}
                        {...FIELDS_PARAMS[4]}
                      />
                    </td>
                    <td >
                      <Field
                        component={FieldInlineInput}
                        name={`${item}.${FIELD_COLOR_CODE}`}
                        {...FIELDS_PARAMS[5]}
                      />
                    </td>
                    <td >
                      <Field
                        component={FieldInlineSelect}
                        name={`${item}.${FIELD_COLOR_SHADE}`}
                        {...FIELDS_PARAMS[6]}
                      />
                    </td>
                    <td >{createPrice(fields.value[index])} ₽</td>
                    <td><div className={css.close} onClick={() => {
                      if (fields.length > 1) fields.remove(index)
                      else {
                        reset()
                      }
                    }}>
                      <MdClose />
                    </div></td>
                  </tr>
                )
                )
              }
            </FieldArray>

          </tbody>
        </table>
        <Button classname={'purple'} className={css.add} onClick={pushNew}>Добавить строчку</Button>
        <Padding value={24} />
        <Button classname={'purple'} onClick={onSubmit} >Сделать заказ</Button>
      </Layout>
      <Padding value={20} />
    </div>
  )
}
TableForm.propTypes = {
  items: PropTypes.array
}

export default TableForm
