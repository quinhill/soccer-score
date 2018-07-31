import React, { Component } from 'react';
import './player.css';
import { connect } from 'react-redux';

export class Player extends Component {

  render() {
    return (
      <div className="container-container">
        <div className="player-container">
          <div className="name-image-container">
            <h1 className="player-name">{this.props.player.name}</h1>
            <img className="player-image" src={this.props.player.image} />
          </div>
          <div className="other-info-container">
            <p className="other-info"><span>Nationality:</span>{this.props.player.nationality}</p>
            <p className="other-info"><span>Date of Birth:</span>{this.props.player.birthdate}</p>
            <p className="other-info"><span>Birth Place:</span>{this.props.player.birthplace}</p>
            <p className="other-info"><span>Club:</span>{this.props.player.team}</p>
            <p className="other-info"><span>Position:</span>{this.props.player.position}</p>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);