import combineReducers from 'redux-immutable/dist/combineReducers'
import elasticAdaptive from 'reducers/elasticAdaptive'
import finalFormReducer from './finalFormReducer'
import IsDesktop from './IsDesktop'

export const rootReducer = combineReducers({
  elasticAdaptive,
  finalForm: finalFormReducer,
  IsDesktop
})
