import React from 'react';
import './game.css';
import PropTypes from 'prop-types';
import { timeCleaner } from './gameCleaner';

export const Game = (props) => {

  const { teamHome, teamAway, teamHomeId, teamAwayId, times, scores, id } = props

  const handleClick = (event) => {

  }

  const getGame = () => {

  }


  return (
    <div className="game">
      <button 
        className="button team-one"
        onClick={handleClick}
        value={teamHomeId}
      >
        {teamHome}
      </button>
      <button 
        className="time"
        onClick={getGame}
        value={id}
      >
        {}
      </button>
      <button 
        className="button team-two"
        onClick={handleClick}
        value={teamAwayId}
      >
        {teamAway}
      </button>
    </div>
  )
}

Game.propTypes = {
  props: PropTypes.object
}