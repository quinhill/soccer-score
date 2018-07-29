import React from 'react';
import { connect } from 'react-redux';
import './team.css';
import PropTypes from 'prop-types';

export const Team = (props) => {

  
  
  return (
    <div className="team-container">
      <div className="team">
        <h1>{}</h1>
        <h3>{}</h3>
      </div>
      <div className="manager-stadium">
        <div className="manager-container">
          <p className="manager">manager:</p>
          <h3>{},</h3>
          <h3>{}</h3>
        </div>
        <div className="stadium-container">
          <p className="stadium">stadium:</p>
          <p>{}</p>
          <p></p>
          <p>{}</p>
        </div>
      </div>
      <div className="players">
        <h3></h3>
        {}
      </div>
    </div>
  )
}

Team.propTypes = {
  squad: PropTypes.object
}

export const mapStateToProps = (state) => ({
  team: state.team,
  squad: state.squad
})

export default connect(mapStateToProps)(Team);