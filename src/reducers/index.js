import { combineReducers } from 'redux';
import { isLoading, hasErrored, scheduleAM } from './scheduleReducers/scheduleAMReducer';
import { scheduleAS } from './scheduleReducers/scheduleASReducer';
import { scheduleEU } from './scheduleReducers/ScheduleEUReducer';
import { squad } from './teamReducer';
import { liveAM } from './liveReducers/liveAMReducer';
import { liveEU } from './liveReducers/liveEUReducer';
import { liveAS } from './liveReducers/liveASReducer';
import { liveScores } from './liveReducers/liveScoresReducer';

const rootReducer = combineReducers({
  liveScores,
  liveAS,
  liveEU,
  liveAM,
  squad,
  scheduleEU,
  scheduleAS,
  scheduleAM,
  isLoading,
  hasErrored
})

export default rootReducer