import {
  DEFAULT_VALUES,
  FIELD_COLOR_CODE, FIELD_COLOR_SHADE,
  FIELD_COUNT,
  FIELD_LENGTH, FIELD_NAME, FIELD_PHONE,
  FIELD_RADIUS,
  FIELD_THICKNESS,
  FIELD_WIDTH,
  FORM_TABLE_ORDER
} from '../constants/FORM_DATA'
import _ from 'lodash'

const separator = '\n\n__________________\n\n'

export const formatMessage = (data) => {
  const array = _.map(data[FORM_TABLE_ORDER], item => (
    `Количество: ${item[FIELD_COUNT]} \n
    Длина: ${item[FIELD_LENGTH]} \n
    Ширина: ${item[FIELD_WIDTH]} \n
    Толщина: ${item[FIELD_THICKNESS]} \n
    Радиус: ${item[FIELD_RADIUS] || DEFAULT_VALUES[FIELD_RADIUS]} \n
    Цвет: ${item[FIELD_COLOR_CODE]} \n
    Оттенок: ${item[FIELD_COLOR_SHADE] || DEFAULT_VALUES[FIELD_COLOR_SHADE]}`
  ))
  const message = array.join(separator)
  const title = 'Вам пришёл новый заказ \n'
  return (
    `${title}${message}`
  )
}

export const formatUserData = (data) => {
  return `${separator}Заказчик: ${data[FIELD_NAME]}\nНомер телефона: ${data[FIELD_PHONE]}\n`
}
