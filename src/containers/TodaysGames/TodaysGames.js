import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../thunks/fetchTeam';
import { fetchSquad } from '../../thunks/fetchSquad';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import './todays-games.css'
import { Game } from '../../components/Game/Game';
import { fetchGame } from '../../thunks/fetchGame';
import FullGame from '../FullGame/FullGame';
import { setDisplay } from '../../actions/setDisplayAction';
import Player from '../Player/Player';

export class TodaysGames extends Component {

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
          />
        </div>
      ))
      return (
        <div
          key={index}
          className="league-div"
        >
          <h1 className="league-name">{league}</h1>
          {gamesDisplay}
        </div>
      )
    })
  }


  fetchTeam = (url) => {
    this.props.fetchTeam(url);
    this.props.setDisplay('team')
    this.props.history.push('/team');
  }

  fetchSquad = (url) => {
    this.props.fetchSquad(url);
  }

  fetchGame= (url) => {
    this.props.fetchGame(url);
    this.props.setDisplay('game')
    this.props.history.push('/game');
  }

  team = () => (<Team />)

  render() {
    if (this.props.display === 'team') {
      return (
        <div className="team">
          <div className="display">
            {this.team()}
          </div>
        </div>
      )
    } else if (this.props.display === 'game') {
      return (
        <div>
          <FullGame />
        </div>
      )
    } else if (this.props.display === 'player') {
      return (
        <div>
          <Player />
        </div>
      )
    } else if (this.props.display === 'home' || '') {
      return (
        <div className="todays-games">
          <div className="display">
            {this.displayGames()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="todays-games">
          <div className="display-games">
            {this.displayGames()}
          </div>
        </div>
      )
    }
  }
}

TodaysGames.propTypes = {
  liveScores: PropTypes.array,
  squad: PropTypes.array,
  team: PropTypes.object,
  game: PropTypes.object,
  display: PropTypes.string,
  fetchTeam: PropTypes.func,
  fetchSquad: PropTypes.func,
  fetchGame: PropTypes.func,
  setDisplay: PropTypes.func,
}

export const mapStateToProps = (state) => ({
  liveScores: state.liveScores,
  team: state.team,
  squad: state.squad,
  game: state.game,
  display: state.display
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url)),
  fetchSquad: (url) => dispatch(fetchSquad(url)),
  fetchGame: (url) => dispatch(fetchGame(url)),
  setDisplay: (clicked) => dispatch(setDisplay(clicked))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);