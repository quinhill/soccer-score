import React from 'react';
import './team.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Team = (props) => {
  const mappedPlayers =
    props.squad.map(player => {
      return (
        <div className="player">
          <p>{player.number}</p>
          <button
            className="player-button"
            id={player.id}
          >
            {player.name}
          </button>
        </div>
      )
    })

  return (
    <div className="team-container">
      <div className="team">
        <h1>{props.team.name}</h1>
        <img src={props.team.logo} />
      </div>
      <div className="manager-stadium">
        <div className="manager-container">
          <p className="manager">manager:</p>
          <h3>{props.team.manager},</h3>
          <h3>{props.team.nationality}</h3>
        </div>
        <div className="stadium-container">
          <p className="stadium">stadium:</p>
          <p>{props.team.venue}</p>
          <p>{props.team.capacity}</p>
        </div>
      </div>
      <div className="players">
        <h3></h3>
        {mappedPlayers}
      </div>
    </div>
  )
}

Team.propTypes = {
  squad: PropTypes.array,
  team: PropTypes.object
}

export const mapStateToProps = state => ({
  team: state.team,
  squad: state.squad
})

export default connect(mapStateToProps)(Team)