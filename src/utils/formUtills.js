import _ from 'lodash'
import { PRICES } from '../constants/FORM_DATA'

export const formatPushValues = (name, values, fields) => {
  if (!values) return
  const obj = {}

  _.forEach(fields, item => {
    obj[item] = values[name] && values[name][values[name].length - 1][item]
  })
  return obj
}

export const createPrice = ({ FIELD_WIDTH = 0, FIELD_LENGTH = 0, FIELD_COUNT = 0, FIELD_COLOR_SHADE } = {}) => {
  return Math.floor((FIELD_WIDTH * FIELD_LENGTH * FIELD_COUNT) / 1000000000 * (PRICES[FIELD_COLOR_SHADE] || 0))
}
