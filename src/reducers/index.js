import { combineReducers } from 'redux';
import { isLoading, hasErrored, schedule } from './scheduleReducers'

const rootReducer = combineReducers({
  schedule,
  isLoading,
  hasErrored
})

export default rootReducer