import React, { Component } from 'react';
import './game.css';
import PropTypes from 'prop-types';
import { getTeamUrl, getSquadUrl, getGameUrl } from '../../apiKeys';
import { cleanTime } from './timeCleaner';
import { fetchTeam } from '../../thunks/fetchTeam'
import { fetchSquad } from '../../thunks/fetchSquad';
import { fetchGame } from '../../thunks/fetchGame';
import { connect } from 'react-redux';

export class Game extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    const teamId = event.target.value;
    const seasonId = event.target.id;
    const teamUrl = getTeamUrl(teamId);
    const squadUrl = getSquadUrl(seasonId, teamId);
    this.props.fetchTeam(teamUrl);
    this.props.fetchSquad(squadUrl);
  }

  getGame = (event) => {
    const gameId = event.target.id;
    const url = getGameUrl(gameId);
    this.props.fetchGame(url)
  }

  displayDetails = () => {
    const { times, scores } = this.props;
    if (times.status === 'FT' || 'LIVE') {
      return (
        <button
          className="details-button"
          onClick={this.getGame}
          id={this.props.id}
        >
          {`${scores.localteam_score}-${scores.visitorteam_score}`}
        </button>
      )
    } else if (!times.minute) {
      return (
        <button
          className="details-button"
          onClick={this.getGame}
          id={this.props.id}
        >
          {cleanTime(times.starting_at.time)}
        </button>
      )
    } else {
      return (
        <p>No details available</p>
      )
    }
  }

  render() {
    return (
      <div className="game">
        <button 
          className="button team-one"
          onClick={this.handleClick}
          value={this.props.teamHomeId}
          id={this.props.seasonId}
        >
          {this.props.teamHome}
        </button>
        {this.displayDetails()}
        <button 
          className="button team-two"
          onClick={this.handleClick}
          value={this.props.teamAwayId}
          id={this.props.seasonId}
        >
          {this.props.teamAway}
        </button>
      </div>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object,
  fetchTeam: PropTypes.func,
  fetchSquad: PropTypes.func,
  fetchGame: PropTypes.func
}

export const mapStateToProps = state => ({
  game: state.game
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url)),
  fetchSquad: (url) => dispatch(fetchSquad(url)),
  fetchGame: (url) => dispatch(fetchGame(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);