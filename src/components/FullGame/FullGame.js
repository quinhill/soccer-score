import React from 'react';
import './full-game.css';
import { connect } from 'react-redux';

export const FullGame = (props) => {

  const reduceEvents = () => {
    if (props.game.goals) {
      const events = [
        ...props.game.goals, ...props.game.cards, ...props.game.substitutions
      ]
      const sortedEvents = events.sort(function(a, b) {
        return a.minute - b.minute
      })
    }
  }

  return (
    <div>
      <div className="game-header">
        <img src={props.game.homeLogo} />
        <h1 
          className="team-name"
        >
          {props.game.homeTeam}
        </h1>
        <h1 
          className="score"
        >
          {`${props.game.homeScores}-${props.game.awayScores}`}
        </h1>
        <h1 
          className="team-name"
        >
          {props.game.awayTeam}
        </h1>
        <img src={props.game.awayLogo} />
      </div>
      <div className="events">
        {reduceEvents()}
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  game: state.game,
})

export default connect(mapStateToProps)(FullGame);