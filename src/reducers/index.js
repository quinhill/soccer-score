import { combineReducers } from 'redux';
import { liveScores } from './liveScoresReducer';
import { isLoading } from './isLoadingReducer';
import {hasErrored } from './hasErroredReducer';
import { team } from './teamReducer';
import { squad } from './squadReducer';
import { game } from './gameReducer';
import { player } from './playerReducer';
import { displayReducer } from './displayReducer';

const rootReducer = combineReducers({
  display: displayReducer,
  player,
  game,
  liveScores,
  squad,
  team,
  isLoading,
  hasErrored
})

export default rootReducer