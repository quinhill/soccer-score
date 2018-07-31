import React, { Component } from 'react';
import './team.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayerUrl } from '../../apiKeys';
import { fetchPlayer } from '../../thunks/fetchPlayer'
import { Link } from 'react-router-dom';
import { setDisplay } from '../../actions/setDisplayAction';

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
    this.props.setDisplay('player')
  }

  mappedPlayers = () => {
    return this.props.squad.map(player => {
      return (
        <div className="player">
          <p className="player-number">{player.number}</p>
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
      <div className="container-container">
        <div className="team-container">
          <div className="team">
            <img id="team-logo" src={this.props.team.logo} />
            <h1 className="team-name">{this.props.team.name}</h1>
          </div>
          <div className="manager-stadium">
            <div className="manager-container">
              <h3 className="manager"><span>Manager:</span>{this.props.team.manager},</h3>
              <h3 className="manager">{this.props.team.nationality}</h3>
            </div>
            <div className="stadium-container">
              <p className="stadium"><span>Stadium:</span>{this.props.team.venue}</p>
              <p className="stadium"><span>Capacity:</span>{this.props.team.capacity}</p>
            </div>
          </div>
          <div className="players">
            <h3></h3>
            {this.mappedPlayers()}
          </div>
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
  fetchPlayer: (url) => dispatch(fetchPlayer(url)),
  setDisplay: (clicked) => dispatch(setDisplay(clicked))
})

export default connect(mapStateToProps, mapDispatchToProps)(Team)