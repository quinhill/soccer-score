import { combineReducers } from 'redux';
import { isLoading, hasErrored, liveScores } from './liveScoresReducer';
import { league } from './leagueReducer';
import { team } from './teamReducer';
import { squad } from './squadReducer';

const rootReducer = combineReducers({
  league,
  liveScores,
  squad,
  team,
  isLoading,
  hasErrored
})

export default rootReducer