import React from 'react';
import { connect } from 'react-redux';
import './team.css';
import PropTypes from 'prop-types';
import { cleanTeam } from './teamCleaner';

export const Team = (props) => {
  const team = cleanTeam(props)
  return (
    <div>
      <h1 className="team-name">{team.name}</h1>
    </div>
  )
}

Team.propTypes = {
  squad: PropTypes.object
}

export const mapStateToProps = (state) => ({
  squad: state.squad
})

export default connect(mapStateToProps)(Team);