import combineReducers from 'redux-immutable/dist/combineReducers'
import elasticAdaptive from 'reducers/elasticAdaptive'
import finalFormReducer from './finalFormReducer'
import IsDesktop from './IsDesktop'
import modalWayOrderIsOpen from './modalWayOrderIsOpen'

export const rootReducer = combineReducers({
  elasticAdaptive,
  finalForm: finalFormReducer,
  IsDesktop,
  modalWayOrderIsOpen
})
