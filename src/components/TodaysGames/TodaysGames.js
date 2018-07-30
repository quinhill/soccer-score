import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../thunks/fetchTeam';
import { fetchLeague } from '../../thunks/fetchLeague';
import { fetchSquad } from '../../thunks/fetchSquad';
import * as key from '../../apiKeys';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import './todays-games.css'
import { Game } from '../../components/Game/Game';
import { currentTeam } from '../../actions/currentTeamAction';

export class TodaysGames extends Component {
  constructor() {
    super()
    this.state = {
      team: false,
      game: false,
    }
  }

  displayGames = () => {
    const games = this.props.liveScores;
    return Object.keys(games).map((league, index) => {
      const gamesDisplay = games[league].map((game, index) => (
        <div>
          <Game 
            {...game} 
            fetchTeam={this.fetchTeam}
            fetchSquad={this.fetchSquad} 
            fetchGame={this.fetchGame}
            currentTeam={this.currentTeam}
            key={index}
          />
        </div>
      ))
      return (
        <div
          key={index}
          className="league-div"
        >
          <h1>{league}</h1>
          {gamesDisplay}
        </div>
      )
    })
  }


  fetchTeam = (url) => {
    this.props.fetchTeam(url);
    this.setState({
      team: true,
    });
    this.props.history.push('/team');
  }

  fetchSquad = (url) => {
    this.props.fetchSquad(url);
  }

  fetchGame= (url) => {
    this.props.fetchGame(url);
    this.props.history.push('/game');
  }

  currentTeam = (id) => {
    this.props.currentTeam(id)
  }

  team = () => (<Team />)

  render() {
    if (this.state.team) {
      return (
        <div className="team">
          <div className="display">
            {this.team()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="todays-games">
          <div className="display">
            {this.displayGames()}
          </div>
        </div>
      )
    }
  }
}

TodaysGames.propTypes = {
  schedule: PropTypes.array,
  team: PropTypes.object,
  fetchTeam: PropTypes.func
}

export const mapStateToProps = (state) => ({
  liveScores: state.liveScores,
  id: state.currentTeam,
  team: state.team[state.currentTeam],
  squad: state.squad[state.currentTeam]
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url)),
  fetchSquad: (url) => dispatch(fetchSquad(url)),
  fetchLeague: (url) => dispatch(fetchLeague(url)),
  currentTeam: (id) => dispatch(currentTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);