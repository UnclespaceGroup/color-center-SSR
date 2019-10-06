import { required } from '../utils/validators'

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

export const FIELDS_PARAMS = [
  {
    width: '',
    placeholder: '0',
    measurement: 'шт.',
    type: 'number',
    validate: required
  },
  {
    width: '',
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    validate: required
  },
  {
    width: '',
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    validate: required
  },
  {
    width: '15rem',
    placeholder: '0',
    measurement: 'мм.',
    type: 'number',
    validate: required
  },
  {
    width: '12rem',
    placeholder: '10мм',
    options: [
      {
        value: '10мм',
        label: '10мм'
      },
      {
        value: '20мм',
        label: '20мм'
      },
      {
        value: '30мм',
        label: '30мм'
      }
    ]
  },
  {
    width: '20rem',
    placeholder: 'Например, бирюзовый',
    validate: required
  },
  {
    width: '15rem',
    placeholder: 'Глянцевый',
    options: [{
      value: 'Глянцевый',
      label: 'Глянцевый'
    },
    {
      value: 'Матовый',
      label: 'Матовый'
    },
    {
      value: 'Полу-Матовый',
      label: 'Полу-матовый'
    }]
  }
]
