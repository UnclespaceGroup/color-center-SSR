import { UPDATE_FORM_STATE } from '../constants/FORM_DATA'

export default function FinalFormReducer (state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload
      }

    default:
      return state
  }
}
