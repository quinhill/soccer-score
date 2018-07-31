import { combineReducers } from 'redux';
import { isLoading, hasErrored, liveScores } from './liveScoresReducer';
import { league } from './leagueReducer';
import { team } from './teamReducer';
import { squad } from './squadReducer';
import { game } from './gameReducer';
import { player } from './playerReducer';
import { displayReducer } from './displayReducer';

const rootReducer = combineReducers({
  display: displayReducer,
  player,
  game,
  league,
  liveScores,
  squad,
  team,
  isLoading,
  hasErrored
})

export default rootReducer