import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../thunks/fetchTeam';
import { fetchLeague } from '../../thunks/fetchLeague';
import * as key from '../../apiKeys';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import './todays-games.css'
import { Game } from '../../components/Game/Game';

export class TodaysGames extends Component {
  constructor() {
    super()
    this.state = {
      team: false
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
            fetchGame={this.fetchGame}
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
      team: !this.state.team,
      game: !this.props.game
    });
    this.props.history.push('/team');
  }

  fetchGame= (url) => {
    this.props.fetchGame(url);
    this.setState({ 
      game: !this.state.game,
      team: !this.state.team
    });
    this.props.history.push('/game');
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
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url)),
  fetchLeague: (url) => dispatch(fetchLeague(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);