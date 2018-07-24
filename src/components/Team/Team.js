import React from 'react';
import { connect } from 'react-redux';
import './team.css';
import PropTypes from 'prop-types';

export const Team = (props) => {

  let players;
  if (props.players) {
    players = props.players.map((player, index) => {
      console.log(player)
      return <p key={index}>{player}</p>
    })
  }
  
  return (
    <div>
      <h1>{props.manager}</h1>
      <div>
        {players}
      </div>
    </div>
  )
}

Team.propTypes = {
  squad: PropTypes.object
}

export const mapStateToProps = (state) => ({
  squad: state.squad,
  manager: state.squad.managerName,
  players: state.squad.players
})

export default connect(mapStateToProps)(Team);