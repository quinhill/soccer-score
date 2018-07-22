import { combineReducers } from 'redux';
import { isLoading, hasErrored, schedule } from './scheduleReducer'
import { team } from './teamReducer';

const rootReducer = combineReducers({
  team,
  schedule,
  isLoading,
  hasErrored
})

export default rootReducer