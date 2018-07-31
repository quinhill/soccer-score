import React, { Component } from 'react';
import './player.css';
import { connect } from 'react-redux';

export class Player extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.player.name}</h1>
        <img src={this.props.player.image} />
        <p>{this.props.player.nationality}</p>
        <p>{this.props.player.birthdate}</p>
        <p>{this.props.player.birthplace}</p>
        <p>{this.props.player.team}</p>
        <p>{this.props.player.position}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);