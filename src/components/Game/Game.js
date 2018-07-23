import React from 'react';
import './game.css';

export const Game = (props) => {

  const handleClick = (event) => {
    const id = event.target.value;
    props.fetchTeam(id)
  }

  return (
    <div className="game">
      <button 
        className="button team-one"
        onClick={handleClick}
        value={props.competitors[0].id}
      >
        {props.competitors[0].name}
      </button>
      <p className="time">{props.scheduled}</p>
      <button 
        className="button team-two"
        onClick={handleClick}
        value={props.competitors[1].id}
      >
        {props.competitors[1].name}
      </button>
    </div>
  )
}