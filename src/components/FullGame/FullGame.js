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
      return mapEvents(sortedEvents)
    }
  }

  const mapEvents = (events) => {
    console.log(events)
    return events.map(event => {
      return (
        <div className="event">
          <p>{event.player_name}</p>
          <img className="event-img" src={`/${event.type}.png`} />
        </div>
      )
    })
  }

  return (
    <div>
      <div className="game-container">
        <div className="game-header">
          <img className="logo" src={props.game.homeLogo} />
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
          <img className="logo" src={props.game.awayLogo} />
        </div>
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