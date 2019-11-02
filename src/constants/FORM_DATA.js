import { composeValidators, maxValue, minValue, required } from '../utils/validators'

export const FORM_ORDER = 'orderForm'
export const FORM_TABLE_ORDER = 'FORM_TABLE_ORDER'

export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE'

export const FIELD_SIZE = 'FIELD_SIZE'

export const FIELD_COLOR_SHADE = 'FIELD_COLOR_SHADE'
export const FIELD_COLOR_CODE = 'FIELD_COLOR_CODE'
export const FIELD_RADIUS = 'FIELD_RADIUS'
export const FIELD_WIDTH = 'FIELD_WIDTH'
export const FIELD_LENGTH = 'FIELD_LENGTH'
export const FIELD_THICKNESS = 'FIELD_THICKNESS'
export const FIELD_COUNT = 'FIELD_COUNT'

export const FORM_FEEDBACK = 'FORM_FEEDBACK'
export const FIELD_NAME = 'FIELD_NAME'
export const FIELD_PHONE = 'FIELD_PHONE'
export const FIELD_AGREE = 'FIELD_AGREE'

export const SHADES = {
  mat: 'Матовый',
  gl: 'Глянцевый',
  pm: 'Полуматовый'
}

export const DEFAULT_VALUES = {
  [FIELD_RADIUS]: '1мм',
  [FIELD_COLOR_SHADE]: SHADES.gl
}

export const PRICES = {
  [SHADES.mat]: 3900,
  [SHADES.gl]: 5600,
  [SHADES.pm]: 5600
}

export const FIELDS_PARAMS = [
  {
    width: '', // количество
    placeholder: '0',
    max: 10000,
    measurement: 'шт.',
    type: 'number',
    validate: composeValidators(required, minValue(1))
  },
  {
    width: '', // длина
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    max: 10000,
    validate: composeValidators(required, minValue(100), maxValue(10000))
  },
  {
    width: '', // ширина
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    max: 10000,
    validate: composeValidators(required, minValue(100), maxValue(10000))
  },
  {
    // width: '15rem', // толщина
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    max: 1000,
    validate: composeValidators(required, minValue(1), maxValue(1000))
  },
  {
    width: '10rem',
    placeholder: DEFAULT_VALUES[FIELD_RADIUS],
    options: [
      {
        value: '1мм',
        label: '1мм'
      },
      {
        value: '2мм',
        label: '2мм'
      },
      {
        value: '3мм',
        label: '3мм'
      },
      {
        value: '4мм',
        label: '4мм'
      },
      {
        value: '5мм',
        label: '5мм'
      },
      {
        value: '6мм',
        label: '6мм'
      },
      {
        value: '7мм',
        label: '7мм'
      },
      {
        value: '8мм',
        label: '8мм'
      },
      {
        value: '9мм',
        label: '9мм'
      }
    ]
  },
  {
    width: '18rem',
    placeholder: 'Например, бирюзовый',
    validate: required
  },
  {
    width: '12rem',
    placeholder: DEFAULT_VALUES[FIELD_COLOR_SHADE],
    options: [{
      value: SHADES.gl,
      label: SHADES.gl
    },
    {
      value: SHADES.mat,
      label: SHADES.mat
    },
    {
      value: SHADES.pm,
      label: SHADES.pm
    }]
  }
]
