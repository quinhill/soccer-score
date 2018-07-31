import React from 'react';
import './player.css';
import { connect } from 'react-redux';

export const Player = (props) => {

  console.log(props)
  return (
    <div>

    </div>
  )
}

export const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(connect);