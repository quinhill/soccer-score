import React from 'react';
import { connect } from 'react-redux';
import './team.css';
import PropTypes from 'prop-types';

export const Team = (props) => {

  let players;
  if (props.players) {
    players = props.players.map((player, index) => {
      return (
        <div className="player">
          <p key={index}>{player.name}</p>
          <p>{player.position}</p>
        </div>
      )
    })
  }
  
  return (
    <div className="team-container">
      <div className="team">
        <h1>{props.name},</h1>
        <h3>{props.country}</h3>
      </div>
      <div className="manager-stadium">
        <div className="manager-container">
          <p className="manager">manager:</p>
          <h3>{props.manager},</h3>
          <h3>{props.managerNationality}</h3>
        </div>
        <div className="stadium-container">
          <p className="stadium">stadium:</p>
          <p>{props.stadiumName}</p>
          <p>capacity:</p>
          <p>{props.stadiumCapacity}</p>
        </div>
      </div>
      <div className="players">
        <h3>squad:</h3>
        {players}
      </div>
    </div>
  )
}

Team.propTypes = {
  squad: PropTypes.object
}

export const mapStateToProps = (state) => ({
  name: state.squad.teamName,
  manager: state.squad.managerName,
  managerNationality: state.squad.managerNationality,
  players: state.squad.players,
  country: state.squad.country,
  stadiumName: state.squad.stadiumName,
  stadiumCapacity: state.squad.stadiumCapacity
})

export default connect(mapStateToProps)(Team);