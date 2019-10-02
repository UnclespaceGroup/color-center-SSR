export const SET_CURRENT_DESKTOP = 'SET_CURRENT_DESKTOP'

export default function IsDesktop (state = true, action) {
  switch (action.type) {
    case SET_CURRENT_DESKTOP:
      return action.payload

    default:
      return state
  }
}
