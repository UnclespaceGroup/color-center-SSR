import _ from 'lodash'
import { DEFAULT_VALUES, FIELD_COLOR_SHADE, PRICES } from '../constants/FORM_DATA'

export const formatPushValues = (name, values, fields) => {
  if (!values) return
  const obj = {}

  _.forEach(fields, item => {
    obj[item] = values[name] && values[name][values[name].length - 1][item]
  })
  return obj
}

export const createPrice = ({
  FIELD_WIDTH = 0,
  FIELD_LENGTH = 0,
  FIELD_COUNT = 0,
  _FIELD_COLOR_SHADE = PRICES[DEFAULT_VALUES[FIELD_COLOR_SHADE]] } = {}) => {
  const mmInMetr = 1000000000
  const count = Math.floor((FIELD_WIDTH * FIELD_LENGTH * FIELD_COUNT) / mmInMetr * _FIELD_COLOR_SHADE).toString()
  return count ? count.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : 0
}
