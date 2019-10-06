import _ from 'lodash'

export const formatPushValues = (name, values, fields) => {
  if (!values) return
  const obj = {}

  _.forEach(fields, item => {
    obj[item] = values[name] && values[name][values[name].length - 1][item]
  })
  return obj
}
