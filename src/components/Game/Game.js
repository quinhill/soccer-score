import React from 'react';
import './game.css';
import PropTypes from 'prop-types';
import { getTeamUrl, getSquadUrl, getGameUrl } from '../../apiKeys';
import { timeCleaner } from './gameCleaner';

export const Game = (props) => {
  
  const { teamHome, teamAway, teamHomeId, teamAwayId, times, scores, id, seasonId } = props

  const handleClick = (event) => {
    const teamId = event.target.value;
    const seasonId = event.target.id;
    const teamUrl = getTeamUrl(teamId);
    const squadUrl = getSquadUrl(seasonId, teamId);
    props.fetchTeam(teamUrl);
    props.fetchSquad(squadUrl);
    props.currentTeam(teamId);
  }

  const getGame = (event) => {
    const gameId = event.target.value;
    const url = getGameUrl(gameId);
    props.fetchGame(url)
  }


  return (
    <div className="game">
      <button 
        className="button team-one"
        onClick={handleClick}
        value={teamHomeId}
        id={seasonId}
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
        id={seasonId}
      >
        {teamAway}
      </button>
    </div>
  )
}

Game.propTypes = {
  props: PropTypes.object
}