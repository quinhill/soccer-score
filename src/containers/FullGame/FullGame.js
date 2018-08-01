import React from 'react';
import './full-game.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

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
    return events.map(event => {
      if (event.type === "subst") {
        return (
          <div>

          </div>
        )
      }
      if (parseInt(event.team_id) === props.game.homeId) {
        return (
          <div className="event">
            <img className="home-img" src={`/${event.type}.png`} />
            <p className="home-name">{event.player_name}</p>
            <p className="time">{`'${event.minute}`}</p>
          </div>
        )
      } else {
        return (
          <div className="event">
            <p className="time">{`'${event.minute}`}</p>
            <p className="away-name">{event.player_name}</p>
            <img className="away-img" src={`/${event.type}.png`} />
          </div>
        )
      }
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
      <div className="events-container">
        <div className="events">
          {reduceEvents()}
        </div>
      </div>
    </div>
  )
}

FullGame.propTypes = {
  game: PropTypes.object
}

export const mapStateToProps = (state) => ({
  game: state.game,
})

export default connect(mapStateToProps)(FullGame);