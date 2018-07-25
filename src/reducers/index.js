import { combineReducers } from 'redux';
import { isLoading, hasErrored, schedule } from './scheduleReducer'
import { squad } from './teamReducer';

const rootReducer = combineReducers({
  squad,
  schedule,
  isLoading,
  hasErrored
})

export default rootReducer