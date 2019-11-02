import _ from 'lodash'

export const required = value => (value ? undefined : 'Заполните поле')
export const requiredRange = value => {
  console.log(value)
  if (!value) return 'Заполните размеры'
  const keys = Object.keys(value)
  if (keys.length < 2) return 'Введите длину или ширину'
  const filtered = _.filter(value, item => !item)
  console.log(filtered)
  return filtered.length ? 'Введите данные' : undefined
}
export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Должно быть больше чем ${min}`
export const maxValue = max => value =>
  isNaN(value) || value <= max ? undefined : `Должно быть меньше чем ${max}`
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
