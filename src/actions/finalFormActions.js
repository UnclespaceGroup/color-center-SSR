import { UPDATE_FORM_STATE } from 'constants/FORM_DATA'

export const updateFormState = (form, state) => ({
  form,
  payload: state,
  type: UPDATE_FORM_STATE
})

export const getFormState = (state, form) => {
  state = state.toJS()
  return (
    (state && state.finalForm && state.finalForm[form]) || {}
  )
}
