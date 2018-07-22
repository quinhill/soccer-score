import React from 'react';
import { connect } from 'react-redux';
import './team.css';

export const Team = (props) => {

  return (
    <div>
      <h1>{props.team.name}</h1>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  team: state.team
})

export default connect(mapStateToProps)(Team);