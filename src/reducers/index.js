import { combineReducers } from 'redux';
import { isLoading, hasErrored, liveScores } from './liveScoresReducer';
import { league } from './leagueReducer';
import { squad } from './teamReducer';

const rootReducer = combineReducers({
  league,
  liveScores,
  squad,
  isLoading,
  hasErrored
})

export default rootReducer