export const SET_IS_OPEN_MODAL_WAY_ORDER = 'SET_IS_OPEN_MODAL_WAY_ORDER'

export default function modalWayOrderIsOpen (state = false, action) {
  switch (action.type) {
    case SET_IS_OPEN_MODAL_WAY_ORDER:
      return action.payload

    default:
      return state
  }
}
