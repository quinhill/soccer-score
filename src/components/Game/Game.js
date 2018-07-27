import React from 'react';
import './game.css';
import PropTypes from 'prop-types';
import { timeCleaner } from './gameCleaner';

export const Game = (props) => {

  const handleClick = (event) => {
    const id = event.target.value;
    const region = event.target.id;
    props.sortTeamFetch(id, region)
  }

  const time = timeCleaner(props.scheduled)

  return (
    <div className="game">
      <button 
        className="button team-one"
        onClick={handleClick}
        value={props.competitors[0].id}
        id={props.region}
      >
        {props.competitors[0].name}
      </button>
      <p className="time">{time}</p>
      <button 
        className="button team-two"
        onClick={handleClick}
        value={props.competitors[1].id}
        id={props.region}
      >
        {props.competitors[1].name}
      </button>
    </div>
  )
}

Game.propTypes = {
  props: PropTypes.object
}