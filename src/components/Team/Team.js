import React, { Component } from 'react';
import './team.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayerUrl } from '../../apiKeys';
import { fetchPlayer } from '../../thunks/fetchPlayer'
import { Link } from 'react-router-dom';

export class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: false
    }
  }

  getPlayer = (id) => {
    const url = getPlayerUrl(id)
    this.props.fetchPlayer(url)
    this.setState({player: true})
  }

  mappedPlayers = () => {
    return this.props.squad.map(player => {
      return (
        <div className="player">
          <p>{player.number}</p>
          <Link
            to='/player'
            className="player-link"
            onClick={() => this.getPlayer(player.id)}
          >
            {player.name}
          </Link>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="team-container">
        <div className="team">
          <h1>{this.props.team.name}</h1>
          <img src={this.props.team.logo} />
        </div>
        <div className="manager-stadium">
          <div className="manager-container">
            <p className="manager">manager:</p>
            <h3>{this.props.team.manager},</h3>
            <h3>{this.props.team.nationality}</h3>
          </div>
          <div className="stadium-container">
            <p className="stadium">stadium:</p>
            <p>{this.props.team.venue}</p>
            <p>{this.props.team.capacity}</p>
          </div>
        </div>
        <div className="players">
          <h3></h3>
          {this.mappedPlayers()}
        </div>
      </div>
    )
  }
}

Team.propTypes = {
  squad: PropTypes.array,
  team: PropTypes.object
}

export const mapStateToProps = state => ({
  team: state.team,
  squad: state.squad
})

export const mapDispatchToProps = dispatch => ({
  fetchPlayer: (url) => dispatch(fetchPlayer(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Team)